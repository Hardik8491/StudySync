"use client";

import { ThemeSwitcher } from "@/components/theme-swicher";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItems from "./nav-list";
import {
    BookOpen,
    BookOpenText,
    Menu,
    Search,
    User,
    VerifiedIcon,
} from "lucide-react";
import CustomModel from "./custom-modal";
import SignUp from "./auth/sign-up";
import Login from "./auth/login";
import Verification from "./auth/Verification";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
    useLogoutQuery,
    useSocialAuthMutation,
} from "@/redux-toolkit/features/auth/authApi";
import toast from "react-hot-toast";
import Cart from "./cart";
import { BiSync } from "react-icons/bi";
const placeholder =
    "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";

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
    console.log(user);

    const { data } = useSession();
    const [logout, setLogout] = React.useState(false);
    const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
    const {} = useLogoutQuery(undefined, {
        skip: !logout ? true : false,
    });
    useEffect(() => {
        if (!user) {
            if (data) {
                socialAuth({
                    email: data?.user?.email,
                    name: data?.user?.name,
                    avatar: data?.user?.image,
                });
            }
            if (data === null) {
                if (isSuccess) {
                    toast.success("Login Successfully");
                }
            }
            if (isSuccess) {
                if (data === null) {
                    setLogout(true);
                }
            }
        }
    }, [data, user]);

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
        <div className='w-full relative border'>
            <div
                className={`${
                    active
                        ? "dark:bg-opacity-50   dark:bg-gradient-to-b dark:from-gray-900 dark:to-black  bg-white fixed top-0 left-0 z-[80] dark:border-[#ffffff1c] border-b w-full "
                        : " z-[80] dark:border-[#ffffff1c] border-b  dark:shadow w-full "
                }`}
            >
                <div className='w-full max-w-[95%] sm:max-w-[92%] mx-auto py-2 h-full'>
                    <div className='w-full h-[80px] flex items-center justify-between px-3'>
                        {/* Logo */}
                        <Link
                            href='/'
                            className='text-[25px] whitespace-nowrap flex items-center gap-2 font-Poppins font-semibold text-black dark:text-white'
                        >
                            <span className='flex items-center justify-center'>
                                <BookOpenText className='text-[#43ab59] font-semibold h-9 w-9' />
                            </span>
                            <h2 className='flex whitespace-nowrap  items-start font-semibold text-[#43ab59]'>
                                <span className='text-black'>Study</span>
                                Sync
                            </h2>
                        </Link>

                        {/* Search */}
                        <div className='relative group xl:block hidden'>
                            <div className='hidden sm:flex bg-gray-200 px-4 py-2 rounded group-focus-within:bg-white group-focus-within:ring-1 group-focus-within:ring-[#098b99] items-center text-[#098b99] transition-all duration-300'>
                                <input
                                    type='text'
                                    placeholder='Search Courses'
                                    className='bg-transparent placeholder:text-sm placeholder:text-gray-500 placeholder:font-Poppins outline-none flex-1'
                                />
                                <span className='border border-l-0 rounded-r px-3 py-1'>
                                    <Search />
                                </span>
                            </div>
                        </div>

                        {/* Navbar */}
                        <div className='flex items-center space-x-4'>
                            <NavItems
                                activeItem={props.activeItem}
                                isMobile={false}
                            />

                            <Cart />

                            <div className='sm:hidden border bg-gray-100 rounded-sm'>
                                <Menu
                                    className='cursor-pointer h-6 w-10 dark:text-white text-[#098b99]'
                                    size={25}
                                    onClick={() => setOpenSidebar(!openSidebar)}
                                />
                            </div>

                            {user ? (
                                <Link href='/profile'>
                                    <div className='relative h-8 w-8'>
                                        <Image
                                            src={
                                                user.avatar ??
                                                "/placeholder.jpg"
                                            }
                                            fill
                                            className='rounded-full'
                                            alt={user.name || "User Avatar"}
                                        />
                                    </div>
                                </Link>
                            ) : (
                                <div className='default-btn hidden md:flex flex-1' onClick={() => props.setOpen(true)}>
                                    Register Now
                                </div>
                            )}

                            <ThemeSwitcher />
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
