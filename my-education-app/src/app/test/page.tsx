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
const url = process.env.NEXT_PUBLIC_SERVER_URL;


const Testturur = () => {
  return (<div>
      <section className="py-12 md:py-20 bg-muted/10 relative h-screen">
    <div className="bg-black blur-3xl absolute h-screen w-full opacity-20 hero_animation"></div>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Course Categories
          </h2>
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
          <div className="flex justify-center mt-8">
            <Button variant="default">Show More</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testturur;
