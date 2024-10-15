//@ts-nocheck
"use client"
import { ChangeEvent, useState } from "react";
import { Button } from "@/components/new-york/ui/button";
import { CardTitle, CardDescription, CardFooter, Card, CardContent, CardHeader } from "@/components/new-york/ui/card";
import { Input } from "@/components/new-york/ui/input";
import { Label } from "@/components/new-york/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/new-york/ui/select";
import { Textarea } from "@/components/new-york/ui/textarea";
import { useCreateCourseMutation } from "@/redux-toolkit/features/courses/courseApi";
import toast from "react-hot-toast";

export default function Component() {
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

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setCourseInfo((prev) => ({
            ...prev,
            [id]: value,
        }));
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
    const handleSelectValueChange=(selectedValue:string,tag:string)=>
    {
        console.log(selectedValue,tag)
        setCourseInfo((prev) => ({
            ...prev,
            [tag]: selectedValue,
        }));
        console.log(courseInfo)
    }
    const handleSelectChange = (e:ChangeEvent<HTMLSelectElement>) => {
        
        const { id, value } = e.target;
        console.log(id,value)
        setCourseInfo((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Create a New Course</CardTitle>
                <CardDescription>Fill out the form to add a new course.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Course Title</Label>
                            <Input id="name" value={courseInfo.name} onChange={handleInputChange} placeholder="Enter course title" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Course Description</Label>
                            <Textarea id="description" value={courseInfo.description} onChange={handleInputChange} rows={4} placeholder="Describe the course" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="price">Price</Label>
                                <Input id="price" value={courseInfo.price} onChange={handleInputChange} type="number" placeholder="Enter price" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="estimatePrice">Estimated Price</Label>
                                <Input id="estimatePrice" value={courseInfo.estimatePrice} onChange={handleInputChange} type="number" placeholder="Enter estimated price" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="tag">Course Tag</Label>
                            <Select value={courseInfo.tag} onValueChange={(selectedValue:string)=>handleSelectValueChange(selectedValue,"tag")}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a tag" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="development">Development</SelectItem>
                                    <SelectItem value="design">Design</SelectItem>
                                    <SelectItem value="marketing">Marketing</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="level">Course Level</Label>
                            <Select value={courseInfo.level} onValueChange={(selectedValue:string)=>handleSelectValueChange(selectedValue,"level")}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="beginner">Beginner</SelectItem>
                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                    <SelectItem value="advanced">Advanced</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="demoUrl">Demo URL</Label>
                            <Input id="demoUrl" value={courseInfo.demoUrl} onChange={handleInputChange} type="url" placeholder="Enter demo URL" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="thumbnail">Course Thumbnail</Label>
                            <Input id="thumbnail" value={courseInfo.thumbnail} onChange={handleInputChange} placeholder="Enter course thumbnail" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="videoUrl">Video URL</Label>
                            <Input id="videoUrl" value={courseContentData.videoUrl} onChange={(e) => setCourseContentData({...courseContentData, videoUrl: e.target.value})} type="url" placeholder="Enter video URL" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="videoTitle">Video Section Title</Label>
                            <Input id="videoTitle" value={courseContentData.title} onChange={(e) => setCourseContentData({...courseContentData, title: e.target.value})} placeholder="Enter video section title" />
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="videoLinks">Video Links</Label>
                                <div className="grid gap-2">
                                    {courseContentData.links.map((link, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <Input
                                                placeholder="Link title"
                                                value={link.title}
                                                onChange={(e) => handleLinkChange(index, 'title', e.target.value)}
                                            />
                                            <Input
                                                type="url"
                                                placeholder="Link URL"
                                                value={link.url}
                                                onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                                            />
                                            <Button variant="ghost" size="sm">
                                                <PlusIcon className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="suggestion">Course Suggestions</Label>
                            <Textarea id="suggestion" value={courseContentData.suggestion} onChange={(e) => setCourseContentData({...courseContentData, suggestion: e.target.value})} rows={4} placeholder="Enter course suggestions" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="benefits">Course Benefits</Label>
                            <Textarea id="benefits" value={benefits.map(b => b.title).join(', ')} onChange={(e) => setBenefits(e.target.value.split(', ').map(title => ({ title })))} rows={4} placeholder="Enter course benefits" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="prerequisites">Course Prerequisites</Label>
                            <Textarea id="prerequisites" value={prerequisites.map(p => p.title).join(', ')} onChange={(e) => setPrerequisites(e.target.value.split(', ').map(title => ({ title })))} rows={4} placeholder="Enter course prerequisites" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="content">Course Content</Label>
                            <Textarea id="content" value={courseContentData.description} onChange={(e) => setCourseContentData({...courseContentData, description: e.target.value})} rows={4} placeholder="Enter course content" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <div className="flex justify-end">
                    <Button onClick={handleSaveCourse} disabled={isLoading}>
                        {isLoading ? "Saving..." : "Create Course"}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

function PlusIcon(props) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}
