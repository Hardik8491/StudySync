"use client";

import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { Provider } from "./provider";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import OnlineStatus from "@/lib/NetworkStatusWrapper";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux-toolkit/store";


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
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white 
                bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <Provider>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <SessionProvider>
                  <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <OnlineStatus />
              {children}
              <Footer />
             
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
         

          </SessionProvider>
          {/* </PersistGate> */}
        </Provider>
      </body>
    </html>
  );
}

// const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isLoading } = useLoadUserQuery({});
//   return <>{isLoading ? <Loader /> : <> {children}</>}</>;
// };
