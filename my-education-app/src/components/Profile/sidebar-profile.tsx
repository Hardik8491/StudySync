import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { RiLockUnlockFill } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";

type Props = {
  user: any;
  active: number;
  avatar: string;
  setActive: (active: number) => void;
  logoutHandler: any;
};

const SideBarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logoutHandler,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex    items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "dark:bg-slate-800 bg-white  " : " bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          height={200}
          width={200}
          src={user.avatar ?? "/placeholder.jpg"}
          alt={user.name}
          className="w-[20px] h-[20px]  800px:h-[30px] 800px:w-[30px] cursor-pointer rounded-full"
        />
        <h5 className="pl-2 md:block hidden font-Poppins dark:text-white text-black  ">
          My Account
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 2 ? "dark:bg-slate-800 bg-white  " : " bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockUnlockFill size={20} fill="#fff" />
        <h5 className="pl-2 md:block hidden font-Poppins dark:text-white text-black  ">
          Change Password
        </h5>
      </div>

      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 3 ? "dark:bg-slate-800 bg-white  " : " bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <SiCoursera size={20} fill="#fff" />
        <h5 className="pl-2 md:block hidden font-Poppins dark:text-white text-black  ">
          Enrolled Coursers
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 3 ? "dark:bg-slate-800 bg-white  " : " bg-transparent"
        }`}
        onClick={() => logoutHandler()}
      >
        <AiOutlineLogout size={20} fill="#fff" />
        <h5 className="pl-2 md:block hidden font-Poppins dark:text-white text-black  ">
          Log Out
        </h5>
      </div>
    </div>
  );
};

export default SideBarProfile;
