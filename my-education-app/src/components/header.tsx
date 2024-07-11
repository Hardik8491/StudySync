"use client";

import { ThemeSwitcher } from "@/components/theme-swicher";
import Link from "next/link";
import React, { FC, useState } from "react";
import NavItems from "./nav-list";
import { Menu, User, VerifiedIcon } from "lucide-react";
import CustomModel from "./custom-modal";
import SignUp from "./auth/sign-up";
import Login from "./auth/login";
import Verification from "./auth/Verification";
import { useSelector } from "react-redux";
import Image from "next/image";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    route: string;
    setRoute: (route: string) => void;
};

const Header = (props: Props) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const { user } = useSelector((state: any) => state.auth);

    if (typeof window !== "undefined") {
        window.onscroll = () => {
            if (window.scrollY > 80) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
    }

    const handleClose = (e: any) => {
        if (e.target.id === "screen") {
            setOpenSidebar(false);
        }
    };

    return (
        <div className='w-full relative'>
            <div
                className={`${
                    active
                        ? "dark:bg-opacity-50  dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 z-[80] dark:border-[#ffffff1c] border-b w-full h-[80px]"
                        : " z-[80] dark:border-[#ffffff1c] border-b  dark:shadow w-full h-[80px]"
                }`}
            >
                <div className='w-[95%]  800px:w-[92%] m-auto py-2 h-full'>
                    <div className='w-full h-[80px] flex items-center justify-between p-3'>
                        {/* logo */}
                        <div>
                            <Link
                                href={"/"}
                                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
                            >
                                StudySync
                            </Link>
                        </div>
                        {/* navbar */}
                        <div className='flex items-center '>
                            <NavItems
                                activeItem={props.activeItem}
                                isMobile={false}
                            />
                            <ThemeSwitcher />
                            <div className='800px:hidden'>
                                <Menu
                                    className='cursor-pointer dark:text-white  text-black'
                                    size={25}
                                    onClick={() => setOpenSidebar(!openSidebar)}
                                />
                            </div>
                            {user ? (
                                <>
                                    <Image src={user.avatar} alt={user.name} />
                                    
                                </>
                            ) : (
                                <User
                                    className='cursor-pointer dark:text-white hidden 800px:block text-black'
                                    size={25}
                                    onClick={() => props.setOpen(true)}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {/* mobileSidebar */}
                {openSidebar && (
                    <div
                        onClick={handleClose}
                        id='screen'
                        className='fixed w-full top-0 left-0 bg-[#00000024] dark:bg-[unset] z-[99999] h-screen '
                    >
                        <div
                            className='w-[70%] fixed z-[999999999]
                        h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0'
                        >
                            <NavItems
                                activeItem={props.activeItem}
                                isMobile={true}
                            />
                            <User
                                className='cursor-pointer  dark:text-white ml-5 my-2  text-black'
                                size={25}
                                onClick={() => props.setOpen(true)}
                            />
                            <br />
                            <br />
                            <p className='text-[16px] px-2 text-black dark:text-white'>
                                Copyright &copy; 2024 StudySync
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {props.route == "Login" && (
                <>
                    <CustomModel
                        open={props.open}
                        setOpen={props.setOpen}
                        setRoute={props.setRoute}
                        activeItem={props.activeItem}
                        component={Login}
                    />
                </>
            )}
            {props.route == "Sign-Up" && (
                <>
                    <CustomModel
                        open={props.open}
                        setOpen={props.setOpen}
                        setRoute={props.setRoute}
                        activeItem={props.activeItem}
                        component={SignUp}
                    />
                </>
            )}
            {props.route == "Verification" && (
                <>
                    <CustomModel
                        open={props.open}
                        setOpen={props.setOpen}
                        setRoute={props.setRoute}
                        activeItem={props.activeItem}
                        component={Verification}
                    />
                </>
            )}
        </div>
    );
};

export default Header;
