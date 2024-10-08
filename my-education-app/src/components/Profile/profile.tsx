//@ts-nocheck
"use client";
import React, { FC, useState } from "react";
import { signOut } from "next-auth/react";
import SideBarProfile from "./sidebar-profile";
import {
  useLoginMutation,
  useLogoutQuery,
} from "@/redux-toolkit/features/auth/authApi";

import { redirect, useRouter } from "next/navigation";
import ProfileInfo from "./ProfileInfo";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({    }) => {
  const router = useRouter();
  const [scroll, setScroll] = React.useState(false);
  const [active, setActivate] = React.useState(1);
  const [avatar, setAvatar] = React.useState(user.avatar || "/placeholder.jpg");
  const [logout, setLogout] = React.useState(false);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });
  const logoutHandler = async () => {
    setLogout(true);
    await signOut();
    router.push("/");
  };

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }

  return (
    <div className="w-[85%] flex mx-auto ">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900  bg-white bg-opacity-90 border dark:border-[#ffffff16] border-[#00000014] rounded-[5px] shadow-sm        dark:shadow-sm mt-[80px] mb-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        }`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActivate}
          logoutHandler={logoutHandler}
        />
      </div>
      {active === 1 &&(
        <div className="w-full h-full bg-transparent mt-[80px]">
           <ProfileInfo avatar={avatar} user={user} />
        </div>
      
      )}
    </div>
  );
};

export default Profile;
