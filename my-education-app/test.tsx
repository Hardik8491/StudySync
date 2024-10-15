// import Image from "next/image"
// import { Calendar, ChevronLeft, ChevronRight, Play, ShoppingCart } from "lucide-react"
// import { Button } from "@/components/new-york/ui/button"
// import { Card, CardContent } from "@/components/new-york/ui/card"

// export default function CoursePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <header className="mb-8">
//           <nav className="text-sm mb-2">
//             <a href="#" className="hover:underline">Home</a> &gt; <a href="#" className="hover:underline">Courses</a> &gt; <span>Self Positioning</span>
//           </nav>
//           <h1 className="text-3xl font-bold border-l-4 border-emerald-500 pl-4">Self Positioning</h1>
//         </header>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="md:col-span-2 space-y-8">
//             {/* Course Info */}
//             <div className="flex flex-wrap items-center gap-4 text-sm">
//               <span className="bg-gray-700 px-2 py-1 rounded">43,240 Attended this course</span>
//               <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> 1 registered for upcoming course</span>
//               <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Ongoing</span>
//             </div>

//             <p className="text-gray-300">
//               Archetypes course was a game changer for me. When I first joined the course, I had a
//               Claustrophobia, and many other complex cases...
//             </p>

//             <div className="text-sm">
//               <p>Upcoming course date <span className="font-semibold">24 Dec, 2023</span></p>
//               <p className="mt-2">You can pay via <Image src="/placeholder.svg?height=20&width=40" alt="Visa" width={40} height={20} className="inline-block mx-1" /> <Image src="/placeholder.svg?height=20&width=40" alt="Mastercard" width={40} height={20} className="inline-block mx-1" /> <Image src="/placeholder.svg?height=20&width=80" alt="Klarna" width={80} height={20} className="inline-block mx-1" /></p>
//             </div>

//             {/* Trusted Companies */}
//             <Card className="bg-gray-100 text-gray-800">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-2">This course is trusted by these companies</h3>
//                 <p className="text-sm text-gray-600 mb-4">These companies' attendees their employees, finished our course and recommended it to everyone.</p>
//                 <div className="flex flex-wrap gap-4">
//                   <Image src="/placeholder.svg?height=30&width=120" alt="Google AdSense" width={120} height={30} />
//                   <Image src="/placeholder.svg?height=30&width=120" alt="Google" width={120} height={30} />
//                   <Image src="/placeholder.svg?height=30&width=120" alt="Android" width={120} height={30} />
//                   <Image src="/placeholder.svg?height=30&width=120" alt="Google Domains" width={120} height={30} />
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Course Guide */}
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Course guide</h2>
//               <p className="text-sm text-gray-300 mb-4">12 days • 246 hours total</p>
//               {[1, 2, 3, 4, 5, 6, 7].map((day) => (
//                 <div key={day} className="flex items-center justify-between py-3 border-b border-gray-700">
//                   <div>
//                     <span className="text-gray-400">DAY {day}</span>
//                     <h3 className="font-semibold">Course Title for Day {day}</h3>
//                   </div>
//                   <span className="text-sm text-gray-400">4hrs 7:00PM - 11:00PM</span>
//                 </div>
//               ))}
//             </div>

//             {/* Description */}
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Description</h2>
//               <p className="text-gray-300">
//                 Congue aenean et venenatis praesent posuere euismod enim. Massa sagittis vitae tristique ipsum bibendum. Tellus
//                 nunc amet sit aenean nisl. Cras urna ornare.
//               </p>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="md:col-span-1">
//             <Card className="bg-gray-800 text-white">
//               <CardContent className="p-6">
//                 <div className="relative aspect-video mb-4">
//                   <Image src="/placeholder.svg?height=200&width=350" alt="Course Preview" layout="fill" objectFit="cover" className="rounded-lg" />
//                   <Button size="icon" className="absolute inset-0 m-auto bg-white/20 hover:bg-white/30">
//                     <Play className="h-6 w-6" />
//                   </Button>
//                 </div>
//                 <h2 className="text-3xl font-bold mb-4">£ 4,500</h2>
//                 <Button className="w-full mb-2">
//                   <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
//                 </Button>
//                 <Button variant="outline" className="w-full">Buy now</Button>
//                 <p className="text-xs text-gray-400 mt-2">
//                   You only pay 50% now, other will be charged on your card on 24Dec, 2023
//                 </p>

//                 <div className="mt-6 space-y-2">
//                   <h3 className="font-semibold">This course includes</h3>
//                   <p className="text-sm flex items-center"><Calendar className="w-4 h-4 mr-2" /> 2 days a week active training from 6:00PM - 11:00PM</p>
//                   <p className="text-sm flex items-center"><Image src="/placeholder.svg?height=16&width=16" alt="Download" width={16} height={16} className="mr-2" /> Downloadable digital version of 8 meditation audios</p>
//                   <p className="text-sm flex items-center"><Image src="/placeholder.svg?height=16&width=16" alt="Presentation" width={16} height={16} className="mr-2" /> Downloadable digital presentation + course guide</p>
//                 </div>

//                 <div className="mt-6">
//                   <h3 className="font-semibold mb-2">Dates this course is available on</h3>
//                   <div className="flex justify-between items-center mb-2">
//                     <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
//                     <span>November 2022</span>
//                     <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
//                   </div>
//                   <div className="grid grid-cols-7 gap-1 text-center">
//                     {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
//                       <div key={day} className="text-xs font-semibold">{day}</div>
//                     ))}
//                     {Array.from({ length: 35 }, (_, i) => (
//                       <Button
//                         key={i}
//                         variant="ghost"
//                         className={`p-1 text-xs ${i === 21 ? 'bg-blue-500 text-white' : ''}`}
//                       >
//                         {i + 1}
//                       </Button>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// src/components/MainPage.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { AppDispatch } from '../store';

interface Product {
  id: string;
  title: string;
  price: number;
}

const products: Product[] = [
  { id: '1', title: 'Product 1', price: 10 },
  { id: '2', title: 'Product 2', price: 20 },
  { id: '3', title: 'Product 3', price: 30 },
];

const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (product: Product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid black', padding: '10px' }}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
