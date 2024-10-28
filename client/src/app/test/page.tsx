// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Search, BookOpen, Clock, DollarSign, ChevronRight, Star } from 'lucide-react'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import Image from 'next/image'

// const courses = [
//   {
//     id: 1,
//     title: "AWS Certified Solutions Architect",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SCDlihzbHBKXshpUOPwRSwlgIarD7m.png",
//     duration: "3 Month",
//     description: "Master AWS architecture and pass the certification exam",
//     instructor: {
//       name: "Lina Chen",
//       avatar: "/placeholder.svg?height=32&width=32"
//     },
//     category: "Cloud Computing",
//     price: 80
//   },
//   {
//     id: 2,
//     title: "Full-Stack Web Development",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SCDlihzbHBKXshpUOPwRSwlgIarD7m.png",
//     duration: "4 Month",
//     description: "Learn to build modern web applications from front to back",
//     instructor: {
//       name: "Alex Johnson",
//       avatar: "/placeholder.svg?height=32&width=32"
//     },
//     category: "Web Development",
//     price: 95
//   },
//   {
//     id: 3,
//     title: "Machine Learning Fundamentals",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SCDlihzbHBKXshpUOPwRSwlgIarD7m.png",
//     duration: "3 Month",
//     description: "Dive into the world of AI and machine learning algorithms",
//     instructor: {
//       name: "Sarah Lee",
//       avatar: "/placeholder.svg?height=32&width=32"
//     },
//     category: "Data Science",
//     price: 85
//   },
//   {
//     id: 4,
//     title: "UX/UI Design Masterclass",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SCDlihzbHBKXshpUOPwRSwlgIarD7m.png",
//     duration: "2 Month",
//     description: "Create stunning user interfaces and enhance user experiences",
//     instructor: {
//       name: "Emma Davis",
//       avatar: "/placeholder.svg?height=32&width=32"
//     },
//     category: "Design",
//     price: 70
//   }
// ]

// const categories = ["All", "Web Development", "Data Science", "Cloud Computing", "Design"]

// export default function Component() {
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [searchTerm, setSearchTerm] = useState("")

