//@ts-nocheck
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, Upload } from "lucide-react";
import { Button } from "@/components/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/new-york/ui/card";
import { Input } from "@/components/new-york/ui/input";
import { Label } from "@/components/new-york/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/new-york/ui/select";
import { Textarea } from "@/components/new-york/ui/textarea";
import { useCreateCourseMutation } from "@/redux-toolkit/features/courses/courseApi";
import toast from "react-hot-toast";

const NewCourse = () => {
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    estimatePrice: "",
    tag: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const [courseContentData, setCourseContentData] = useState({
    videoUrl: "",
    title: "",
    description: "",
    videoSection: "Untitled Section",
    links: [{ title: "", url: "" }],
    suggestion: "",
  });

  // Integrate with Redux API mutation
  const [createCourse, { isLoading, error }] = useCreateCourseMutation();

  const handleSaveCourse = async () => {
    try {
      const payload = {
        ...courseInfo,
        benefits,
        prerequisites,
        courseContentData,
      };
      const response = await createCourse(payload).unwrap();
      if (response.success) {
        toast.success("success");
      }
      // Handle success (e.g., navigate to course list, show a success message, etc.)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  const handleBenefitChange = (index, value) => {
    const newBenefits = [...benefits];
    newBenefits[index].title = value;
    setBenefits(newBenefits);
  };

  const handlePrerequisiteChange = (index, value) => {
    const newPrerequisites = [...prerequisites];
    newPrerequisites[index].title = value;
    setPrerequisites(newPrerequisites);
  };

  const handleLinkChange = (index, field, value) => {
    const newLinks = [...courseContentData.links];
    newLinks[index][field] = value;
    setCourseContentData({ ...courseContentData, links: newLinks });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="flex flex-1">
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto grid  flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Pro Controller
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button
                  size="sm"
                  onClick={handleSaveCourse}
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save Course"}
                </Button>
              </div>
            </div>
            <div className="grid gap-4   md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid grid-cols-1 auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                {/* Course Details */}
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Course Details</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          value={courseInfo.name}
                          onChange={(e) =>
                            setCourseInfo({
                              ...courseInfo,
                              name: e.target.value,
                            })
                          }
                          className="w-full"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={courseInfo.description}
                          onChange={(e) =>
                            setCourseInfo({
                              ...courseInfo,
                              description: e.target.value,
                            })
                          }
                          className="min-h-32"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Course Category */}
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Course Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          onValueChange={(value) =>
                            setCourseInfo({ ...courseInfo, category: value })
                          }
                        >
                          <SelectTrigger
                            id="category"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="electronics">
                              Electronics
                            </SelectItem>
                            <SelectItem value="accessories">
                              Accessories
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">
                          Subcategory (optional)
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            setCourseInfo({ ...courseInfo, subcategory: value })
                          }
                        >
                          <SelectTrigger
                            id="subcategory"
                            aria-label="Select subcategory"
                          >
                            <SelectValue placeholder="Select subcategory" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="t-shirts">T-Shirts</SelectItem>
                            <SelectItem value="hoodies">Hoodies</SelectItem>
                            <SelectItem value="sweatshirts">
                              Sweatshirts
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Course Price */}
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Course Price</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          value={courseInfo.price}
                          onChange={(e) =>
                            setCourseInfo({
                              ...courseInfo,
                              price: e.target.value,
                            })
                          }
                          defaultValue="0"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="price">EstimatePrice</Label>
                        <Input
                          id="estimatePrice"
                          type="number"
                          value={courseInfo.estimatePrice}
                          onChange={(e) =>
                            setCourseInfo({
                              ...courseInfo,
                              estimatePrice: e.target.value,
                            })
                          }
                          defaultValue="0"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardHeader>
                    <CardTitle>Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {benefits.map((benefit, index) => (
                      <div className="grid gap-3" key={index}>
                        <Label htmlFor={`benefit-${index}`}>
                          Benefit {index + 1}
                        </Label>
                        <Input
                          id={`benefit-${index}`}
                          type="text"
                          value={benefit.title}
                          onChange={(e) =>
                            handleBenefitChange(index, e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setBenefits([...benefits, { title: "" }])}
                    >
                      Add Benefit
                    </Button>
                  </CardContent>
                </Card>

                {/* Prerequisites */}
                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {prerequisites.map((prerequisite, index) => (
                      <div className="grid gap-3" key={index}>
                        <Label htmlFor={`prerequisite-${index}`}>
                          Prerequisite {index + 1}
                        </Label>
                        <Input
                          id={`prerequisite-${index}`}
                          type="text"
                          value={prerequisite.title}
                          onChange={(e) =>
                            handlePrerequisiteChange(index, e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setPrerequisites([...prerequisites, { title: "" }])
                      }
                    >
                      Add Prerequisite
                    </Button>
                  </CardContent>
                </Card>

                {/* Course Content */}
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="videoUrl">Video URL</Label>
                      <Input
                        id="videoUrl"
                        type="text"
                        value={courseContentData.videoUrl}
                        onChange={(e) =>
                          setCourseContentData({
                            ...courseContentData,
                            videoUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    {courseContentData.links.map((link, index) => (
                      <div className="grid gap-3" key={index}>
                        <Label htmlFor={`link-title-${index}`}>
                          Link Title {index + 1}
                        </Label>
                        <Input
                          id={`link-title-${index}`}
                          type="text"
                          value={link.title}
                          onChange={(e) =>
                            handleLinkChange(index, "title", e.target.value)
                          }
                        />
                        <Label htmlFor={`link-url-${index}`}>
                          Link URL {index + 1}
                        </Label>
                        <Input
                          id={`link-url-${index}`}
                          type="text"
                          value={link.url}
                          onChange={(e) =>
                            handleLinkChange(index, "url", e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setCourseContentData({
                          ...courseContentData,
                          links: [
                            ...courseContentData.links,
                            { title: "", url: "" },
                          ],
                        })
                      }
                    >
                      Add Link
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewCourse;
