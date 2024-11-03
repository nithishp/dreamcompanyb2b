import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import JobPublishActions from "./_components/JobPublishActions";
import Banner from "@/components/ui/Banner";
import IconBadge from "@/components/IconBadge";
import TitleForm from "./_components/TitleForm";
import CategoryForm from "./_components/CategoryForm";

const JobDetailsPage = async ({ params }) => {
  const jobId = await params.jobId;
  const validObjectIdRegex = /^[0-9a-zA-Z]{24}$/;
  if (!validObjectIdRegex.test(jobId)) {
    console.log("No Job Id");
    return redirect("admin/jobs");
  }

  const { userId } = await auth();
  if (!userId) {
    console.log("No user Id");
    return redirect("/");
  }

  const job = await db.job.findUnique({
    where: {
      id: jobId,
      userId,
    },
  });
  const categories = await db.category.findMany({
    orderBy:{name:'asc'}
  });
  if (!job) {
    return redirect("/admin/jobs");
  }

  const requiredFields = [job.title, job.description, job.imageUrl,job.categoryId];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;
  const isComplete = requiredFields.every(Boolean);
  return (
    <div className="p-6">
      <Link
        href="/admin/jobs"
        className="flex items-center gap-3 text-sm text-neutral-500"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <div className="flex items-center justify-between my-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Job Setup</h1>
          <span className="text-sm text-neutral-500">
            Complete All Fields {completionText}
          </span>
        </div>
        <JobPublishActions
          jobId={jobId}
          isPublished={job.isPublished}
          disabled={!isComplete}
        />
      </div>
      {!job.isPublished && (
        <Banner
          variant="warning"
          label="This Job is not published. It will not be visible in the job list"
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-lg text-neutral-700">Customize your job</h2>
          </div>

          <TitleForm initialData={job} jobId={jobId} />
          <CategoryForm initialData={job} jobId={jobId} options={categories.map(category => ({
            label:category.name,
            value:category.id
          }))} />
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
