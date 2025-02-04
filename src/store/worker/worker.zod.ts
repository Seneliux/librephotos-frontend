import { z } from "zod";

export const JobDetailSchema = z
  .object({
    job_id: z.string(),
    queued_at: z.string(),
    finished: z.boolean(),
    finished_at: z.string().nullable(),
    started_at: z.string(),
    failed: z.boolean(),
    job_type_str: z.string(),
    job_type: z.number(),
    started_by: z.object({
      id: z.number(),
      username: z.string(),
      first_name: z.string(),
      last_name: z.string(),
    }),
    result: z.object({
      progress: z.object({
        target: z.number(),
        current: z.number(),
      }),
    }),
  })
  .nullish();

export const WorkerAvailabilityResponse = z.object({
  status: z.boolean(),
  queue_can_accept_job: z.boolean(),
  job_detail: JobDetailSchema,
  id: z.number().optional(),
});

export type IJobDetailSchema = z.infer<typeof JobDetailSchema>;

export type IWorkerAvailabilityResponse = z.infer<typeof WorkerAvailabilityResponse>;
