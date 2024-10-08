"use client"
import { Button } from "@/components/new-york/ui/button";
import { Input } from "@/components/new-york/ui/input";
import { Label } from "@/components/new-york/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useLoginMutation } from "@/redux-toolkit/features/auth/authApi";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});
type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

const Login = () => {
  const [Login, { isError, data, isLoading, error, isSuccess }] =
    useLoginMutation();
    const router=useRouter();

  useEffect(() => {
    if (isSuccess) {
  
      const message = data?.message || "Login successful";
      toast.success(message);

    router.push('/')
    }
    if (error) {
      if ("data" in error) {
        const ErrorData = error as any;
        toast.error(ErrorData.data.message);
      }
    }
  }, [data?.message, error, isSuccess]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      const data = {
        email,
        password,
      };
      await Login(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div>
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
     <form onSubmit={handleSubmit}>
     <div className="grid gap-4" >
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder='password!@%'
              required
            />
          </div>
          <Button type="submit" value="Login" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
     </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="underline">
            Sign up
          </Link>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
