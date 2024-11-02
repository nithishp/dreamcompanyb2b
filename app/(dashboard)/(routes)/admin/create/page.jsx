"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
const formSchema = z.object({
  title: z.string().min(1, { message: "Job title cannot be empty" }),
});
const JobCreatePage = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });
    const { isValid, isSubmitting } = form.formState;
    const router = useRouter();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.post('/api/jobs',values);
      router.push(`/admin/jobs/${response.data.id}`)
      toast.success('Job Created')
    } catch (error) {
      console.log(error)
      
    }
  };
  return (
    <div className="max-w-5xl min-h-screen mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your Job</h1>
        <p className="text-sm text-neutral-500">
          What would you like to name your job? Don&apos;t worry you can change
          this later
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g 'Full-stack Developer'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Role of the job</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href='/admin/jobs' >
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={isSubmitting || !isValid}>
                continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default JobCreatePage;
