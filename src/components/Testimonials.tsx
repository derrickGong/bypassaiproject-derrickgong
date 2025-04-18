
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  initials: string;
  avatar: string;
  role: string;
  institution: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Siyu Cheung",
    initials: "SC",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    role: "博士研究生",
    institution: "Harvard University",
    text: "智绕AI极大地帮助了我的学术写作。作为一名国际学生，在准备论文和研究报告时，我可以先用母语思考，然后借助AI生成英文初稿。通过智绕AI的处理，确保内容既专业又原创，完全不用担心被检测出AI痕迹。",
    rating: 5
  },
  {
    name: "Yuting Li",
    initials: "YL",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    role: "硕士生",
    institution: "Stanford University",
    text: "作为理工科学生，我经常需要撰写大量的实验报告和研究论文。智绕AI不仅帮我节省了大量时间，还确保了我的内容能够顺利通过学校严格的原创性检测。这个工具真的改变了我的学习方式。",
    rating: 5
  },
  {
    name: "Jason Wang",
    initials: "JW",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    role: "本科生",
    institution: "Tsinghua University",
    text: "在准备申请材料和学术论文时，智绕AI给了我很大帮助。它不仅能保持文章的专业性和原创性，还能确保文章顺利通过各种检测系统。对于我们这些需要用英文写作的学生来说，这真是一个非常实用的工具。",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          用户评价
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          来自各大高校的学生分享他们使用智绕AI的真实体验
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 border-2 border-white ring-2 ring-gray-100">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role} · {testimonial.institution}</p>
                  </div>
                </div>
                
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
