
"use client";

import React, { FC, useState } from "react";
import Heading from "../utils/heading";


import { motion } from 'framer-motion'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Calendar, Award, BarChart, Menu, X, CheckCircle, Star, Globe, Zap } from 'lucide-react'


const MotionLink = motion(Link)

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
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/hero";
import Courses from "./courses/page";
import EnhancedHomepage from "@/components/enhanced-homepage";
import PricingPlans from "@/components/pricing-plans";
const url = process.env.NEXT_PUBLIC_SERVER_URL;

const Page = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    // transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="bg-muted/50 dark:bg-gradient-to-r from-slate-900/10 to-stone-800/50 ">
      <Heading
        title="StudySync"
        description="StudySync is a platform for students to learn and get from teachers"
        keywords="Programming,FullStack,System Design,Redux,RTK,ML"
      />

      <HeroBanner />



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
              <CompassIcon className="h-10 w-10 " />
              <h3 className="text-lg font-semibold text-foreground">
                Comprehensive Curriculum
              </h3>
              <p className="text-center text-muted-foreground">
                Explore a wide range of courses across various disciplines to
                expand your knowledge.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SettingsIcon className="h-10 w-10 " />
              <h3 className="text-lg font-semibold text-foreground">
                Personalized Learning
              </h3>
              <p className="text-center text-muted-foreground">
                Tailor your learning experience with personalized
                recommendations and progress tracking.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SparkleIcon className="h-10 w-10 " />
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

      {/* Courses Offered */}
      <section id="courses" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 "

            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }} 
          >
            Explore Our Courses
          </motion.h2>

          <Tabs defaultValue="technology" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
            <TabsContent value="technology">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
            
              >
                {[
                  { title: "Web Development Bootcamp", duration: "12 weeks", level: "Beginner to Intermediate" },
                  { title: "Data Science Fundamentals", duration: "8 weeks", level: "Intermediate" },
                  { title: "Mobile App Development", duration: "10 weeks", level: "Intermediate to Advanced" },
                ].map((course, index) => (
                  <motion.div key={index} variants={fadeIn}  transition={{ duration: 0.6 }} >
                    <Card className="h-full transition-transform hover:scale-105">
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.duration} | {course.level}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Hands-on projects</li>
                          <li>Industry-aligned curriculum</li>
                          <li>Expert instructor support</li>
                        </ul>
                        <Button className="mt-4 w-full">Learn More</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="science">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                {[
                  { title: "Introduction to Astrophysics", duration: "6 weeks", level: "Beginner" },
                  { title: "Molecular Biology Techniques", duration: "8 weeks", level: "Intermediate" },
                  { title: "Environmental Science and Sustainability", duration: "10 weeks", level: "All Levels" },
                ].map((course, index) => (
                  <motion.div key={index} variants={fadeIn}  transition={{ duration: 0.6 }} >
                    <Card className="h-full transition-transform hover:scale-105">
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.duration} | {course.level}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Virtual lab experiments</li>
                          <li>Cutting-edge research insights</li>
                          <li>Collaborative research projects</li>
                        </ul>
                        <Button className="mt-4 w-full">Learn More</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="business">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}

                variants={staggerChildren}
              >
                {[
                  { title: "Digital Marketing Mastery", duration: "8 weeks", level: "Beginner to Intermediate" },
                  { title: "Financial Management for Startups", duration: "6 weeks", level: "Intermediate" },
                  { title: "Leadership and Organizational Behavior", duration: "10 weeks", level: "All Levels" },
                ].map((course, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="h-full transition-transform hover:scale-105">
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.duration} | {course.level}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Real-world case studies</li>
                          <li>Industry expert guest lectures</li>
                          <li>Networking opportunities</li>
                        </ul>
                        <Button className="mt-4 w-full">Learn More</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
          <div className="text-center mt-12">
            <Button variant="outline">View Full Course Catalog</Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 "
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }} 
            variants={fadeIn}
          >
            Why Choose StudySync
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              { icon: BookOpen, title: 'Expert Instructors', description: 'Learn from industry professionals and renowned academics with years of experience in their fields.' },
              { icon: Users, title: 'Global Community', description: 'Connect with learners from around the world, fostering cultural exchange and diverse perspectives.' },
              { icon: Calendar, title: 'Flexible Learning', description: 'Study at your own pace with 24/7 access to course materials, fitting education into your busy lifestyle.' },
              { icon: Award, title: 'Recognized Certifications', description: 'Earn certificates valued by top employers, enhancing your resume and career prospects.' },
              { icon: Zap, title: 'Interactive  Content', description: 'Engage with dynamic, multimedia-rich lessons that make learning enjoyable and effective.' },
              { icon: Globe, title: 'Multilingual Support', description: 'Access courses and support in multiple languages, breaking down barriers to education.' },
              { icon: CheckCircle, title: 'Personalized Learning Paths', description: 'Receive custom course recommendations based on your goals and progress.' },
              { icon: Star, title: 'Industry-Aligned Projects', description: 'Apply your knowledge to real-world scenarios with projects designed by industry leaders.' },
            ].map((feature, index) => (
              <motion.div key={index} className="text-center" variants={fadeIn}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-muted p-6 rounded-lg h-full flex flex-col items-center justify-center"
                >
                  <feature.icon className="w-12 h-12 mb-4 text-secondary" />
                  <h3 className="text-xl font-semibold mb-2 ">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 ">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-8 text-center "
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }} 
          >
            Student Success Stories
          </motion.h2>
          <motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerChildren}
>
  {[
    {
      name: "Alex Johnson",
      role: "Software Developer at Tech Innovators",
      quote:
        "StudySync's Web Development Bootcamp was a game-changer. The hands-on projects and mentor support helped me land my dream job at a leading tech company.",
    },
    {
      name: "Maria Garcia",
      role: "Data Scientist at Global Analytics",
      quote:
        "The Data Science Fundamentals course provided me with the skills and confidence to transition into a rewarding career in data science. The real-world projects were invaluable.",
    },
    {
      name: "Chris Lee",
      role: "Founder of EcoTech Solutions",
      quote:
        "StudySync's business courses, especially Financial Management for Startups, gave me the knowledge and tools to successfully launch and grow my own sustainable technology company.",
    },
    {
      name: "Priya Patel",
      role: "Environmental Consultant",
      quote:
        "The Environmental Science and Sustainability course opened my eyes to global challenges and equipped me with practical solutions. I now consult for organizations worldwide.",
    },
    {
      name: "James Wilson",
      role: "Digital Marketing Manager",
      quote:
        "Thanks to the Digital Marketing Mastery course, I've been able to significantly increase our company's online presence and customer engagement. The ROI has been phenomenal.",
    },
    {
      name: "Sophie Chen",
      role: "Astrophysicist at Space Exploration Institute",
      quote:
        "The Introduction to Astrophysics course ignited my passion for space science. Now, I'm part of a team exploring the mysteries of the universe.",
    },
  ].map((testimonial, index) => (
    <motion.div key={index} variants={fadeIn}>
      <Card className="h-full transition-transform hover:scale-105">
        <CardContent className="p-6 flex flex-col h-full">
          <p className="mb-4 italic text-muted-foreground flex-grow">
          &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div>
            <p className="font-semibold ">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</motion.div>

        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 "
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            How It Works
          </motion.h2>
          <motion.div
  className=" gird md:flex flex-row  md:justify-center items-center gap-4"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerChildren}
>
  {[
    { step: 'Sign Up', description: 'Create your account and set your learning goals' },
    { step: 'Choose a Course', description: 'Browse our catalog and find the perfect course for you' },
    { step: 'Start Learning', description: 'Access course materials and begin your educational journey' },
    { step: 'Complete Assignments', description: 'Apply your knowledge through projects and quizzes' },
    { step: 'Earn a Certificate', description: 'Showcase your new skills with a recognized certification' },
  ].map((item, index) => (
    <motion.div
      key={index}
      className="flex items-center  flex-col md:flex-row text-center md:text-left"
      variants={fadeIn}
      transition={{ duration: 0.6 }} 
    >
      <motion.div
        className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 mb-4 md:mb-0 flex-shrink-0"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {index + 1}
      </motion.div>
      <div>
        <p className="text-md font-semibold ">{item.step}</p>
        <p className="text-xs xl:text-sm text-muted-foreground">{item.description}</p>
      </div>
      {index < 5 && <BarChart className="w-8 h-8 mx-4 text-secondary hidden md:block" />}
    </motion.div>
  ))}
</motion.div>

        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 ">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 "
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }} 
          >
            Flexible Pricing Plans
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              { name: 'Basic', price: '$9.99/month', features: ['Access to 100+ courses', 'Community forums', 'Monthly webinars', 'Basic certifications', '24/7 email support'] },
              { name: 'Pro', price: '$19.99/month', features: ['Access to all courses', 'Priority support', 'Exclusive workshops', 'Advanced certifications', 'Career services', '1-on-1 mentoring sessions', 'Ad-free experience'] },
              { name: 'Enterprise', price: 'Custom', features: ['Custom learning paths', 'Dedicated account manager', 'API access', 'Analytics dashboard', 'Bulk enrollment', 'Custom course creation', 'White-labeling options'] },
            ].map((plan, index) => (
              <motion.div key={index} variants={fadeIn}  transition={{ duration: 0.6 }} >
                <Card className={`h-full transition-transform hover:scale-105 ${index === 1 ? 'border-primary' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold ">{plan.name}</CardTitle>
                    <CardDescription className="text-3xl font-semibold text-secondary">{plan.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                      {index === 2 ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

  
    </div>

  );
};

export default Page;
