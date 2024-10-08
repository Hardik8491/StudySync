/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NFKgT4AiIKy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      {/* <section className="relative w-full h-[80vh] bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container h-full flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
          <div className="relative w-full max-w-4xl">
            <div className="absolute top-0 left-0 w-full h-full -z-10 animate-float">
              <img
                src="/placeholder.svg"
                width={800}
                height={600}
                alt="Hero Image 1"
                className="w-full h-full object-contain"
                style={{ aspectRatio: "800/600", objectFit: "cover" }}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10 animate-float delay-200">
              <img
                src="/placeholder.svg"
                width={800}
                height={600}
                alt="Hero Image 2"
                className="w-full h-full object-contain"
                style={{ aspectRatio: "800/600", objectFit: "cover" }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Unlock Your Potential with Our Courses</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Discover a world of knowledge and transform your life with our comprehensive educational platform.
          </p>
          <Link
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Explore Courses
          </Link>
        </div>
      </section> */}
      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg overflow-hidden shadow-md animate-slide-up">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Course 1"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Introduction to Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  Learn the fundamentals of web development and build your first website.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  View Course
                </Link>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-md animate-slide-up delay-100">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Course 2"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Data Science Fundamentals</h3>
                <p className="text-muted-foreground mb-4">
                  Dive into the world of data science and learn how to analyze and interpret data.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  View Course
                </Link>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-md animate-slide-up delay-200">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Course 3"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Mastering Digital Marketing</h3>
                <p className="text-muted-foreground mb-4">
                  Explore the latest digital marketing strategies and techniques to grow your business.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  View Course
                </Link>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-md animate-slide-up delay-300">
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Course 4"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Artificial Intelligence Fundamentals</h3>
                <p className="text-muted-foreground mb-4">
                  Discover the world of AI and learn how to build intelligent systems.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  View Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Course Categories</h2>
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
            <Button variant="secondary">Show More</Button>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Students Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-md animate-slide-up">
              <blockquote>
                <p className="text-muted-foreground mb-4">
                  "The courses on this platform have been a game-changer for me. The content is\n engaging, the
                  instructors are knowledgeable, and I've learned so much."
                </p>
                <cite className="text-sm font-medium">- John Doe, Software Engineer</cite>
              </blockquote>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md animate-slide-up delay-100">
              <blockquote>
                <p className="text-muted-foreground mb-4">
                  "I've been able to advance my career and gain new skills thanks to the\n wide range of courses
                  offered. Highly recommended!"
                </p>
                <cite className="text-sm font-medium">- Jane Smith, Marketing Manager</cite>
              </blockquote>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md animate-slide-up delay-200">
              <blockquote>
                <p className="text-muted-foreground mb-4">
                  "The platform's user-friendly interface and interactive learning\n materials have made my educational
                  journey truly enjoyable."
                </p>
                <cite className="text-sm font-medium">- Michael Johnson, Graphic Designer</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function LayersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dnAcPZUdIkD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MonitorCheckIcon className="h-6 w-6" />
          <span className="sr-only">StudySync Education</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Empowering Educators, Inspiring Students
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    StudySync is a comprehensive educational platform that combines cutting-edge technology with
                    research-based pedagogy to transform the way students learn and teachers teach.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  StudySync was founded in 2010 with the mission to revolutionize the way students learn and teachers
                  teach. Driven by a passion for education and a deep understanding of the challenges facing today's
                  classrooms, our team of educators and technologists has developed a comprehensive platform that
                  empowers teachers and inspires students.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At the heart of StudySync are four core values that guide our work and shape our approach to
                  education:
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                <div className="grid gap-1">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <CombineIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of collaboration, both among students and between teachers and students.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                    <InfoIcon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We are constantly exploring new ways to leverage technology and research-based pedagogy to improve
                    learning outcomes.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="bg-accent rounded-md p-3 flex items-center justify-center">
                    <ActivityIcon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Engagement</h3>
                  <p className="text-muted-foreground">
                    We design our platform to foster active engagement and deep learning, keeping students motivated and
                    invested in their education.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="bg-success rounded-md p-3 flex items-center justify-center">
                    <EqualIcon className="w-6 h-6 text-success-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Equity</h3>
                  <p className="text-muted-foreground">
                    We are committed to ensuring that all students have access to high-quality educational resources and
                    opportunities, regardless of their background or circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  StudySync's comprehensive educational platform offers a range of features designed to support teachers
                  and engage students.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                <div className="grid gap-1">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <LecternIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Lesson Plans</h3>
                  <p className="text-muted-foreground">
                    Comprehensive, standards-aligned lesson plans that make lesson planning a breeze.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                    <InfoIcon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Interactive Content</h3>
                  <p className="text-muted-foreground">
                    Engaging, multimedia-rich content that keeps students actively involved in their learning.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="bg-accent rounded-md p-3 flex items-center justify-center">
                    <PenToolIcon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Assessment Tools</h3>
                  <p className="text-muted-foreground">
                    Robust assessment tools that provide real-time feedback and data-driven insights to support student
                    growth.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="bg-success rounded-md p-3 flex items-center justify-center">
                    <CombineIcon className="w-6 h-6 text-success-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Collaboration Features</h3>
                  <p className="text-muted-foreground">
                    Powerful collaboration tools that facilitate student-to-student and teacher-to-student interactions.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="bg-warning rounded-md p-3 flex items-center justify-center">
                    <BadgeIcon className="w-6 h-6 text-warning-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Professional Development</h3>
                  <p className="text-muted-foreground">
                    Comprehensive professional development resources to help teachers maximize the impact of the
                    StudySync platform.
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="bg-error rounded-md p-3 flex items-center justify-center">
                    <SchoolIcon className="w-6 h-6 text-error-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Personalized Learning</h3>
                  <p className="text-muted-foreground">
                    Adaptive learning algorithms that personalize the educational experience for each student.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 StudySync Education. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function CombineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function EqualIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LecternIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" />
      <path d="M18 6V3a1 1 0 0 0-1-1h-3" />
      <rect width="8" height="12" x="8" y="10" rx="1" />
    </svg>
  )
}


function MonitorCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 10 2 2 4-4" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  )
}


function PenToolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}


function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}