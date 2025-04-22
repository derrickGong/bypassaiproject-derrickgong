
import React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "./testimonialData";

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
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
