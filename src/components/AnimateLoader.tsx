// import React from "react";

// const AnimalLoader = ({ size = 220 }) => {
//   return (
//     <div style={{ width: size, height: size }}>
//       <svg
//         viewBox="0 0 600 600"
//         width="100%"
//         height="100%"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           <style>{`
//             .animal {
//               fill: #243d80;
//               opacity: 0;
//               transform-origin: 300px 300px;
//               animation: showAnimal 6s infinite ease-in-out;
//               filter: url(#glow);
//             }

//             .animal:nth-of-type(1) { animation-delay: 0s; }
//             .animal:nth-of-type(2) { animation-delay: 1s; }
//             .animal:nth-of-type(3) { animation-delay: 2s; }
//             .animal:nth-of-type(4) { animation-delay: 3s; }
//             .animal:nth-of-type(5) { animation-delay: 4s; }
//             .animal:nth-of-type(6) { animation-delay: 5s; }

//             @keyframes showAnimal {
//               0%   { opacity: 0; transform: scale(0.8); }
//               10%  { opacity: 1; transform: scale(1); }
//               20%  { opacity: 1; transform: scale(1.05); }
//               30%  { opacity: 0; transform: scale(0.85); }
//               100% { opacity: 0; }
//             }
//           `}</style>

//           <filter id="glow">
//             <feDropShadow
//               dx="0"
//               dy="0"
//               stdDeviation="8"
//               floodColor="#243d80"
//             />
//           </filter>
//         </defs>

//         {/* Rotating decorative circle */}
//         <circle
//           cx="300"
//           cy="300"
//           r="250"
//           stroke="#243d80"
//           strokeWidth="2"
//           fill="none"
//           strokeDasharray="12 18"
//         >
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             from="0 300 300"
//             to="360 300 300"
//             dur="8s"
//             repeatCount="indefinite"
//           />
//         </circle>

//         {/* ===== Animal 1 ===== */}
//         <g className="animal">
//           <path d="M409.06,297.21c-3.41-.68-6.21-3.75-6.54-7.21-.4,3.72,3.33,6.91,7.02,7.6Z" />
//         </g>

//         {/* ===== Animal 2 ===== */}
//         <g className="animal">
//           <path d="M409.06,297.21c-3.41-.68-6.21-3.75-6.54-7.21-.4,3.72,3.33,6.91,7.02,7.6Z" />
//         </g>
         {/* ===== Animal 4 ===== */}
//         <g className="animal">
//           <path d="M409.06,297.21c-3.41-.68-6.21-3.75-6.54-7.21-.4,3.72,3.33,6.91,7.02,7.6Z" />
//
//         {/* ===== Animal 3 ===== */}
//         <g className="animal">
//           <path d="M409.06,297.21c-3.41-.68-6.21-3.75-6.54-7.21-.4,3.72,3.33,6.91,7.02,7.6Z" />
//         </g>

//         </g>

//         {/* ===== Animal 5 ===== */}
//         <g className="animal">
//           <path d="M409.06,297.21c-3.41-.68-6.21-3.75-6.54-7.21-.4,3.72,3.33,6.91,7.02,7.6Z" />
//         </g>

//         {/* ===== Animal 6 ===== */}
//         <g className="animal">
//           <path d="M409.06,297.21c-3.41-.68-6.21-3.75-6.54-7.21-.4,3.72,3.33,6.91,7.02,7.6Z" />
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default AnimalLoader;

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Card } from "@/components/ui/card";

// // Data structure representing the connection nodes from your image
// const nodes = [
//   { id: 1, x: 50, y: 15, type: 'med', label: 'Capsules', delay: 0 },
//   { id: 2, x: 25, y: 35, type: 'animal', label: 'Chicken', img: '/chicken.jpg', delay: 0.5 },
//   { id: 3, x: 50, y: 40, type: 'animal', label: 'Sheep', img: '/sheep.jpg', delay: 0.2 },
//   { id: 4, x: 75, y: 35, type: 'animal', label: 'Horse', img: '/horse.jpg', delay: 0.8 },
//   { id: 5, x: 15, y: 65, type: 'animal', label: 'Cat', img: '/cat.jpg', delay: 1.1 },
//   { id: 6, x: 45, y: 65, type: 'animal', label: 'Dog', img: '/dog.jpg', delay: 1.4 },
//   { id: 7, x: 65, y: 60, type: 'med', label: 'Vial', delay: 1.7 },
//   { id: 8, x: 85, y: 60, type: 'animal', label: 'Cow', img: '/cow.jpg', delay: 2.0 },
//   { id: 9, x: 35, y: 85, type: 'med', label: 'Syrup', delay: 2.3 },
//   { id: 10, x: 65, y: 85, type: 'animal', label: 'Buffalo', img: '/buffalo.jpg', delay: 2.6 },
//   { id: 11, x: 90, y: 85, type: 'animal', label: 'Pig', img: '/pig.jpg', delay: 2.9 },
// ];

