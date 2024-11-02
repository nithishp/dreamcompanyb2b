import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { userId } = await auth();
    const { title } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized userId", { status: 401 });
    }
    console.log(userId,"userId")
    if (!title) {
      return new NextResponse("Job title cannot be empty", { status: 400 });
    }
    console.log(title,"title")
    const job = await db.job.create({
      data: {
        userId,
        title
      },
    });
    return new NextResponse(JSON.stringify(job));
  } catch (error) {
    console.log(`[JOB_POST]${error}`);
    return new NextResponse("Internal Server Error in JOB_POST", { status: 500 });
  }
};
