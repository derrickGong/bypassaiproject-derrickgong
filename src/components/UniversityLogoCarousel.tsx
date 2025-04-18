
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface University {
  name: string;
  logo: string;
  country: string;
}

const universities: University[] = [
  { name: "Harvard University", logo: "/universities/harvard.png", country: "USA" },
  { name: "Stanford University", logo: "/universities/stanford.png", country: "USA" },
  { name: "Massachusetts Institute of Technology", logo: "/universities/mit.png", country: "USA" },
  { name: "University of Oxford", logo: "/universities/oxford.png", country: "UK" },
  { name: "University of Cambridge", logo: "/universities/cambridge.png", country: "UK" },
  { name: "ETH Zurich", logo: "/universities/eth.png", country: "Switzerland" },
  { name: "Imperial College London", logo: "/universities/imperial.png", country: "UK" },
  { name: "California Institute of Technology", logo: "/universities/caltech.png", country: "USA" },
];

export function UniversityLogoCarousel() {
  const [offset, setOffset] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    // 预加载所有图片
    const preloadImages = async () => {
      const loadStatus: Record<string, boolean> = {};
      
      for (const university of universities) {
        try {
          // 创建图片元素并加载
          const img = new Image();
          img.src = university.logo;
          await new Promise((resolve, reject) => {
            img.onload = () => {
              loadStatus[university.name] = true;
              resolve(true);
            };
            img.onerror = () => {
              loadStatus[university.name] = false;
              reject(new Error(`Failed to load ${university.logo}`));
            };
          });
        } catch (error) {
          console.error(`Error loading ${university.logo}:`, error);
        }
      }
      
      setImagesLoaded(loadStatus);
    };
    
    preloadImages();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % (universities.length * 2));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  console.log('Images loaded status:', imagesLoaded);

  return (
    <div className="w-full py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12 text-gray-900 tracking-tight leading-snug">
          受到各大高校信赖
        </h2>
        
        <div className="relative w-full">
          <div 
            className="flex items-center gap-16 transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${offset * 130}px)`,
              width: `${universities.length * 260}px`
            }}
          >
            {[...universities, ...universities].map((university, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card
                      className={cn(
                        "flex-shrink-0 w-40 h-40 flex items-center justify-center p-5",
                        "border border-gray-100 shadow-sm hover:shadow-md transition-shadow",
                        "bg-white backdrop-blur-sm"
                      )}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="h-16 w-full flex items-center justify-center">
                          <img 
                            src={university.logo} 
                            alt={`${university.name} logo`}
                            className="max-h-16 w-auto object-contain"
                            onError={(e) => {
                              console.error(`Error loading ${university.logo}`);
                              // 在加载失败时显示错误信息
                              (e.target as HTMLImageElement).src = "/placeholder.svg";
                              (e.target as HTMLImageElement).style.opacity = "0.7";
                            }}
                          />
                        </div>
                        <span className="text-sm text-center font-medium text-gray-800 line-clamp-2">
                          {university.name}
                        </span>
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{university.name} ({university.country})</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
}