// // Connection lines (From Node ID to Node ID)
// const connections = [
//   { from: 1, to: 3 },
//   { from: 3, to: 2 },
//   { from: 3, to: 4 },
//   { from: 3, to: 5 },
//   { from: 3, to: 7 },
//   { from: 6, to: 7 },
//   { from: 7, to: 8 },
//   { from: 6, to: 10 },
//   { from: 10, to: 9 },
//   { from: 10, to: 11 },
// ];

// const AnimalLoader = () => {
//   return (
//     <Card className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden border-none shadow-xl rounded-xl p-8">
//       {/* Brand Header */}
//       <div className="absolute top-8 right-8 text-right">
//         <h1 className="text-4xl font-bold text-[#243d80] tracking-tighter">Siflon</h1>
//         <p className="text-[#243d80] font-semibold text-xs tracking-[0.2em] uppercase">Pharma Pvt. Ltd.</p>
//         <p className="text-sky-500 italic text-sm mt-1 font-medium">Quality is our Strength</p>
//       </div>

//       <svg className="w-full h-full" viewBox="0 0 100 100">
//         {/* Animated Connection Lines */}
//         {connections.map((conn, idx) => {
//           const start = nodes.find(n => n.id === conn.from);
//           const end = nodes.find(n => n.id === conn.to);
//           if (!start || !end) return null;

//           return (
//             <motion.line
//               key={`line-${idx}`}
//               x1={start.x} y1={start.y}
//               x2={end.x} y2={end.y}
//               stroke="#bae6fd" // Light sky blue
//               strokeWidth="0.8"
//               initial={{ pathLength: 0, opacity: 0 }}
//               animate={{ pathLength: 1, opacity: 1 }}
//               transition={{ duration: 1.5, delay: Math.min(start.delay, end.delay) + 0.5 }}
//             />
//           );
//         })}

//         {/* Animated Nodes */}
//         {nodes.map((node) => (
//           <motion.g
//             key={node.id}
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ type: 'spring', stiffness: 100, delay: node.delay }}
//             whileHover={{ scale: 1.1 }}
//           >
//             {/* Outer Glow/Ring */}
//             <circle
//               cx={node.x}
//               cy={node.y}
//               r="6.5"
//               fill="white"
//               stroke="#0ea5e9"
//               strokeWidth="0.3"
//               className="drop-shadow-md"
//             />
            
//             {/* Image Placeholder (Clip path used for circular images) */}
//             <defs>
//               <clipPath id={`clip-${node.id}`}>
//                 <circle cx={node.x} cy={node.y} r="6" />
//               </clipPath>
//             </defs>
            
//             {/* IMPORTANT: Replace fill="url(#...)" or use <image> tag 
//                In production, you would use:
//                <image href={node.img} x={node.x - 6} y={node.y - 6} height="12" width="12" clipPath={`url(#clip-${node.id})`} />
//             */}
//             <circle
//               cx={node.x}
//               cy={node.y}
//               r="6"
//               fill={node.type === 'animal' ? '#243d80' : '#0ea5e9'}
//               fillOpacity="0.2"
//               clipPath={`url(#clip-${node.id})`}
//             />
            
//             {/* Tiny text label for interaction */}
//             <text 
//               x={node.x} 
//               y={node.y + 9} 
//               textAnchor="middle" 
//               fontSize="1.5" 
//               className="fill-slate-500 font-medium pointer-events-none"
//             >
//               {node.label}
//             </text>
//           </motion.g>
//         ))}
//       </svg>
//     </Card>
//   );
// };

// export default AnimalLoader;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { Card } from "@/components/ui/card";

