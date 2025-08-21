import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import dbConnect from '../../../lib/config/mongodb';
import User from '../../../lib/models/User';

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    await dbConnect();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'The user already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const { password: _, ...userWithoutPassword } = user.toObject();

    return NextResponse.json(
      {
        success: true,
        data: userWithoutPassword,
        message: 'User created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
