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

export interface UserI {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Extender tipos de NextAuth
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    }
  }

  interface User {
    id: string;
    email: string;
    name: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}