// // Updated data structure with real free image URLs (Icons8 - flat color style)
// const nodes = [
//   { id: 1, x: 50, y: 15, type: 'med', label: 'Capsules', img: 'https://img.icons8.com/color/96/pills.png', delay: 0 },
//   { id: 2, x: 25, y: 35, type: 'animal', label: 'Chicken', img: 'https://img.icons8.com/color/96/chicken.png', delay: 0.5 },
//   { id: 3, x: 50, y: 40, type: 'animal', label: 'Sheep', img: 'https://img.icons8.com/color/96/sheep.png', delay: 0.2 },
//   { id: 4, x: 75, y: 35, type: 'animal', label: 'Horse', img: 'https://img.icons8.com/color/96/horse.png', delay: 0.8 },
//   { id: 5, x: 15, y: 65, type: 'animal', label: 'Cat', img: 'https://img.icons8.com/color/96/cat.png', delay: 1.1 },
//   { id: 6, x: 45, y: 65, type: 'animal', label: 'Dog', img: 'https://img.icons8.com/color/96/dog.png', delay: 1.4 },
//   { id: 7, x: 65, y: 60, type: 'med', label: 'Vial', img: 'https://img.icons8.com/color/96/test-tube.png', delay: 1.7 },
//   { id: 8, x: 85, y: 60, type: 'animal', label: 'Cow', img: 'https://img.icons8.com/color/96/cow.png', delay: 2.0 },
//   { id: 9, x: 35, y: 85, type: 'med', label: 'Syrup', img: 'https://img.icons8.com/color/96/syrup.png', delay: 2.3 },
//   { id: 10, x: 65, y: 85, type: 'animal', label: 'Buffalo', img: 'https://img.icons8.com/color/96/buffalo.png', delay: 2.6 },
//   { id: 11, x: 90, y: 85, type: 'animal', label: 'Pig', img: 'https://img.icons8.com/color/96/pig.png', delay: 2.9 },
// ];

// const connections = [
//   { from: 1, to: 3 },
//   { from: 3, to: 2 },
//   { from: 3, to: 4 },
//   { from: 3, to: 5 },
//   { from: 3, to: 7 },
//   { from: 6, to: 7 },
//   { from: 7, to: 8 },
//   { from: 6, to: 10 },
//   { from: 10, to: 9 },
//   { from: 10, to: 11 },
// ];

// const AnimalLoader = () => {
//   return (
//     <Card className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden border-none shadow-xl rounded-xl p-8">
//       {/* Brand Header */}
//       <div className="absolute top-8 right-8 text-right z-10">
//         <h1 className="text-4xl font-bold text-[#243d80] tracking-tighter">Siflon</h1>
//         <p className="text-[#243d80] font-semibold text-xs tracking-[0.2em] uppercase">Pharma Pvt. Ltd.</p>
//         <p className="text-sky-500 italic text-sm mt-1 font-medium">Quality is our Strength</p>
//       </div>

//       <svg className="w-full h-full" viewBox="0 0 100 100">
//         <defs>
//           {/* Define a global drop shadow filter for nodes */}
//           <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
//             <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodColor="#0ea5e9" floodOpacity="0.3"/>
//           </filter>
//         </defs>

//         {/* Animated Connection Lines */}
//         {connections.map((conn, idx) => {
//           const start = nodes.find(n => n.id === conn.from);
//           const end = nodes.find(n => n.id === conn.to);
//           if (!start || !end) return null;

//           return (
//             <motion.line
//               key={`line-${idx}`}
//               x1={start.x} y1={start.y}
//               x2={end.x} y2={end.y}
//               stroke="#bae6fd"
//               strokeWidth="0.5"
//               strokeDasharray="1 1" // Dashed line for technical look
//               initial={{ pathLength: 0, opacity: 0 }}
//               animate={{ pathLength: 1, opacity: 0.8 }}
//               transition={{ duration: 1.5, delay: Math.min(start.delay, end.delay) + 0.5 }}
//             />
//           );
//         })}

//         {/* Animated Nodes */}
//         {nodes.map((node) => (
//           <motion.g
//             key={node.id}
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ type: 'spring', stiffness: 200, damping: 15, delay: node.delay }}
//             whileHover={{ scale: 1.2 }}
//             style={{ cursor: 'pointer' }}
//           >
//             {/* Unique ClipPath for each node */}
//             <defs>
//               <clipPath id={`clip-${node.id}`}>
//                 <circle cx={node.x} cy={node.y} r="6" />
//               </clipPath>
//             </defs>

//             {/* White Background Circle with Border */}
//             <circle
//               cx={node.x}
//               cy={node.y}
//               r="6.5"
//               fill="white"
//               stroke="#0ea5e9"
//               strokeWidth="0.5"
//               filter="url(#shadow)"
//             />
            
//             {/* The Image */}
//             <image
//               href={node.img}
//               x={node.x - 6}
//               y={node.y - 6}
//               width="12"
//               height="12"
//               clipPath={`url(#clip-${node.id})`}
//               preserveAspectRatio="xMidYMid slice"
//             />
            
//             {/* Label Text */}
//             <text 
//               x={node.x} 
//               y={node.y + 10} // Slightly increased gap for better readability
//               textAnchor="middle" 
//               fontSize="1.8" // Slightly larger text
//               className="fill-slate-600 font-semibold pointer-events-none select-none"
//               style={{ textTransform: 'capitalize' }}
//             >
//               {node.label}
//             </text>
//           </motion.g>
//         ))}
//       </svg>
//     </Card>
//   );
// };

// export default AnimalLoader;




import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
//import {Badge} from "lucide-react"
import { Badge } from "@/components/ui/badge";


