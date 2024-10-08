"use client";

import { Button } from "@/components/new-york/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/new-york/ui/card";
import { Input } from "@/components/new-york/ui/input";
import { Label } from "@/components/new-york/ui/label";
import { MailIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useActivationMutation } from "@/redux-toolkit/features/auth/authApi";
type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

const Verification = () => {
  const router = useRouter();
  const { token } = useSelector((state: any) => state.auth);
  console.log(token);

  const [activation, { isSuccess, error }] = useActivationMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Account activated successfully");
      router.push("/auth/login");
    }
    if (error) {
      if ("data" in error) {
        const ErrorData = error as any;
        toast.error(ErrorData.data.message);
        setInvalidError(true);
      } else {
        console.log("An error occurred:", error);
      }
    }
  }, [error, isSuccess]);

  const [InvalidError, setInvalidError] = useState<boolean>(false);
  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    "0": "",
    "1": "",
    "2": "",
    "3": "",
  });
  const inputREF = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const verificationHandle = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 4) {
      setInvalidError(true);
      return;
    }
    await activation({
      activationToken: token,
      activationCode: verificationNumber,
    });
  };
  const handleInputChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return setInvalidError(true);
    setInvalidError(false);

    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);
    if (value === "" && index > 0) {
      inputREF[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputREF[index + 1].current?.focus();
    }
  };
  return (
    <>
      <Card className="mx-auto max-w-md">
        <CardHeader className="space-y-4 text-center">
          <div className="flex items-center justify-center">
            <MailIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Verify Your Email
          </h1>
          <p className="text-muted-foreground">
            Verification code was sent to hardikbhammar808@gmail.com. Check your
            spam folder if you can`t find the email.
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label htmlFor="otp" className="sr-only">
                Verification Code
              </Label>
              <div className="flex items-center justify-center gap-3">
                {Object.keys(verifyNumber).map((key, index) => (
                  <Input
                    key={key}
                    ref={inputREF[index]}
                    type="number"
                    className={`w-[40px] h-[40px] border-[3px] flex items-center   justify-center text-black dark:text-white text-[18px] font-Poppins outline-none text-center  ${InvalidError} ? "shake border-red-500" : "dark:border-white border-[#0000004a]"}`}
                    max={1}
                    value={verifyNumber[key as keyof VerifyNumber]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                ))}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex gap-2 justify-between">
          <Button variant="outline">Resend Code</Button>
          <Button type="submit"   onClick={verificationHandle} className="w-full">
            Verify
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Verification;
