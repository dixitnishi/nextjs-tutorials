import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  return Response.json({
    message: "User Sign up Completed",
  });
}

export async function submitSignup(uname: string, pwd: string) {
  try {
    await client.user.create({
      data: {
        username: uname,
        password: pwd,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}
