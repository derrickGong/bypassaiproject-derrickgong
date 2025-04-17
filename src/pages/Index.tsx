
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ArrowRight, Zap, CheckCircle, Terminal } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const { t } = useLanguage();
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  
  const handleBypass = () => {
    // This would be connected to a real backend in production
    // Mock response for demonstration
    setOutputText(
      inputText
        .split("")
        .map((char, i) => (i % 10 === 0 ? char + "\u200B" : char))
        .join("")
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-perplexity-50 to-white dot-pattern">
      <Navbar />

      {/* Hero Section with reduced width */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left Column (Reduced width) */}
          <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-hero">智能绕过</span>
              <br />AI检测
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
              让您的内容顺利通过各类AI检测系统，包括Turnitin、GPTZero、ZeroGPT、Originality AI等
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start pt-4">
              <Link to="/dashboard">
                <Button size="lg" className="rounded-full font-medium px-8 bg-brand-500 hover:bg-brand-600 group">
                  <span>立即开始使用</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="rounded-full font-medium px-8">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column (Highlighted) */}
          <div className="mt-16 lg:mt-0 w-full lg:w-3/5 lg:pl-16 flex justify-center">
            <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-gray-100 animate-float">
              <h2 className="font-display text-2xl mb-6 text-center text-gray-900">快速体验</h2>
              <p className="text-center text-gray-600 mb-6">试试我们的AI绕过技术</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    输入AI生成的文本
                  </label>
                  <textarea 
                    className="w-full h-64 p-3 rounded-xl border border-gray-200 focus:ring-brand-500 focus:border-brand-500 text-gray-700 bg-white/70"
                    placeholder="输入AI生成的文本"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  ></textarea>
                </div>
                
                <div className="relative">
                  <div className="flex justify-between mb-1">
                    <label className="block text-sm font-medium text-gray-700">
                      处理后的文本
                    </label>
                    <span className="text-sm text-gray-500">0% 检测概率</span>
                  </div>
                  <textarea 
                    className="w-full h-64 p-3 rounded-xl border border-gray-200 bg-white/70 text-gray-700"
                    placeholder="处理后的文本" 
                    value={outputText}
                    readOnly
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 font-medium bg-brand-500 hover:bg-brand-600 group"
                  onClick={handleBypass}
                  disabled={!inputText}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  <span>绕过AI检测</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            为什么选择 <span className="text-brand-500">智绕 AI</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 px-4 bg-perplexity-50 dot-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">{t('home.tech.title')}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature4')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature5')}</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/features">
                  <Button className="bg-brand-500 hover:bg-brand-600 rounded-full">
                    {t('home.tech.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="rounded-lg bg-gray-800 p-4 mb-5">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-3 text-xs text-gray-400">{t('home.tech.api')}</div>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto font-mono">
                  <code>{`# Python ${t('home.tech.api')}
import requests

url = "https://api.zhirao.ai/v1/bypass"
headers = {
  "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json"
}

data = {
  "text": "这是AI生成的文本...",
  "intensity": 0.7,
  "preserve_format": True
}

response = requests.post(url, headers=headers, json=data)
result = response.json()

print(result["bypassed_text"])`}</code>
                </pre>
              </div>
              
              <div className="flex items-center">
                <Terminal className="h-5 w-5 text-brand-500 mr-2" />
                <span className="text-sm font-medium">{t('home.tech.api')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            用户评价
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-perplexity-50 p-6 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 font-medium">
                    {testimonial.initials}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
                <div className="mt-4 flex">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-perplexity-50">
        <div className="max-w-4xl mx-auto bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-xl text-white text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-white/90 text-lg mb-8">立即注册并体验我们的AI绕过检测技术</p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="rounded-full font-medium px-8 text-brand-600">
                免费注册
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="rounded-full font-medium px-8 border-white text-white hover:bg-white/10">
                查看价格方案
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Features data
const features = [
  {
    icon: <Check className="h-6 w-6 text-brand-600" />,
    title: "高通过率",
    description: "我们的技术可以有效绕过主流AI检测工具，确保您的内容顺利通过各种审核。"
  },
  {
    icon: <Check className="h-6 w-6 text-brand-600" />,
    title: "保留原意",
    description: "我们的处理算法会保持原文的语义和结构，同时降低AI检测概率。"
  },
  {
    icon: <Check className="h-6 w-6 text-brand-600" />,
    title: "多语言支持",
    description: "支持中英文等多种语言的AI内容处理，满足不同用户的需求。"
  },
  {
    icon: <Check className="h-6 w-6 text-brand-600" />,
    title: "快速处理",
    description: "强大的服务器确保您的内容能够在数秒内完成处理，节省宝贵时间。"
  },
  {
    icon: <Check className="h-6 w-6 text-brand-600" />,
    title: "API接入",
    description: "提供完整的API文档，便于开发者将我们的服务集成到自己的应用中。"
  },
  {
    icon: <Check className="h-6 w-6 text-brand-600" />,
    title: "数据安全",
    description: "所有上传的内容均经过加密处理，确保用户数据的隐私与安全。"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "王同学",
    initials: "王",
    role: "大学生",
    text: "这个工具帮我解决了很多问题，现在我可以放心地使用AI辅助写作，不用担心被检测出来。",
    rating: 5
  },
  {
    name: "李教授",
    initials: "李",
    role: "大学教授",
    text: "作为一名教育工作者，我发现这个工具在学术写作中非常有用，可以帮助学生避免不必要的麻烦。",
    rating: 4
  },
  {
    name: "张女士",
    initials: "张",
    role: "内容创作者",
    text: "我每天都要创作大量内容，智绕AI帮我有效地规避了AI检测，提高了工作效率。强烈推荐！",
    rating: 5
  }
];
