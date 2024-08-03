// zod validation Schema
import { z } from 'zod';
const val: string[] = ['male', 'female', 'others'];

const formOneSchema = z.object({
  firstname: z.string().min(1, { message: "firstname shouldn't be empty" }),
  lastname: z.string().min(1, { message: "lastname shouldn't be empty" }),
  username: z.string().min(1, { message: "username shouldn't be empty" }),
});

const formTwoSchema = z.object({
  email: z
    .string()
    .email({ message: 'please type in proper format' })
    .min(1, { message: 'email is required' }),
  password: z
    .string()
    .min(8, { message: 'password should contain atleast 8 character' }),
  confirmPassword: z.string().min(8, { message: '8 character' }),
});

const formThreeSchema = z.object({
  DOB: z.string().date().min(1, { message: "shouldn't be empty" }),
  gender: z.enum(val).optional(),
  profilepicture: z.instanceof(File).optional(),
});

export const registerSchema = formOneSchema
  .merge(formTwoSchema)
  .merge(formThreeSchema);

export type registerSchemaTypes = z.infer<typeof registerSchema>;
