"use client";

import { useState, useEffect } from 'react';
import { Post, ApiResponse } from '../lib/types/Post';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener todos los posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/posts');
      const result: ApiResponse<Post[]> = await response.json();
      
      if (result.success && result.data) {
        setPosts(result.data);
      } else {
        setError(result.error || 'Error fetching posts');
      }
    } catch (err) {
      setError('Error fetching posts');
    } finally {
      setLoading(false);
    }
  };

  // Crear post
  const createPost = async (postData: Omit<Post, '_id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      const result: ApiResponse<Post> = await response.json();
      
      if (result.success && result.data) {
        setPosts(prev => [result.data!, ...prev]);
        return result.data;
      } else {
        throw new Error(result.error || 'Error creating post');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error creating post');
      throw err;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    createPost,
    refetch: fetchPosts,
  };
};