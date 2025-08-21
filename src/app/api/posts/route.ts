import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/mongodb';
import Post from '@/lib/models/Post';
import { AuthenticatedRequest } from '@/lib/middleware/Auth';
import type { NextApiResponse } from 'next';

export async function GET(req: AuthenticatedRequest) {
  try {
    await dbConnect()

    let query = {};
    if (!['admin', 'editor'].includes(req.user.role)) {
      query = { published: true };
    }
    
    const posts = await Post.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    await dbConnect();
    
    const post = await Post.create(body);
    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
