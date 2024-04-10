
import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

const bcrypt =  require("bcrypt");
export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    // check if email already exists 

    const existingUserByEmail = await prisma.user.findUnique({
      where: {email: email}
    })

    if(existingUserByEmail) {
      return NextResponse.json({ message: "Já existe um usuário com esse e-mail." }, { status: 409 })
    }

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      }
    })

    return NextResponse.json({ message: "User registered." }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "An error occurred while registering." }, { status: 500 })
  }
}