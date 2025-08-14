export interface Post {
    _id?: string;
    title: string;
    content: string;
    author: string;
    tags: string[];
    published: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }