import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    const { userId } = await auth();
    const jobId = params.jobId;
    const updatedValues = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized userId", { status: 401 });
    }
    if (!jobId) {
      return new NextResponse("jobId is missing", { status: 401 });
    }

    if (!updatedValues.title) {
      return new NextResponse("Job title cannot be empty", { status: 400 });
    }

    const job = await db.job.update({
      where: {
        id: jobId,
        userId,
      },
      data: {
        ...updatedValues,
      },
    });

    return new NextResponse(JSON.stringify(job));
  } catch (error) {
    console.error(`[JOB_PATCH] ${error}`);
    return new NextResponse("Internal Server Error in JOB_PATCH", {
      status: 500,
    });
  }
}
