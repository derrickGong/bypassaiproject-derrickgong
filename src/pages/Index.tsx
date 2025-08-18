
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ArrowRight, Zap, CheckCircle, Terminal, Shield, Crown, Sparkles } from "lucide-react";
import { useState } from "react";
import { UniversityLogoCarousel } from "@/components/UniversityLogoCarousel";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { WechatPayIcon } from "@/components/ui/icons";

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

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border mb-8">
              <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
              <span className="text-sm font-medium text-gray-600">智能文本人性化处理方案</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
              简单透明的价格方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              专业的英文文本AI检测绕过服务，让AI生成的内容更加人性化和自然
            </p>
            
            {/* Pricing Type Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    !isAnnual ? 'bg-purple-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  按使用量付费
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    isAnnual ? 'bg-green-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  连续包月 
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    更省钱
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          <div className={`grid grid-cols-1 ${isAnnual ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 mb-16`}>
            {(isAnnual ? newPricingPlans : newPricingPlans.slice(0, 3)).map((plan) => {
              const IconComponent = plan.icon;
              const isUltimate = plan.name === "Ultimate";
              
              return (
                <div 
                  key={plan.name}
                  className={`relative bg-gradient-to-br ${plan.bgGradient} rounded-3xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-purple-200 shadow-lg ring-1 ring-purple-500/20 transform scale-105' 
                      : isUltimate
                      ? 'border-green-200 shadow-lg ring-1 ring-green-500/20'
                      : 'border-gray-200 shadow-md hover:border-gray-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`bg-gradient-to-r ${plan.gradient} text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg`}>
                        ⚡ 最受欢迎
                      </div>
                    </div>
                  )}
                  
                  {isUltimate && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`bg-gradient-to-r ${plan.gradient} text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg`}>
                        🔥 最超值
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                      <p className="text-sm text-gray-600 font-medium">{plan.subtitle}</p>
                      
                      <div className="mt-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600 ml-2">/{plan.period}</span>
                        </div>
                        
                        <div className="mt-3">
                          <span className="text-sm text-purple-600 font-medium">{plan.pricePerWord}</span>
                          {plan.savings && (
                            <div className="mt-1">
                              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                {plan.savings}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-600">{plan.description}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link to="/pricing">
                      <Button 
                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                          plan.popular || isUltimate
                            ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white`
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                    
                    {/* Additional Info */}
                    <p className="text-xs text-gray-500 text-center mt-3">
                      {isUltimate ? "🔄 自动续费，随时可取消" : "💳 一次性购买，立即生效"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Payment Methods */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">安全快捷的支付方式</h3>
            <p className="text-gray-600 mb-8">选择您喜欢的支付方式，享受无缝购买体验</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              {/* WeChat Pay - Primary */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <WechatPayIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">微信支付</h4>
                  <p className="text-sm text-gray-600 mb-3">推荐使用，支持所有微信用户</p>
                  <div className="flex items-center justify-center">
                    <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                      ⭐ 最受欢迎
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Alipay - Primary */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <svg className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="#1677FF">
                    <path d="M21.422 13.253c.067-.067 0-.067 0-.067C19.43 10.197 16.107 8 12.45 8 7.126 8 2.675 12.186 2.675 17.33c0 2.59 1.342 4.92 3.467 6.642.067.067.134.067.201.067.067 0 .134-.067.134-.134l.738-2.388c0-.067 0-.134-.067-.201-.067-.067-.134-.067-.201-.067-.87.134-1.744.268-2.613.268-1.006 0-1.677-.335-1.677-1.274 0-.134 0-.268.067-.469C3.011 16.324 7.26 13.32 12.45 13.32c3.4 0 6.485 1.408 8.3 3.595.134.134.335.134.47.067.134-.67.201-.268.201-.402v-3.327Z" />
                    <path d="M7.866 19.383c0 .469.335.804.805.804.469 0 .804-.335.804-.804a.804.804 0 0 0-.804-.804c-.47 0-.805.335-.805.804Z" />
                  </svg>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">支付宝</h4>
                  <p className="text-sm text-gray-600 mb-3">安全便捷，支持花呗分期</p>
                  <div className="flex items-center justify-center">
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      🛡️ 安全保障
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Shield className="h-4 w-4 mr-2" />
              <span>SSL加密保护 • 支持7天无理由退款 • 24小时客服支持</span>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/pricing" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center text-lg">
              查看完整价格方案和更多功能
              <ArrowRight className="ml-2 h-5 w-5" />
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

// New Pricing data based on user requirements
const newPricingPlans = [
  {
    name: "Essential",
    subtitle: "基础版",
    price: "¥25",
    originalPrice: null,
    period: "1,000词",
    wordCount: "1,000",
    description: "快速检查和基础编辑的完美选择",
    features: [
      "标准AI检测绕过技术",
      "基础文本人性化处理",
      "邮件客服支持",
      "适合学生和轻度使用者",
    ],
    cta: "选择基础版",
    popular: false,
    icon: Shield,
    gradient: "from-slate-500 to-slate-600",
    bgGradient: "from-slate-50 to-white",
    pricePerWord: "¥0.025/词",
  },
  {
    name: "Pro",
    subtitle: "专业版",
    price: "¥90",
    originalPrice: null,
    period: "4,500词", 
    wordCount: "4,500",
    description: "学生和专业人士的理想选择",
    features: [
      "高级AI检测绕过算法",
      "语调和风格深度调整",
      "优先邮件支持", 
      "适合论文和报告写作",
      "批量文本处理功能",
    ],
    cta: "选择专业版",
    popular: true,
    icon: Zap,
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
    pricePerWord: "¥0.02/词",
    savings: "相比基础版节省20%",
  },
  {
    name: "Premium",
    subtitle: "高级版", 
    price: "¥180",
    originalPrice: null,
    period: "10,000词",
    wordCount: "10,000",
    description: "大量文本处理的最佳选择",
    features: [
      "顶级AI检测绕过技术",
      "智能语义重构",
      "抄袭检测器集成",
      "专属客服支持",
      "自定义处理策略",
    ],
    cta: "选择高级版",
    popular: false,
    icon: Crown,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    pricePerWord: "¥0.018/词",
    savings: "相比基础版节省28%",
  },
  {
    name: "Ultimate",
    subtitle: "连续包月版",
    price: "¥200",
    originalPrice: null,
    period: "15,000词/月",
    wordCount: "15,000",
    description: "专业内容创作者和团队的终极选择",
    features: [
      "隐形模式 - 最先进的AI绕过技术",
      "无限次数修改和优化",
      "团队协作功能（最多5用户）",
      "24/7专属技术支持",
      "高级API和批量处理",
      "自动续费，无需担心额度不足",
    ],
    cta: "开启连续包月",
    popular: false,
    icon: Sparkles,
    gradient: "from-green-500 to-blue-600",
    bgGradient: "from-green-50 to-blue-50",
    pricePerWord: "¥0.013/词",
    savings: "相比基础版节省48%",
    isSubscription: true,
  },
];
