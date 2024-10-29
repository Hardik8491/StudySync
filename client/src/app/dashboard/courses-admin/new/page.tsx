
'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, PlayCircle, AlertCircle, Upload, DollarSign, Link, ChevronLeft, ChevronRight, BookOpen, Tag, Video, FileText, ListChecks, GraduationCap } from "lucide-react"
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import { CardTitle, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import toast from 'react-hot-toast'
import { useCreateCourseMutation } from '@/redux-toolkit/features/courses/courseApi'
import Image from 'next/image'
import { useSelector } from 'react-redux'
// Define types for CourseInfo state
interface CourseInfo {
  name:string;
  description: string;
  price: string;
  estimatePrice: string;
  tag: string;
  level: string;
  category: string;
  demoUrl: string;
  thumbnail: string;

}


export default function Component() {
  const [currentStep, setCurrentStep] = useState(0);
  const [courseInfo, setCourseInfo] = useState<CourseInfo>({
    name: 'web',
    description: 'dev',
    price: '50',
    estimatePrice: '100',
    tag: 'android',
    level: '',
    category: 'development',
    demoUrl: 'https://www.google.com',
    thumbnail: ''
  });
 console.log(courseInfo.thumbnail);
 
  const [pageError, setPageError] = useState(false);
  const {user}=useSelector((state:any)=>state.auth)
  console.log(user);
  
  const [benefits, setBenefits] = useState([{ title: '', category: '' }]);
  const [prerequisites, setPrerequisites] = useState([{ title: '', category: '' }]);
  const [courseContentData, setCourseContentData] = useState({
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    title: 'content',
    description: 'any',
    videoSection: 'Getting Started',
    category: 'no idiao',
    links: [{ title: 'no', url: 'no' }],
    suggestion: 'no',
  });
const instructor:any = {
    name: user?.name || 'John Doe',
    avatar:  user?.avatar?.url || '/avatar.jpg', }
  const steps = ['Course Information', 'Course Content', 'Benefits & Prerequisites', 'Preview'];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCourseInfo(prev => ({ ...prev, [name]: value }));
  };

  const ImageHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Preview image
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        if (fileReader.readyState === 2 && typeof fileReader.result === "string") {
          setCourseInfo((prev) => ({
            ...prev,
            thumbnail: fileReader.result as string,
          }));
         
        
       
        
        }
      };
      fileReader.readAsDataURL(file); // Reads file as Base64
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleAddField = (type: 'benefit' | 'prerequisite' | 'link') => {
    if (type === 'benefit') {
      setBenefits([...benefits, { title: '', category: '' }]);
    } else if (type === 'prerequisite') {
      setPrerequisites([...prerequisites, { title: '', category: '' }]);
    } else if (type === 'link') {
      setCourseContentData(prev => ({
        ...prev,
        links: [...prev.links, { title: '', url: '' }]
      }));
    }
  };

  const [createCourse, { isLoading, error }] = useCreateCourseMutation();

  const handleSaveCourse = async () => {
    try {
      const payload = {
        ...courseInfo,
        benefits,
        prerequisites,
        courseContentData,
        instructor
            };
      const response: any = await createCourse(payload).unwrap();
      if (response.success) {
        toast.success("Course created successfully");
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.data.message);
      setPageError(true);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
        case 0:
            return (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Course Name</Label>
                    <div className="relative">
                      <BookOpen className="absolute left-3 top-1/2 transform  -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        value={courseInfo.name}
                        onChange={handleInputChange}
                        placeholder="Enter course name"
                        className="pl-10 w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Course Category</Label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 transform h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        id="category"
                        name="category"
                        value={courseInfo.category}
                        onChange={handleInputChange}
                        placeholder="Enter course category"
                        className="pl-10 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Course Description</Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-4 w-4  text-gray-400" />
                    <Textarea
                      id="description"
                      name="description"
                      value={courseInfo.description}
                      onChange={handleInputChange}
                      placeholder="Enter course description"
                      className="pl-10 w-full min-h-[100px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 h-4 w-4 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="price"
                        name="price"
                        value={courseInfo.price}
                        onChange={handleInputChange}
                        placeholder="Enter course price"
                        type="number"
                        className="pl-10 w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="estimatePrice">Estimated Price (Optional)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 h-4 w-4 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="estimatePrice"
                        name="estimatePrice"
                        value={courseInfo.estimatePrice}
                        onChange={handleInputChange}
                        placeholder="Enter estimated price"
                        type="number"
                        className="pl-10 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="level">Course Level</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 h-4 w-4 transform -translate-y-1/2 text-gray-400" />
                      <select
                        id="level"
                        name="level"
                        value={courseInfo.level}
                        onChange={handleInputChange}
                        className="w-full border rounded-md px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select course level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tag">Course Tags</Label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 transform h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        id="tag"
                        name="tag"
                        value={courseInfo.tag}
                        onChange={handleInputChange}
                        placeholder="Add tags (e.g., programming, design)"
                        className="pl-10 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demoUrl">Demo URL</Label>
                  <div className="relative">
                    <Link className="absolute left-3 top-1/2 transform h-4 w-4  -translate-y-1/2 text-gray-400" />
                    <Input
                      id="demoUrl"
                      name="demoUrl"
                      value={courseInfo.demoUrl}
                      onChange={handleInputChange}
                      placeholder="Enter demo URL"
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="thumbnail" className="text-sm font-medium">Course Thumbnail</Label>
                  <Card className="overflow-hidden">
                    <CardContent className="p-4">
                      {courseInfo.thumbnail ? (
                        <Image
                          src={courseInfo.thumbnail}
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
                      onChange={ImageHandle}
                      accept="image/*"
                      className="w-full cursor-pointer pl-10"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Upload a thumbnail image for your course. Recommended size: 300x200 pixels.
                  </p>
                </div>
              </div>
            );
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Course Content</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="courseTitle">Course Title</Label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 h-4 w-4  transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="courseTitle"
                    name="courseTitle"
                    value={courseContentData.title}
                    onChange={(e) =>
                      setCourseContentData((prev) => ({ ...prev, title: e.target.value }))
                    }
                    placeholder="Enter course title"
                    className="pl-10 w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="courseCategory">Course Category</Label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 transform h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="courseCategory"
                    name="courseCategory"
                    value={courseContentData.category}
                    onChange={(e) =>
                      setCourseContentData((prev) => ({ ...prev, category: e.target.value }))
                    }
                    placeholder="Enter course category"
                    className="pl-10 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="videoSectionTitle">Video Section Title</Label>
                <div className="relative">
                  <Video className="absolute left-3 top-1/2 transform h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="videoSectionTitle"
                    name="videoSectionTitle"
                    value={courseContentData.videoSection}
                    onChange={(e) =>
                      setCourseContentData((prev) => ({ ...prev, videoSection: e.target.value }))
                    }
                    placeholder="Enter video section title"
                    className="pl-10 w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="videoUrl">Video URL</Label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 transform h-4 w-4  -translate-y-1/2 text-gray-400" />
                  <Input
                    id="videoUrl"
                    name="videoUrl"
                    value={courseContentData.videoUrl}
                    onChange={(e) =>
                      setCourseContentData((prev) => ({ ...prev, videoUrl: e.target.value }))
                    }
                    placeholder="Enter video URL"
                    className="pl-10 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="courseDescription">Course Description</Label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Textarea
                  id="courseDescription"
                  name="courseDescription"
                  value={courseContentData.description}
                  onChange={(e) =>
                    setCourseContentData((prev) => ({ ...prev, description: e.target.value }))
                  }
                  placeholder="Enter course description"
                  className="pl-10 w-full min-h-[100px]"
                />
              </div>
            </div>
            <div className="space-y-4">
              <Label>Additional Links</Label>
              {courseContentData.links.map((link, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 h-4 w-4 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      value={link.title}
                      onChange={(e) => {
                        const newLinks = [...courseContentData.links];
                        newLinks[index].title = e.target.value;
                        setCourseContentData(prev => ({ ...prev, links: newLinks }));
                      }}
                      placeholder="Link title"
                      className="pl-10 w-full"
                    />
                  </div>
                  <div className="relative">
                    <Link className="absolute left-3 h-4 w-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      value={link.url}
                      onChange={(e) => {
                        const newLinks = [...courseContentData.links];
                        newLinks[index].url = e.target.value;
                        setCourseContentData(prev => ({ ...prev, links: newLinks }));
                      }}
                      placeholder="Link URL"
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
              ))}
              <Button onClick={() => handleAddField('link')} variant="outline" className="w-full">
                Add Link
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Course Benefits</h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`benefit-${index}`}>Benefit {index + 1}</Label>
                  <div className="relative">
                    <CheckCircle2 className="absolute left-3 top-1/2  h-4 w-4 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id={`benefit-${index}`}
                      value={benefit.title}
                      onChange={(e) => {
                        const updatedBenefits = [...benefits];
                        updatedBenefits[index].title = e.target.value;
                        setBenefits(updatedBenefits);
                      }}
                      placeholder="Enter benefit"
                      className="pl-10 w-full"
                    />
                  </div>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 h-4 w-4 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id={`benefit-category-${index}`}
                      value={benefit.category}
                      onChange={(e) => {
                        const updatedBenefits = [...benefits];
                        updatedBenefits[index].category = e.target.value;
                        setBenefits(updatedBenefits);
                      }}
                      placeholder="Enter benefit category"
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
              ))}
              <Button onClick={() => handleAddField('benefit')} variant="outline" className="w-full">
                Add Benefit
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Course Prerequisites</h3>
              {prerequisites.map((prerequisite, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`prerequisite-${index}`}>Prerequisite {index + 1}</Label>
                  <div className="relative">
                    <ListChecks className="absolute left-3 top-1/2 h-4 w-4 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id={`prerequisite-${index}`}
                      value={prerequisite.title}
                      onChange={(e) => {
                        const updatedPrerequisites = [...prerequisites];
                        updatedPrerequisites[index].title = e.target.value;
                        setPrerequisites(updatedPrerequisites);
                      }}
                      placeholder="Enter prerequisite"
                      className="pl-10 w-full"
                    />
                  </div>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id={`prerequisite-category-${index}`}
                      value={prerequisite.category}
                      onChange={(e) => {
                        const updatedPrerequisites = [...prerequisites];
                        updatedPrerequisites[index].category = e.target.value;
                        setPrerequisites(updatedPrerequisites);
                      }}
                      placeholder="Enter prerequisite category"
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
              ))}
              <Button onClick={() => handleAddField('prerequisite')} variant="outline" className="w-full">
                Add Prerequisite
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="relative">
                <img
                  src={courseInfo.thumbnail || "/placeholder.svg"}
                  alt={courseInfo.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative z-10 bg-black bg-opacity-60 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="mb-2">
                      {courseInfo.category}
                    </Badge>
                    <Badge variant="outline" className="border-white text-white">
                      {courseInfo.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold">{courseInfo.name}</CardTitle>
                  <CardDescription className="mt-2 text-gray-200">
                    {courseInfo.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 p-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Course Benefits</h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{benefit.title} ({benefit.category})</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                  <ul className="space-y-2">
                    {prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                        <span>{prerequisite.title} ({prerequisite.category})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <Separator />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Course Content Preview</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold">{courseContentData.videoSection}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{courseContentData.title}</p>
                  <p className="mt-2">{courseContentData.description}</p>
                  <p className="mt-2 text-sm text-muted-foreground">Category: {courseContentData.category}</p>
                  <div className="mt-4 flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Watch intro video</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6">
                <div>
                  <p className="text-2xl font-bold">${courseInfo.price}</p>
                  {courseInfo.estimatePrice && (
                    <p className="text-sm text-muted-foreground line-through">
                      ${courseInfo.estimatePrice}
                    </p>
                  )}
                </div>
                <Button>
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
            {pageError && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded" role="alert">
                <p className="font-bold">Error</p>
                <p>There was an error loading the course preview. Please try again later.</p>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex-1 bg-gradient-to-br from-primary/10 to-secondary/10 min-h-screen'>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h2 className="text-3xl font-bold text-center text-primary">Create Your Course</h2>
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Step {currentStep + 1}: {steps[currentStep]}</CardTitle>
          </CardHeader>
          <CardContent className='p-6'>
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className={`flex-1 z-10 text-center ${index <= currentStep ? 'text-primary' : 'text-muted-foreground'}`}
                  >
                    <div className="relative">
                      <div className={`w-8 h-8 mx-auto rounded-full relative z-10 ${index <= currentStep ? 'bg-primary' : 'bg-muted'} flex items-center justify-center text-white text-sm font-medium`}>
                        {index + 1}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`absolute z-0 top-4 left-1/2 w-full h-0.5 ${index < currentStep ? 'bg-primary' : 'bg-muted'}`}></div>
                      )}
                    </div>
                    <div className="mt-2 text-xs sm:text-sm font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </div>
            {renderStepContent()}
          </CardContent>
          <CardFooter className="flex justify-between p-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="w-32"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button
              onClick={currentStep === steps.length - 1 ? handleSaveCourse : handleNext}
              className="w-32"
            >
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'} <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}