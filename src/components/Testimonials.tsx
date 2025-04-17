
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
    name: "王浩然",
    initials: "王",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    role: "博士研究生",
    institution: "清华大学",
    text: "智绕AI帮我节省了大量时间。在准备学术论文时，我可以通过AI快速生成初稿，然后使用智绕AI处理，确保不会被检测出AI痕迹。教授们对我的写作风格一致性非常认可，这在很大程度上归功于这款工具。",
    rating: 5
  },
  {
    name: "李明芳",
    initials: "李",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    role: "副教授",
    institution: "复旦大学",
    text: "作为教育工作者，我发现智绕AI是一个双刃剑。在了解AI检测系统工作原理后，我可以更好地指导学生如何正确使用AI辅助工具，而不是简单地禁止使用。它帮助我们适应人工智能时代的教育变革。",
    rating: 4
  },
  {
    name: "张文博",
    initials: "张",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    role: "内容创作总监",
    institution: "字节跳动",
    text: "我们团队每天都要创作大量营销内容，智绕AI不仅帮我们有效地规避了AI检测，还提高了整体工作效率。系统稳定可靠，API接口设计非常友好，让我们能轻松集成到现有工作流程中。强烈推荐！",
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
          来自各行各业的用户分享他们使用智绕AI的真实体验
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
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
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-500">验证用户</span>
                  <div className="text-brand-500 text-sm font-medium group-hover:underline cursor-pointer">查看完整评价</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
