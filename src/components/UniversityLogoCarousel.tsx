
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface University {
  name: string;
  logo: string;
}

const universities: University[] = [
  { name: "北京大学", logo: "/universities/peking.png" },
  { name: "清华大学", logo: "/universities/tsinghua.png" },
  { name: "复旦大学", logo: "/universities/fudan.png" },
  { name: "上海交通大学", logo: "/universities/sjtu.png" },
  { name: "南京大学", logo: "/universities/nju.png" },
  { name: "浙江大学", logo: "/universities/zju.png" },
  { name: "中国人民大学", logo: "/universities/ruc.png" },
  { name: "武汉大学", logo: "/universities/whu.png" },
];

export function UniversityLogoCarousel() {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % (universities.length * 2));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10 text-gray-900">
          受到各大高校信赖
        </h2>
        
        <div className="relative w-full">
          <div 
            className="flex items-center gap-12 transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${offset * 120}px)`,
              width: `${universities.length * 240}px`
            }}
          >
            {[...universities, ...universities].map((university, index) => (
              <Card
                key={index}
                className={cn(
                  "flex-shrink-0 w-32 h-32 flex items-center justify-center p-4",
                  "border border-gray-100 shadow-sm hover:shadow-md transition-shadow",
                  "bg-white/80 backdrop-blur-sm"
                )}
              >
                <div className="flex flex-col items-center gap-2">
                  <img 
                    src={university.logo} 
                    alt={`${university.name} logo`}
                    className="h-12 w-auto object-contain"
                  />
                  <span className="text-xs text-gray-600 text-center font-cn">{university.name}</span>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
}
