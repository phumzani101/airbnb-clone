import prismaClient from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name, password } = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prismaClient.user.create({
      data: { email, name, password: hashedPassword },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("REGISTER_ERROR", error);
    return new NextResponse("Internal Server error", { status: 500 });
  }
}
