"use client";
import { Button } from "@/components/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/new-york/ui/card";
import { Input } from "@/components/new-york/ui/input";
import { Label } from "@/components/new-york/ui/label";
import { UserAuthForm } from "@/components/user-auth-form";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "@/redux-toolkit/features/auth/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Register = () => {
  const router = useRouter();
  const [register, { isError, data, isLoading, error, isSuccess }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      const message =
        data?.message ||
        "Registration successful! Please check your email for activation link";
      toast.success(message);
      toast.success(
        "Registration successful! Please check your email for activation link"
      );
      router.push("/auth/verification");
    }
    if (error) {
      if ("data" in error) {
        const ErrorData = error as any;
        toast.error(ErrorData.data.message);
      }
    }
  }, [data?.message, error, isSuccess]);
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      console.log(name, email, password);
      const data = {
        name,
        email,
        password,
      };
      await register(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <Card className="mx-auto max-w-md ">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onClick={handleSubmit}>
            <div className="grid gap-4">
              {/* <div className="grid grid-cols-2 gap-4">
               <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Max"
                    required
                  />
                </div> 
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div> 
                
              </div> */}
              <div className="grid gap-2">
                  <Label htmlFor="name">FullName</Label>
                  <Input
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Roy Robinson"
                    required
                  />
                </div>
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                />
              </div>
              <Button type="submit" value="Sign Up" className="w-full">
                Create an account
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Register;
