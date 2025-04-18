
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

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

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-16 text-gray-900">
          受到各大高校信赖
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full relative px-12"
        >
          <CarouselContent className="-ml-4">
            {universities.map((university, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card
                        className={cn(
                          "w-full aspect-square flex items-center justify-center p-8",
                          "border border-gray-100 shadow-sm hover:shadow-md transition-shadow",
                          "bg-white"
                        )}
                      >
                        <div className="flex flex-col items-center gap-4">
                          <div className="h-20 w-full flex items-center justify-center">
                            <img 
                              src={university.logo} 
                              alt={`${university.name} logo`}
                              className="max-h-20 w-auto object-contain"
                              style={{
                                opacity: logoStatus[university.name] ? 1 : 0.7,
                                transition: "opacity 0.3s ease"
                              }}
                              onLoad={() => handleImageLoad(university.name)}
                              onError={(e) => {
                                handleImageError(university.name, university.logo);
                                (e.target as HTMLImageElement).src = "/placeholder.svg";
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-800 text-center line-clamp-2">
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
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
