'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Clock, DollarSign, ChevronRight, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { useGetAllCourseQuery } from '@/redux-toolkit/features/courses/courseApi'
import Link from 'next/link'
import LoadingPage from '../loading'

// Interfaces
interface Instructor {
  name: string;
  avatar: string;
}

interface Course {
  _id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  thumbnail: { url: string };
  category: string;
  instructor: Instructor;
}

const categories = ["All", "Web Development", "Data Science", "Cloud Computing", "Design"]


// Component
export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [courses, setCourses] = useState<Course[]>([]);  // State for courses
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);  // State for filtered courses

  const { data, error, isLoading } = useGetAllCourseQuery();

  if(isLoading) 
    return <div><LoadingPage/></div>

  if(error) 
  return <div>Error: {error.message}</div>



  useEffect(() => {
    if (data) {
      setCourses(data?.course as Course[]); // Set courses state with fetched data
    }
  }, [data]);

 

  useEffect(() => {
    const coursesToDisplay = courses.filter(course =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(coursesToDisplay);
  }, [courses, selectedCategory, searchTerm]);

  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mx-4 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Explore Our Courses</h1>
          <p className="text-xl text-muted-foreground">Discover a world of knowledge and boost your skills</p>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="search" className="text-lg font-semibold text-foreground mb-2 block">Search Courses</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search courses..."
                    className="pl-10 text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">Course Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {categories?.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="transition-colors duration-200"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredCourses.map(course => (
            <Card key={course?._id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0 relative">
                <img src={course?.thumbnail?.url} alt={course?.name} className="w-full h-48 object-cover" />
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                  {course?.category}
                </Badge>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{course?.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course?.description}</p>
                <div className="flex items-center justify-between text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{course?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-lg font-bold">${course?.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 bg-muted">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={course?.instructor?.avatar} alt={course?.instructor?.name} />
                      <AvatarFallback>{course?.instructor?.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-foreground">{course?.instructor?.name}</span>
                  </div>
                  <Link href={`/courses/${course._id}`}>
                    <Button size="sm">Enroll Now</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Card className="bg-primary text-primary-foreground overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Unlock Your Potential with Our Learning Platform</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-primary-foreground rounded-full mr-3 flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg">Free E-books, videos & consultations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-primary-foreground rounded-full mr-3 flex items-center justify-center">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg">World-class instructors</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-primary-foreground rounded-full mr-3 flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg">Cutting-edge course content</span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg" className="text-lg px-6 py-3">
                  Start Learning Now
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-72 h-72">
                  <Image
                    src="/placeholder.svg?height=288&width=288"
                    alt="Learning illustration"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                  <div className="absolute -top-4 -left-4">
                    <Avatar className="w-20 h-20 border-4 border-primary-foreground">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Student 1" />
                      <AvatarFallback>S1</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute -bottom-4 -right-4">
                    <Avatar className="w-20 h-20 border-4 border-primary-foreground">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Student 2" />
                      <AvatarFallback>S2</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-foreground">Recommended for You</h2>
            <Button variant="link" className="text-lg">See all courses</Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course) => (
              <Card key={course?.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0 relative">
                  <img src={course?.image} alt={course?.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                    {course?.category}
                  </Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{course?.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span className="text-sm font-medium">{course?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-primary">
                      <DollarSign className="h-5 w-5" />
                      <span className="text-xl font-bold">${course?.price}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Avatar>
                      <AvatarImage src={course?.instructor?.avatar} alt={course?.instructor?.name} />
                      <AvatarFallback>{course?.instructor?.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-foreground">{course?.instructor?.name}</span>
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
