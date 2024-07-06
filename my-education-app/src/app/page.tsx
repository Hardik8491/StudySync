"use client";

import React, { FC, useState } from "react";
import Heading from "../utils/heading";
import Header from "@/components/header";
import Hero from "@/components/intro-hero";

interface Props {
    name: string;
}
const Page: FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
  
    
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");
    console.log(route)
    return (
        <div>
            <Heading
                title='StudySync'
                description='StudySync is a platform for students to learn and get from teachers'
                keywords='Programming,FullStack,System Design,Redux,RTK,ML'
                
            />
            <Header 
            setRoute={setRoute}
            route={route}
            open={open} setOpen={setOpen} activeItem={activeItem} />
            <Hero />
        </div>
    );
};

export default Page;