//   const filteredCourses = courses.filter(course =>
//     (selectedCategory === "All" || course.category === selectedCategory) &&
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   return (
//     <div className="min-h-screen bg-background p-8">
//       <div className="max-w-7xl mx-auto space-y-12">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-foreground mb-4">Explore Our Courses</h1>
//           <p className="text-xl text-muted-foreground">Discover a world of knowledge and boost your skills</p>
//         </div>

//         <Card>
//           <CardContent className="p-6">
//             <div className="grid gap-6 md:grid-cols-2">
//               <div>
//                 <label htmlFor="search" className="text-lg font-semibold text-foreground mb-2 block">Search Courses</label>
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                   <Input
//                     id="search"
//                     placeholder="Search courses..."
//                     className="pl-10 text-lg"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h2 className="text-lg font-semibold text-foreground mb-2">Course Categories</h2>
//                 <div className="flex flex-wrap gap-2">
//                   {categories.map(category => (
//                     <Button
//                       key={category}
//                       variant={selectedCategory === category ? "default" : "outline"}
//                       size="lg"
//                       onClick={() => setSelectedCategory(category)}
//                       className="transition-colors duration-200"
//                     >
//                       {category}
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {filteredCourses.map(course => (
//             <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
//               <CardHeader className="p-0 relative">
//                 <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
//                 <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
//                   {course.category}
//                 </Badge>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-2 text-foreground">{course.title}</h3>
//                 <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
//                 <div className="flex items-center justify-between text-muted-foreground mb-4">
//                   <div className="flex items-center space-x-2">
//                     <Clock className="h-5 w-5" />
//                     <span className="text-sm font-medium">{course.duration}</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-primary">
//                     <DollarSign className="h-5 w-5" />
//                     <span className="text-xl font-bold">${course.price}</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 mb-4">
//                   <Avatar>
//                     <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
//                     <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
//                   </Avatar>
//                   <span className="text-sm font-medium text-foreground">{course.instructor.name}</span>
//                 </div>
//                 <Button className="w-full">Enroll Now</Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <Card className="bg-primary text-primary-foreground overflow-hidden">
//           <CardContent className="p-8">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/2 mb-6 md:mb-0">
//                 <h2 className="text-3xl font-bold mb-4">Unlock Your Potential with Our Learning Platform</h2>
//                 <ul className="space-y-4 mb-6">
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 bg-primary-foreground rounded-full mr-3 flex items-center justify-center">
//                       <BookOpen className="h-4 w-4 text-primary" />
//                     </div>
//                     <span className="text-lg">Free E-books, videos & consultations</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 bg-primary-foreground rounded-full mr-3 flex items-center justify-center">
//                       <Star className="h-4 w-4 text-primary" />
//                     </div>
//                     <span className="text-lg">World-class instructors</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 bg-primary-foreground rounded-full mr-3 flex items-center justify-center">
//                       <ChevronRight className="h-4 w-4 text-primary" />
//                     </div>
//                     <span className="text-lg">Cutting-edge course content</span>
//                   </li>
//                 </ul>
//                 <Button variant="secondary" size="lg" className="text-lg px-6 py-3">
//                   Start Learning Now
//                 </Button>
//               </div>
//               <div className="md:w-1/2 flex justify-center">
//                 <div className="relative w-72 h-72">
//                   <Image
//                     src="/placeholder.svg?height=288&width=288"
//                     alt="Learning illustration"
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-full"
//                   />
//                   <div className="absolute -top-4 -left-4">
//                     <Avatar className="w-20 h-20 border-4 border-primary-foreground">
//                       <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Student 1" />
//                       <AvatarFallback>S1</AvatarFallback>
//                     </Avatar>
//                   </div>
//                   <div className="absolute -bottom-4 -right-4">
//                     <Avatar className="w-20 h-20 border-4 border-primary-foreground">
//                       <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Student 2" />
//                       <AvatarFallback>S2</AvatarFallback>
//                     </Avatar>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <div>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-3xl font-bold text-foreground">Recommended for You</h2>
//             <Button variant="link" className="text-lg">See all courses</Button>
//           </div>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {courses.map((course) => (
//               <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader className="p-0 relative">
//                   <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
//                   <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
//                     {course.category}
//                   </Badge>
//                 </CardHeader>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-2 text-foreground">{course.title}</h3>
//                   <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
//                   <div className="flex items-center justify-between text-muted-foreground mb-4">
//                     <div className="flex items-center space-x-2">
//                       <Clock className="h-5 w-5" />
//                       <span className="text-sm font-medium">{course.duration}</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-primary">
//                       <DollarSign className="h-5 w-5" />
//                       <span className="text-xl font-bold">${course.price}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-2 mb-4">
//                     <Avatar>
//                       <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
//                       <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
//                     </Avatar>
//                     <span className="text-sm font-medium text-foreground">{course.instructor.name}</span>
//                   </div>
//                   <Button className="w-full">Enroll Now</Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define types for CourseInfo state
interface CourseInfo {
  thumbnail: string;
  preview: any;
}

const CourseThumbnailUpload: React.FC = () => {
  const [courseInfo, setCourseInfo] = useState<CourseInfo>({
    thumbnail: "",
    preview: "",
  });
  const [isUploading, setIsUploading] = useState<boolean>(false);

  console.log("courseInfo", courseInfo.thumbnail);

  // Handle file input change for preview and upload
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Preview image
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        if (fileReader.readyState === 2 && typeof fileReader.result === "string") {
          setCourseInfo((prev) => ({
            ...prev,
            preview: fileReader.result,
          }));

          courseInfo.thumbnail = fileReader.result;
       
        
        }
      };
      fileReader.readAsDataURL(file); // Reads file as Base64
    }
  };

  return (
    <div className="space-y-4">
      <Label htmlFor="thumbnail" className="text-sm font-medium">
        Course Thumbnail
      </Label>
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          {courseInfo.preview ? (
            <Image
              src={courseInfo.preview}
              alt="Course thumbnail preview"
              width={300}
              height={200}
              className="w-full h-[200px] object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-[200px] bg-muted flex items-center justify-center rounded-md">
              <Upload className="w-12 h-12 text-muted-foreground" />
            </div>
          )}
        </CardContent>
      </Card>
      <div className="relative">
        <Upload className="absolute left-3 top-1/2 transform h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          id="thumbnail"
          name="thumbnail"
          type="file"
          onChange={handleInputChange}
          accept="image/*"
          className="w-full cursor-pointer pl-10"
          disabled={isUploading}
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Upload a thumbnail image for your course. Recommended size: 300x200 pixels.
      </p>
    </div>
  );
};

export default CourseThumbnailUpload;
