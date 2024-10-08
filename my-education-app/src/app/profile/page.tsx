//@ts-nocheck
"use client";

import { Button } from "@/components/new-york/ui/button";
import { Card, CardContent, CardFooter } from "@/components/new-york/ui/card";
import { Input } from "@/components/new-york/ui/input";
import { Label } from "@/components/new-york/ui/label";
import { Textarea } from "@/components/new-york/ui/textarea";

import React, { useEffect, useState } from "react";
import { useLoadUserQuery } from "@/redux-toolkit/features/api/apiSlice";
import { useEditProfileMutation, useUpdateAvatarMutation } from "@/redux-toolkit/features/user/userApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Account = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [userData, setUserData] = useState();
  const [editProfile,{isSuccess:success,error:updateError}]=useEditProfileMutation();

  useEffect(() => {
    if (!userData && user) {
      console.log("Setting userData with:", user);
      setUserData(user);
    }
  }, [user]);
  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const [loadUser, setLoadUser] = useState(false);
  const {} = useLoadUserQuery(undefined, {
    skip: loadUser ? false : true,
  });

  const imageHandler = (e: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        const avatar = fileReader.result;

        updateAvatar(avatar);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess || success) {
      setLoadUser(true);
    } if(error || updateError) {
      console.log(error);
    }
  }, [isSuccess, error,success,updateError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(userData.name!==""){
     const res= await editProfile({
        name:userData.name,
       
      });
      console.log(res);
      
    if(res?.data?.success==true){
      toast.success("user update successful")
    }

    }
  };
  const updateHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    //   <div className="mx-auto max-w-4xl">
    //   <div className="mb-8 flex items-center justify-between">
    //     <h1 className="text-2xl font-bold">My Account</h1>
    //     <Button variant="outline">Edit Profile</Button>
    //   </div>
    //   <div className="grid gap-8">
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Personal Information</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <div className="grid grid-cols-2 gap-6">
    //           <div className="grid gap-2">
    //             <Label htmlFor="name">Name</Label>
    //             <Input id="name" defaultValue="Jane Doe" />
    //           </div>
    //           <div className="grid gap-2">
    //             <Label htmlFor="email">Email</Label>
    //             <Input id="email" defaultValue="jane@example.com" />
    //           </div>
    //           <div className="grid gap-2">
    //             <Label htmlFor="phone">Phone</Label>
    //             <Input id="phone" defaultValue="+1 (555) 987-6543" />
    //           </div>
    //           <div className="grid gap-2">
    //             <Label htmlFor="location">Location</Label>
    //             <Input id="location" defaultValue="San Francisco, CA" />
    //           </div>
    //         </div>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>About Me</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <Textarea
    //           id="about"
    //           defaultValue="I am a lifelong learner with a passion for technology and personal growth. I enjoy taking online courses to expand my knowledge and skills. In my free time, I like to read, travel, and spend time with friends and family."
    //           className="min-h-[200px]"
    //         />
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Security</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <div className="grid gap-4">
    //           <div className="grid gap-2">
    //             <Label htmlFor="current-password">Current Password</Label>
    //             <Input id="current-password" type="password" />
    //           </div>
    //           <div className="grid gap-2">
    //             <Label htmlFor="new-password">New Password</Label>
    //             <Input id="new-password" type="password" />
    //           </div>
    //           <div className="grid gap-2">
    //             <Label htmlFor="confirm-password">Confirm Password</Label>
    //             <Input id="confirm-password" type="password" />
    //           </div>
    //           <Button>Update Password</Button>
    //         </div>
    //       </CardContent>
    //     </Card>
    //   </div>
    // </div>
    <div className="flex flex-1 flex-col">
      <main className="flex-1 px-4 py-6 sm:px-6">
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">Profile</h2>
            <p className="text-muted-foreground">
              View and manage your profile information.
            </p>
          </div>
          <Card className="p-4 cursor-pointer">
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={userData?.name}
                    onChange={updateHandle}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    value={userData?.email}
                    onChange={updateHandle}
                    disabled
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  defaultValue="I'm a passionate learner and love to explore new technologies. I have a strong background in front-end development and am always eager to expand my skills."
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" defaultValue="San Francisco, CA" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://emilyjohnson.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" defaultValue="Front-end Developer" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Inc." />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" onClick={handleSubmit} value="Update" className="ml-auto">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Account;
