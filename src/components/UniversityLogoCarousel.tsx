
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
  { name: "哈佛大学", logo: "/universities/harvard.png", country: "美国" },
  { name: "斯坦福大学", logo: "/universities/stanford.png", country: "美国" },
  { name: "麻省理工学院", logo: "/universities/mit.png", country: "美国" },
  { name: "牛津大学", logo: "/universities/oxford.png", country: "英国" },
  { name: "剑桥大学", logo: "/universities/cambridge.png", country: "英国" },
  { name: "清华大学", logo: "/universities/tsinghua.png", country: "中国" },
  { name: "北京大学", logo: "/universities/peking.png", country: "中国" },
  { name: "浙江大学", logo: "/universities/zju.png", country: "中国" },
  { name: "复旦大学", logo: "/universities/fudan.png", country: "中国" },
  { name: "南京大学", logo: "/universities/nju.png", country: "中国" },
  { name: "中国人民大学", logo: "/universities/ruc.png", country: "中国" },
  { name: "武汉大学", logo: "/universities/whu.png", country: "中国" },
  { name: "上海交通大学", logo: "/universities/sjtu.png", country: "中国" },
  { name: "苏黎世联邦理工学院", logo: "/universities/eth.png", country: "瑞士" },
  { name: "帝国理工学院", logo: "/universities/imperial.png", country: "英国" },
  { name: "加州理工学院", logo: "/universities/caltech.png", country: "美国" },
];

export function UniversityLogoCarousel() {
  const [logoStatus, setLogoStatus] = useState<Record<string, boolean>>({});
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  
  const [api, setApi] = React.useState<any>(null);
  
  useEffect(() => {
    // 预加载所有图片
    universities.forEach(university => {
      const img = new Image();
      img.src = university.logo;
      img.onload = () => setLogoStatus(prev => ({ ...prev, [university.name]: true }));
      img.onerror = () => setLogoStatus(prev => ({ ...prev, [university.name]: false }));
    });
  }, []);

  // 确保自动轮播开始
  useEffect(() => {
    if (!api) return;
    
    // 设置自动滚动
    api.on('init', () => {
      console.log('Carousel initialized');
    });
    
    return () => {
      if (api) {
        api.off('init');
      }
    };
  }, [api]);

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
          setApi={setApi}
          className="w-full relative px-4 md:px-12"
        >
          <CarouselContent className="-ml-4">
            {universities.map((university, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card
                        className={cn(
                          "p-4 h-32 flex items-center justify-center",
                          "border border-gray-100 shadow-sm hover:shadow-md transition-all",
                          "bg-white"
                        )}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-16 w-full flex items-center justify-center">
                            <img 
                              src={university.logo} 
                              alt={`${university.name} logo`}
                              className={cn(
                                "max-h-12 w-auto max-w-full object-contain",
                                "transition-opacity duration-300",
                                logoStatus[university.name] ? "opacity-100" : "opacity-0"
                              )}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-800 text-center line-clamp-1">
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
