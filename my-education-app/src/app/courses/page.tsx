//@ts-nocheck
"use client"
import React from 'react';
import { useGetAllCourseQuery } from '@/redux-toolkit/features/courses/courseApi';
import Link from 'next/link';
import { BiErrorCircle } from 'react-icons/bi';
import { VscLoading } from 'react-icons/vsc';
const placeholder = "/my-education-app/public/placeholder.svg"
const Courses: React.FC = () => {
  // Use the query hook to fetch data
  const { data, error, isLoading } = useGetAllCourseQuery();

  if (isLoading) {
    return <div className='min-h-screen  justify-center flex items-center w-full'>
      <span className='text-2xl font-bold text-primary'>
      Loading...
      </span>
      </div>;
  }

  if (error) {
    return <div className='min-h-screen  flex-1 flex items-center w-full'>
      <div className='flex items-center gap-2 text-primary justify-center w-full h-full text-2xl font-bold'>
        <div className='text-3xl'>
          <span>
            <BiErrorCircle />
          </span>
        </div>
        TEMPORARY DATA NOT AVAILABLE
      </div>
    </div>;
  }

  return (
    <section className="py-12 md:py-20 relative mb-2 ">
      {/* <div className="bg-black blur-2xl absolute h-full w-full opacity-30 hero_animation"></div> */}
      <div className="container">
        <div className="relative items-center flex justify-center">
          <h2 className="text-3xl md:text-4xl cursor-pointer font-bold text-center mb-8">
            Featured Courses
          </h2>
          <div className="absolute inset-0 hero_animation xl:h-[50vh] xl:w-[50vh] blur-3xl rounded-full -top-10 border opacity-50 left-[40%]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data && data?.course?.length > 0 ? (
            data?.course?.map((course: any) => (

              <Link href={`/courses/${course._id}`}>
                <div key={course.id} className="bg-card  rounded-lg cursor-pointer  overflow-hidden shadow-md animate-slide-up" >
                  <img
                    src={course.thumbnail ? course.thumbnail?.url : "/placeholder.svg"}
                    alt={course.name}
                    className="w-full h-48 object-cover"
                    style={{ aspectRatio: '400/225', objectFit: 'cover' }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <Link
                      href={course.demoUrl}
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;
