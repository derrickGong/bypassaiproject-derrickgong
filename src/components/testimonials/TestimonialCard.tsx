
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { TestimonialType } from "./types";

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="relative bg-white/70 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group">
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
  );
}
