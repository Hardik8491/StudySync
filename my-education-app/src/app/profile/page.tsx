"use client";

import React, { FC, useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/intro-hero";
import Heading from "@/utils/heading";
import Protected from "../hooks/useProtected";

import { useSelector } from "react-redux";
import Profile from "@/components/Profile/profile";



type Props = {};

const ProfilePage: FC<Props> = (props) => {
  const {user} =useSelector((state:any)=>state.auth);
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
   <Protected>
        <Heading
            title={`${user.name}'s Profile`}
            description="StudySync is a platform for students to learn and get from teachers"
            keywords="Programming,FullStack,System Design,Redux,RTK,ML"
        />
        <Header
            setRoute={setRoute}
            route={route}
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}
        />
        <Profile user={user}/>
   </Protected>
    </div>
  );
};

export default ProfilePage;
