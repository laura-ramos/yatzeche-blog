"use client";

import { useState, useEffect } from 'react';
import { ApiResponse, UserI } from '../lib/types/definitions';

export const useUsers = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (postData: UserI) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      const result: ApiResponse<UserI> = await response.json();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error(result.error || 'Error creating user');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error creating user');
      throw err;
    }
  };


  return {
    loading,
    error,
    createUser,
  };
};