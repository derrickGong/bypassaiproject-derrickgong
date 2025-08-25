import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ArrowRight, Zap, CheckCircle, Terminal, Shield, Crown, Sparkles, Users, FileText, BarChart3, Target, Clock, Award, Globe } from "lucide-react";
import { UniversityLogoCarousel } from "@/components/UniversityLogoCarousel";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const { t } = useLanguage();
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isAnnual, setIsAnnual] = useState(false);
  
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

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-accent-gptzero" />,
      title: "AI检测绕过",
      description: "智能算法帮助您的内容顺利通过各类AI检测系统"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-gptzero" />,
      title: "内容保护",
      description: "保持原文意思不变，确保内容质量和可读性"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-gptzero" />,
      title: "多语言支持",
      description: "支持中文、英文等多种语言的内容处理"
    },
    {
      icon: <Users className="h-8 w-8 text-success-gptzero" />,
      title: "团队协作",
      description: "支持团队成员共享和协作处理文档"
    }
  ];

  const pricingPlans = [
    {
      name: "基础版",
      price: "12",
      period: "月",
      description: "适合个人用户",
      features: [
        "每月10,000字符处理",
        "基础AI检测绕过",
        "邮件支持",
        "5个文档保存"
      ],
      popular: false,
      buttonClass: "btn-secondary-gptzero",
      cta: "开始使用"
    },
    {
      name: "专业版",
      price: "29",
      period: "月",
      description: "适合专业用户",
      features: [
        "每月50,000字符处理",
        "高级AI检测绕过",
        "优先技术支持",
        "无限文档保存",
        "API访问",
        "批量处理"
      ],
      popular: true,
      buttonClass: "btn-primary-gptzero",
      cta: "立即选择"
    },
    {
      name: "企业版",
      price: "99",
      period: "月",
      description: "适合团队和企业",
      features: [
        "无限字符处理",
        "企业级AI检测绕过",
        "24/7专属支持",
        "团队管理功能",
        "自定义集成",
        "数据分析报告",
        "私有部署选项"
      ],
      popular: false,
      buttonClass: "btn-accent-gptzero",
      cta: "联系销售"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Primary Background */}
      <section className="bg-section-primary section-clean pt-32 pb-20">
        <div className="gptzero-container">
          <div className="text-center mb-16">
            <h1 className="gradient-text-primary mb-8 mx-auto max-w-4xl leading-none">
              <span className="text-primary-gptzero font-normal">智能绕过</span> <span className="gradient-text-multi">AI 检测</span>
            </h1>
            <p className="gptzero-subtitle text-secondary-gptzero mx-auto mb-12">
              让您的内容顺利通过各类AI检测系统，包括Turnitin、GPTZero、ZeroGPT、Originality AI等专业检测工具
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link to="/dashboard">
                <Button size="lg" className="btn-gradient-gptzero rounded-xl font-medium px-8 py-3">
                  立即开始使用
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="btn-secondary-gptzero rounded-xl font-medium px-8 py-3">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>

          {/* Demo Card */}
          <div className="frosted-card p-8 mb-20">
            <h2 className="text-2xl font-semibold gradient-text-green-blue text-center mb-4">快速体验</h2>
            <p className="text-center text-secondary-gptzero mb-8 gptzero-subtitle mx-auto">试试我们的AI绕过技术</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium gradient-text-subtle mb-3">
                  输入AI生成的文本
                </label>
                <textarea 
                  className="symmetric-textarea w-full"
                  placeholder="在此输入您的AI生成内容..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium gradient-text-multi">
                    处理后的文本
                  </label>
                  <span className="text-sm text-success-gptzero font-medium px-3 py-1 bg-green-50 rounded-lg">0% 检测概率</span>
                </div>
                <textarea 
                  className="symmetric-textarea w-full bg-green-50/50"
                  placeholder="处理后的文本将在这里显示" 
                  value={outputText}
                  readOnly
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                className="btn-gradient-gptzero px-12 py-3 text-base font-medium"
                onClick={handleBypass}
                disabled={!inputText}
              >
                <Zap className="mr-2 h-5 w-5" />
                绕过AI检测
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Secondary Background */}
      <section className="bg-section-secondary section-clean py-20">
        <div className="gptzero-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text-subtle mb-6">
              为什么选择我们
            </h2>
            <p className="gptzero-subtitle text-secondary-gptzero mx-auto mb-12">
              我们提供业内领先的AI检测绕过技术，确保您的内容安全可靠
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="frosted-card hover-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-gptzero">{feature.title}</h3>
                  <p className="text-secondary-gptzero leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University Partners - Accent Background */}
      <section className="bg-section-accent section-clean py-16">
        <div className="gptzero-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text-green-blue mb-4">受到全球顶尖学府信赖</h2>
            <p className="text-secondary-gptzero">来自世界知名大学的用户选择我们的服务</p>
          </div>
          <UniversityLogoCarousel />
        </div>
      </section>

      {/* How It Works - Primary Background */}
      <section className="bg-section-primary section-clean py-20">
        <div className="gptzero-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text-primary mb-6">工作原理</h2>
            <p className="text-secondary-gptzero text-lg max-w-2xl mx-auto">
              通过先进的自然语言processing技术，我们的系统能够智能优化您的内容
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "上传文本",
                description: "将您的原始内容粘贴到我们的处理器中",
                icon: <FileText className="h-8 w-8 text-blue-gptzero" />
              },
              {
                step: "02", 
                title: "智能分析",
                description: "AI系统分析文本结构并识别潜在检测点",
                icon: <BarChart3 className="h-8 w-8 text-purple-gptzero" />
              },
              {
                step: "03",
                title: "优化输出",
                description: "生成优化后的内容，保持原意的同时绕过检测",
                icon: <Target className="h-8 w-8 text-accent-gptzero" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="frosted-card p-8 hover-card">
                  <div className="text-6xl font-bold gradient-text-light-green mb-4">{item.step}</div>
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-gptzero mb-3">{item.title}</h3>
                  <p className="text-secondary-gptzero">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features - Secondary Background */}
      <section className="bg-section-secondary section-clean py-20">
        <div className="gptzero-container">
          <div className="frosted-card p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold gradient-text-multi mb-6">{t('home.tech.title')}</h2>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-success-gptzero mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-gptzero leading-relaxed">{t('home.tech.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-success-gptzero mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-gptzero leading-relaxed">{t('home.tech.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-success-gptzero mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-gptzero leading-relaxed">{t('home.tech.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-success-gptzero mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-gptzero leading-relaxed">{t('home.tech.feature4')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-success-gptzero mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-gptzero leading-relaxed">{t('home.tech.feature5')}</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link to="/features">
                    <Button className="btn-primary-gptzero text-white">
                      {t('home.tech.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl">
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
                
                <div className="flex items-center mt-4">
                  <Terminal className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-white">{t('home.tech.api')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Accent Background */}
      <section className="bg-section-accent section-clean py-16">
        <div className="gptzero-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text-multi mb-6">用户评价</h2>
            <p className="text-secondary-gptzero text-lg">看看我们的用户如何评价我们的服务</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Pricing Section - Primary Background */}
      <section className="bg-section-primary section-clean py-20">
        <div className="gptzero-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl mb-8">
              <Sparkles className="h-4 w-4 text-accent-gptzero mr-2" />
              <span className="text-sm font-medium text-secondary-gptzero">智能文本人性化处理方案</span>
            </div>
            
            <h2 className="text-4xl font-bold gradient-text-primary mb-6">
              简单透明的价格方案
            </h2>
            <p className="gptzero-subtitle text-secondary-gptzero mx-auto mb-8">
              专业的英文文本AI检测绕过服务，让AI生成的内容更加人性化和自然
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`frosted-card hover-card ${plan.popular ? 'ring-2 ring-accent-gptzero' : ''}`}>
                {plan.popular && (
                  <div className="text-center">
                    <Badge className="bg-accent-gptzero text-white px-6 py-1 rounded-full -mt-3">最受欢迎</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-primary-gptzero mb-2">{plan.name}</h3>
                    <p className="text-secondary-gptzero mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold gradient-text-green-blue">¥{plan.price}</span>
                      <span className="text-secondary-gptzero text-lg">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-success-gptzero mr-3 flex-shrink-0" />
                        <span className="text-secondary-gptzero">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.buttonClass} py-6`}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Secondary Background */}
      <section className="bg-section-secondary section-clean py-24">
        <div className="gptzero-container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100K+", label: "活跃用户", icon: <Users className="h-8 w-8 text-blue-gptzero" /> },
              { number: "500M+", label: "处理字符", icon: <FileText className="h-8 w-8 text-purple-gptzero" /> },
              { number: "99.9%", label: "成功率", icon: <Award className="h-8 w-8 text-success-gptzero" /> },
              { number: "24/7", label: "客户支持", icon: <Clock className="h-8 w-8 text-accent-gptzero" /> }
            ].map((stat, index) => (
              <div key={index} className="frosted-card p-8 hover-card">
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text-primary mb-2">{stat.number}</div>
                <div className="text-secondary-gptzero">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Accent Background */}
      <section className="bg-section-accent section-clean py-24">
        <div className="gptzero-container text-center">
          <div className="frosted-card p-12">
            <h2 className="text-4xl font-bold gradient-text-multi mb-6">准备开始使用了吗？</h2>
            <p className="text-secondary-gptzero text-lg mb-8 max-w-2xl mx-auto">
              立即体验我们的AI内容优化服务，让您的内容轻松通过各类检测系统
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient-gptzero px-8 py-6 text-lg">
                免费试用
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button className="btn-secondary-gptzero px-8 py-6 text-lg">
                了解更多
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}