"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
});
const TitleForm = ({ initialData, jobId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values) => {
    try {
        const response = await axios.patch(`/api/jobs/${jobId}`,values);
        toast.success('Job updated')
        toggleEditing();
        router.refresh();
    } catch (error) {
        toast.error('Something went wrong')
        
    }
  };

  const toggleEditing = () => setIsEditing((current) => !current);
  return (
    <div className="mt-6 border bg-neutral-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        <h1>Job Title</h1>
        <Button onClick={toggleEditing} variant="ghost">
          {isEditing ? (
            "cancel"
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>

      {!isEditing && <p className="text-sm mt-2">{initialData.title}</p>}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                    className='bg-white'
                      disabled={isSubmitting}
                      placeholder="e.g 'Full-stack Developer'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
                <Button disabled={!isValid || isSubmitting} type='submit' >
                    {isSubmitting && <Loader className="animate-spin" />}
                        Save
                </Button>
                
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default TitleForm;
