
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ArrowRight, Zap, CheckCircle, Terminal } from "lucide-react";
import { useState } from "react";
import { UniversityLogoCarousel } from "@/components/UniversityLogoCarousel";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Card, CardContent } from "@/components/ui/card";

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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Column (Reduced width) */}
          <div className="w-full lg:w-1/3 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-gray-900">
              <span className="bg-clip-text text-transparent bg-gradient-hero">智能绕过</span>
              <br />
              <span className="tracking-tight leading-tight">AI检测</span>
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              让您的内容顺利通过各类AI检测系统，包括Turnitin、GPTZero、ZeroGPT、Originality AI等
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
              <Link to="/dashboard">
                <Button size="lg" className="rounded-full font-medium px-8 bg-brand-500 hover:bg-brand-600 group text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                  <span>立即开始使用</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="rounded-full font-medium px-8 border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column (Increased width with larger demo box) */}
          <div className="w-full lg:w-2/3 lg:pl-16">
            <Card className="w-full bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-100 animate-float">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl mb-4 text-center text-gray-900">快速体验</h2>
                <p className="text-center text-gray-600 mb-8 text-lg">试试我们的AI绕过技术</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      输入AI生成的文本
                    </label>
                    <textarea 
                      className="w-full h-80 p-6 rounded-xl border border-gray-200 focus:ring-brand-500 focus:border-brand-500 text-gray-700 bg-white/70 shadow-inner text-base"
                      placeholder="输入AI生成的文本"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    ></textarea>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        处理后的文本
                      </label>
                      <span className="text-sm text-gray-500">0% 检测概率</span>
                    </div>
                    <textarea 
                      className="w-full h-80 p-6 rounded-xl border border-gray-200 bg-white/70 text-gray-700 shadow-inner text-base"
                      placeholder="处理后的文本" 
                      value={outputText}
                      readOnly
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    className="rounded-full px-12 py-6 text-lg font-medium bg-brand-500 hover:bg-brand-600 group text-white shadow-md hover:shadow-lg transition-all"
                    onClick={handleBypass}
                    disabled={!inputText}
                  >
                    <Zap className="mr-3 h-5 w-5" />
                    <span>绕过AI检测</span>
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6">
            为什么选择 <span className="text-brand-500">智绕 AI</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            我们提供业内领先的AI检测绕过技术，确保您的内容安全可靠
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University Logos */}
      <UniversityLogoCarousel />

      {/* Testimonials */}
      <Testimonials />

      {/* Advanced Features */}
      <section className="py-16 px-4 bg-perplexity-50 dot-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">{t('home.tech.title')}</h2>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{t('home.tech.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{t('home.tech.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{t('home.tech.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{t('home.tech.feature4')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{t('home.tech.feature5')}</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/features">
                  <Button className="bg-brand-500 hover:bg-brand-600 rounded-full text-white">
                    {t('home.tech.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="rounded-lg bg-gray-900 p-4 mb-5">
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

      {/* Pricing Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
              简单透明的价格方案
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              选择最适合您需求的方案，所有计划均提供核心功能
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`bg-white rounded-xl border ${
                  plan.popular ? 'border-brand-500 ring-2 ring-brand-500/20' : 'border-gray-200'
                } shadow-sm hover:shadow-md transition-all p-8 relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 translate-y-(-50%) left-0 right-0">
                    <span className="bg-brand-500 text-white text-xs font-medium px-3 py-1 rounded-full mx-auto block w-fit -mt-3">
                      最受欢迎
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">{plan.description}</p>
                </div>
                
                <div className="border-t border-gray-100 my-6 pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link to="/pricing">
                    <Button 
                      className={`w-full ${
                        plan.popular ? 'bg-brand-500 hover:bg-brand-600 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/pricing" className="text-brand-500 hover:text-brand-600 font-medium inline-flex items-center">
              查看完整价格方案
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
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
              <Button size="lg" variant="secondary" className="rounded-full font-medium px-8 text-brand-600 bg-white hover:bg-gray-100">
                免费注册
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

// Pricing data
const pricingPlans = [
  {
    name: "基础版",
    price: "￥19.9",
    period: "月",
    description: "适合个人偶尔使用",
    features: [
      "每月10,000字处理量",
      "基础绕过模式",
      "最高85%绕过成功率",
      "5个并发请求",
      "邮件支持",
    ],
    cta: "开始使用",
    popular: false,
  },
  {
    name: "专业版",
    price: "￥49.9",
    period: "月",
    description: "适合频繁使用的个人用户",
    features: [
      "每月50,000字处理量",
      "高级绕过模式",
      "最高95%绕过成功率",
      "20个并发请求",
      "优先邮件支持",
      "API访问",
      "批量处理"
    ],
    cta: "选择专业版",
    popular: true,
  },
  {
    name: "团队版",
    price: "￥149.9",
    period: "月",
    description: "适合小型团���使用",
    features: [
      "每月200,000字处理量",
      "顶级绕过模式",
      "最高99%绕过成功率",
      "无限并发请求",
      "专属客服支持",
      "高级API功能",
      "自定义绕过策略",
      "团队成员管理",
    ],
    cta: "联系销售",
    popular: false,
  },
];
