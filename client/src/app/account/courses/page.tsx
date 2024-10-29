"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { BookOpen, ChevronDown, ChevronUp, Search } from "lucide-react"

// This would typically come from an API or database
const enrolledCourses = [
  { id: 1, title: "Introduction to React", description: "Learn the basics of React", progress: 60, totalLessons: 10, category: "Web Development" },
  { id: 2, title: "Advanced JavaScript", description: "Deep dive into JavaScript concepts", progress: 30, totalLessons: 15, category: "Programming" },
  { id: 3, title: "CSS Mastery", description: "Master CSS and responsive design", progress: 80, totalLessons: 8, category: "Web Development" },
  { id: 4, title: "Node.js Fundamentals", description: "Build server-side applications with Node.js", progress: 10, totalLessons: 12, category: "Backend" },
]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("title")
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  useState(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const filteredAndSortedCourses = enrolledCourses
    .filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "progress") return b.progress - a.progress
      return a.title.localeCompare(b.title)
    })

  const CourseCard = ({ course }: { course: typeof enrolledCourses[0] }) => (
    <Card className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {course.title}
          <Badge variant="secondary">{course.category}</Badge>
        </CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <BookOpen className="w-4 h-4" />
          <span>{course.totalLessons} lessons</span>
        </div>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary-foreground">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary">
                {course.progress}%
              </span>
            </div>
          </div>
          <Progress value={course.progress} className="w-full" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setExpandedCard(expandedCard === course.id ? null : course.id)}>
          {expandedCard === course.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {expandedCard === course.id ? "Less Info" : "More Info"}
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Continue Course</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{course.title}</DialogTitle>
              <DialogDescription>
                You're {course.progress}% through this course. Keep up the great work!
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <h4 className="text-sm font-medium mb-2">Course Overview</h4>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </div>
            <Button className="w-full">Resume Course</Button>
          </DialogContent>
        </Dialog>
      </CardFooter>
      {expandedCard === course.id && (
        <div className="px-6 pb-4 animate-fadeIn">
          <h4 className="text-sm font-medium mb-2">Course Details</h4>
          <p className="text-sm text-muted-foreground">This is where you could add more detailed information about the course, such as a syllabus, instructor details, or any prerequisites.</p>
        </div>
      )}
    </Card>
  )

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Sort by Title</SelectItem>
            <SelectItem value="progress">Sort by Progress</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array(6).fill(0).map((_, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-1/4 mb-4" />
                  <Skeleton className="h-2 w-full mb-2" />
                  <Skeleton className="h-2 w-full" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))
          : filteredAndSortedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
      </div>
    </div>
  )
}