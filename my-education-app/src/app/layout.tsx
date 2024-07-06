"use client"
import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../utils/theme-provider";
import { ToastContainer } from "react-toast";
import { Toaster } from "react-hot-toast";
import { Provider } from "./provider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const josefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-josefin",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${poppins.variable} ${josefin.variable} !bg-white 
                bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
            >
                <Provider>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='system'
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster position='top-center' reverseOrder={false} />
                    </ThemeProvider>
                </Provider>
            </body>
        </html>
    );
}