// Data structure with REAL photo URLs from Unsplash
const nodes = [
  { id: 1, x: 50, y: 15, type: 'med', label: 'Capsules', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&q=80', delay: 0 },
  { id: 2, x: 25, y: 35, type: 'animal', label: 'Chicken', img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=200&q=80', delay: 0.5 },
  { id: 3, x: 50, y: 40, type: 'animal', label: 'Sheep', img: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=200&q=80', delay: 0.2 },
  { id: 4, x: 75, y: 35, type: 'animal', label: 'Horse', img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=200&q=80', delay: 0.8 },
  { id: 5, x: 15, y: 65, type: 'animal', label: 'Cat', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80', delay: 1.1 },
  { id: 6, x: 45, y: 65, type: 'animal', label: 'Dog', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=200&q=80', delay: 1.4 },
  { id: 7, x: 65, y: 60, type: 'med', label: 'Vial', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=200&q=80', delay: 1.7 },
  { id: 8, x: 85, y: 60, type: 'animal', label: 'Cow', img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=200&q=80', delay: 2.0 },
  { id: 9, x: 35, y: 85, type: 'med', label: 'Syrup', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=200&q=80', delay: 2.3 },
  { id: 10, x: 65, y: 85, type: 'animal', label: 'Buffalo', img: 'https://static4.depositphotos.com/1007572/329/i/450/depositphotos_3294853-stock-photo-african-buffalo-cow.jpg?auto=format&fit=crop&w=200&q=80', delay: 2.6 },
  { id: 11, x: 90, y: 85, type: 'animal', label: 'Pig', img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=200&q=80', delay: 2.9 },
];

const connections = [
  { from: 1, to: 3 },
  { from: 3, to: 2 },
  { from: 3, to: 4 },
  { from: 3, to: 5 },
  { from: 3, to: 7 },
  { from: 6, to: 7 },
  { from: 7, to: 8 },
  { from: 6, to: 10 },
  { from: 10, to: 9 },
  { from: 10, to: 11 },
];

const PRIMARY_COLOR = '#243d80'
const PRIMARY_HOVER = '#1a2d5c'
const AnimalLoader = () => {
  return (
    <Card className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden border-none shadow-xl rounded-xl p-8 pt-[60px]">
      {/* Brand Header */}
      {/* <div className="absolute top-8 right-8 text-right z-10">
        <h1 className="text-4xl font-bold text-[#243d80] tracking-tighter">Siflon</h1>
        <p className="text-[#243d80] font-semibold text-xs tracking-[0.2em] uppercase">Pharma Pvt. Ltd.</p>
        <p className="text-sky-500 italic text-sm mt-1 font-medium">Quality is our Strength</p>
      </div> */}

      {/* <h2 className="text-center text-black text-3xl font-bold">Sectors we Serve</h2> */}
         {/* Section Title */}
              <motion.div
                className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-30 mb-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-2" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
                  Our Sectors
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Sectors we Serve
                </h2>
              </motion.div>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          {/* Filter for subtle shadow */}
          <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#0ea5e9" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Animated Connection Lines */}
        {connections.map((conn, idx) => {
          const start = nodes.find(n => n.id === conn.from);
          const end = nodes.find(n => n.id === conn.to);
          if (!start || !end) return null;

          return (
            <motion.line
              key={`line-${idx}`}
              x1={start.x} y1={start.y}
              x2={end.x} y2={end.y}
              stroke="#bae6fd"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: Math.min(start.delay, end.delay) + 0.5 }}
            />
          );
        })}

        {/* Animated Nodes */}
        {nodes.map((node) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: node.delay }}
            whileHover={{ scale: 1.2 }}
            style={{ cursor: 'pointer' }}
          >
            {/* Unique ClipPath for each node */}
            <defs>
              <clipPath id={`clip-${node.id}`}>
                <circle cx={node.x} cy={node.y} r="6" />
              </clipPath>
            </defs>

            {/* White Border Circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r="6.5"
              fill="white"
              stroke="#0ea5e9"
              strokeWidth="0.5"
              filter="url(#drop-shadow)"
            />
            
            {/* Real Image */}
            <image
              href={node.img}
              x={node.x - 6}
              y={node.y - 6}
              width="12"
              height="12"
              clipPath={`url(#clip-${node.id})`}
              // 'slice' acts like background-size: cover to fill the circle without stretching
              preserveAspectRatio="xMidYMid slice"
            />
            
            {/* Label Text */}
            <text 
              x={node.x} 
              y={node.y + 10} 
              textAnchor="middle" 
              fontSize="1.8" 
              className="fill-slate-600 font-semibold pointer-events-none"
              style={{ textTransform: 'capitalize', fontFamily: 'system-ui' }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </Card>
  );
};

export default AnimalLoader;


