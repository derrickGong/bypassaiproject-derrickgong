import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-perplexity-50 to-white">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-100"></div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
          用户评价
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          来自各大高校的学生分享他们使用智绕AI的真实体验
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative bg-white/70 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 ring-2 ring-brand-100/50 transition-transform duration-300 group-hover:scale-110">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-brand-100 to-brand-200">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role} · {testimonial.institution}</p>
                  </div>
                </div>
                
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      } transition-colors duration-300`}
                    />
                  ))}
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
