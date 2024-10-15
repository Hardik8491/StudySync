// @ts-nocheck
"use client";

import React, { FC, useState } from "react";
import Heading from "../utils/heading";
import Header from "@/components/header";
import Hero from "@/components/intro-hero";

import {
  BarChartIcon,
  BookIcon,
  BrushIcon,
  CodeIcon,
  CompassIcon,
  CpuIcon,
  LayersIcon,
  SettingsIcon,
  SparkleIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/new-york/ui/button";
import HeroBanner from "@/components/hero";
import Courses from "./courses/page";
import EnhancedHomepage from "@/components/enhanced-homepage";
import PricingPlans from "@/components/pricing-plans";
const url = process.env.NEXT_PUBLIC_SERVER_URL;

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div className="bg-muted/50 dark:bg-gradient-to-r from-slate-900/10 to-stone-800/50 ">
      <Heading
        title="StudySync"
        description="StudySync is a platform for students to learn and get from teachers"
        keywords="Programming,FullStack,System Design,Redux,RTK,ML"
      />
     
      <HeroBanner />
  
      <Courses />
      <section className="pt-20 md:pt-0 py-12 md:py-20  relative h-full">
        {/* <div className="bg-black blur-2xl absolute h-full w-full opacity-30 hero_animation"></div> */}
        <div className="container">
          <div className="relative items-center flex justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Course Categories
            </h2>
            <div className="absolute inset-0  hero_animation xl:h-[50vh] xl:w-[50vh] blur-3xl  rounded-full -top-10  border opacity-50 left-[40%] " />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link
              href="#"
              className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-accent hover:text-accent-foreground transition-colors animate-slide-up"
              prefetch={false}
            >
              <CodeIcon className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Programming</span>
            </Link>
            <Link
              href="#"
              className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-accent hover:text-accent-foreground transition-colors animate-slide-up delay-100"
              prefetch={false}
            >
              <BarChartIcon className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Data Science</span>
            </Link>
            <Link
              href="#"
              className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-accent hover:text-accent-foreground transition-colors animate-slide-up delay-200"
              prefetch={false}
            >
              <BrushIcon className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Design</span>
            </Link>
            <Link
              href="#"
              className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-accent hover:text-accent-foreground transition-colors animate-slide-up delay-300"
              prefetch={false}
            >
              <BookIcon className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Business</span>
            </Link>
            <Link
              href="#"
              className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-accent hover:text-accent-foreground transition-colors animate-slide-up delay-400"
              prefetch={false}
            >
              <LayersIcon className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Marketing</span>
            </Link>
            <Link
              href="#"
              className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-accent hover:text-accent-foreground transition-colors animate-slide-up delay-500"
              prefetch={false}
            >
              <CpuIcon className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Technology</span>
            </Link>
          </div>
          <div className="flex justify-center mt-8 ">
          <Link href="/courses"     className="z-50"       prefetch={false}>

          <Button variant="default">Show More</Button>
          </Link>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="relative items-center flex justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              What Our Students Say
            </h2>
            <div className="absolute inset-0  hero_animation xl:h-[50vh] xl:w-[50vh] blur-3xl  rounded-full -top-10  border opacity-50 left-[40%] " />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-md animate-slide-up">
              <blockquote>
                <p className="text-muted-foreground mb-4">
                &quot;The courses on this platform have been a game-changer for me.
                  The content is\n engaging, the instructors are knowledgeable,
                  and I&apos;ve learned so much.&quot;
                </p>
                <cite className="text-sm font-medium">
                  - John Doe, Software Engineer
                </cite>
              </blockquote>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md animate-slide-up delay-100">
              <blockquote>
                <p className="text-muted-foreground mb-4">
                &quot;I&apos;ve been able to advance my career and gain new skills
                  thanks to the\n wide range of courses offered. Highly
                  recommended!&quot;
                </p>
                <cite className="text-sm font-medium">
                  - Jane Smith, Marketing Manager
                </cite>
              </blockquote>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md animate-slide-up delay-200">
              <blockquote>
                <p className="text-muted-foreground mb-4">
                &quot;The platforms user-friendly interface and interactive
                  learning\n materials have made my educational journey truly
                  enjoyable.&quot;
                </p>
                <cite className="text-sm font-medium">
                  - Michael Johnson, Graphic Designer
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="mb-8 space-y-2 text-center">
            <div className="relative items-center flex justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Why Choose Our Platform?
              </h2>
              <div className="absolute inset-0  hero_animation xl:h-[50vh] xl:w-[50vh] blur-3xl  rounded-full -top-10  border opacity-50 left-[40%] " />
            </div>
            <p className="text-muted-foreground">
              Discover the key features and benefits of our educational
              platform.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <CompassIcon className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Comprehensive Curriculum
              </h3>
              <p className="text-center text-muted-foreground">
                Explore a wide range of courses across various disciplines to
                expand your knowledge.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SettingsIcon className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Personalized Learning
              </h3>
              <p className="text-center text-muted-foreground">
                Tailor your learning experience with personalized
                recommendations and progress tracking.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SparkleIcon className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Expert Instructors
              </h3>
              <p className="text-center text-muted-foreground">
                Learn from industry-leading experts who are passionate about
                sharing their knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <PricingPlans/>
      </section>
    </div>
  
  );
};

export default Page;
