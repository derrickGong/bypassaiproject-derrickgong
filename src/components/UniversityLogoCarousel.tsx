
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
  const [logoStatus, setLogoStatus] = useState<Record<string, boolean>>({});

  // Track image load status
  const handleImageLoad = (universityName: string) => {
    setLogoStatus(prev => ({
      ...prev,
      [universityName]: true
    }));
  };

  const handleImageError = (universityName: string, logoUrl: string) => {
    console.error(`Failed to load logo for ${universityName}: ${logoUrl}`);
    setLogoStatus(prev => ({
      ...prev,
      [universityName]: false
    }));
  };

  // Log status for debugging
  useEffect(() => {
    console.log('Logo status:', logoStatus);
  }, [logoStatus]);

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12 text-gray-900 tracking-tight leading-snug">
          受到各大高校信赖
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {universities.map((university, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 flex justify-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card
                        className={cn(
                          "w-40 h-40 flex items-center justify-center p-5",
                          "border border-gray-100 shadow-sm hover:shadow-md transition-shadow",
                          "bg-white"
                        )}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="h-16 w-full flex items-center justify-center relative">
                            <img 
                              src={university.logo} 
                              alt={`${university.name} logo`}
                              className="max-h-16 max-w-full object-contain"
                              style={{ 
                                backgroundColor: "transparent",
                                visibility: "visible"
                              }}
                              onLoad={() => handleImageLoad(university.name)}
                              onError={(e) => {
                                handleImageError(university.name, university.logo);
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
