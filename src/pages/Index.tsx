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
    <div className="min-h-screen">
      <Navbar />

      {/* Main Container - GPTZero Style */}
      <div className="gptzero-container">
        
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-gray-900 mb-8 mx-auto max-w-4xl leading-none">
              智能绕过 AI 检测
            </h1>
            <p className="gptzero-subtitle text-gray-600 mx-auto mb-12">
              让您的内容顺利通过各类AI检测系统，包括Turnitin、GPTZero、ZeroGPT、Originality AI等专业检测工具
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link to="/dashboard">
                <Button size="lg" className="rounded-lg font-medium px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white">
                  立即开始使用
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="rounded-lg font-medium px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>

          {/* Demo Card */}
          <div className="gptzero-card p-8 mb-20">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">快速体验</h2>
            <p className="text-center text-gray-600 mb-8 gptzero-subtitle mx-auto">试试我们的AI绕过技术</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  输入AI生成的文本
                </label>
                <textarea 
                  className="gptzero-textarea w-full h-80 p-6 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700"
                  placeholder="在此输入您的AI生成内容..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    处理后的文本
                  </label>
                  <span className="text-sm text-green-600 font-medium">0% 检测概率</span>
                </div>
                <textarea 
                  className="gptzero-textarea w-full h-80 p-6 rounded-lg border border-gray-200 bg-gray-50 text-gray-700"
                  placeholder="处理后的文本将在这里显示" 
                  value={outputText}
                  readOnly
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                className="rounded-lg px-12 py-3 text-base font-medium bg-gray-900 hover:bg-gray-800 text-white"
                onClick={handleBypass}
                disabled={!inputText}
              >
                <Zap className="mr-2 h-5 w-5" />
                绕过AI检测
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="gptzero-card p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              为什么选择智绕 AI
            </h2>
            <p className="gptzero-subtitle text-gray-600 text-center mx-auto mb-12">
              我们提供业内领先的AI检测绕过技术，确保您的内容安全可靠
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* University Logos */}
        <section className="py-16">
          <div className="gptzero-card p-12">
            <UniversityLogoCarousel />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="gptzero-card">
            <Testimonials />
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-20">
          <div className="gptzero-card p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('home.tech.title')}</h2>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('home.tech.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('home.tech.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('home.tech.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('home.tech.feature4')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('home.tech.feature5')}</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link to="/features">
                    <Button className="bg-gray-900 hover:bg-gray-800 rounded-lg text-white">
                      {t('home.tech.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
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
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="gptzero-card p-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-8">
                <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
                <span className="text-sm font-medium text-gray-600">智能文本人性化处理方案</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                简单透明的价格方案
              </h2>
              <p className="gptzero-subtitle text-gray-600 mx-auto mb-8">
                专业的英文文本AI检测绕过服务，让AI生成的内容更加人性化和自然
              </p>
              
              {/* Pricing Type Toggle */}
              <div className="flex items-center justify-center mb-12">
                <div className="bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                      !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    按使用量付费
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                      isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
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
                    className={`relative bg-white rounded-lg border p-8 hover:shadow-lg transition-all duration-300 ${
                      plan.popular 
                        ? 'border-blue-200 shadow-md ring-1 ring-blue-500/20' 
                        : isUltimate
                        ? 'border-green-200 shadow-md ring-1 ring-green-500/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          ⚡ 最受欢迎
                        </div>
                      </div>
                    )}
                    
                    {isUltimate && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          🔥 最超值
                        </div>
                      </div>
                    )}
                    
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <div className="inline-flex p-3 rounded-lg bg-gray-100 mb-4">
                        <IconComponent className="h-6 w-6 text-gray-700" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                      <p className="text-sm text-gray-600 font-medium">{plan.subtitle}</p>
                      
                      <div className="mt-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600 ml-2">/{plan.period}</span>
                        </div>
                        
                        <div className="mt-3">
                          <span className="text-sm text-blue-600 font-medium">{plan.pricePerWord}</span>
                          {plan.savings && (
                            <div className="mt-1">
                              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                {plan.savings}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-600 text-sm">{plan.description}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link to="/pricing">
                      <Button 
                        className={`w-full py-2 rounded-lg font-medium transition-all duration-200 ${
                          plan.popular || isUltimate
                            ? 'bg-gray-900 hover:bg-gray-800 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
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
                );
              })}
            </div>

            {/* Payment Methods */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">安全快捷的支付方式</h3>
              <p className="text-gray-600 mb-8">选择您喜欢的支付方式，享受无缝购买体验</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                {/* WeChat Pay - Primary */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300">
                  <WechatPayIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">微信支付</h4>
                  <p className="text-sm text-gray-600 mb-3">推荐使用，支持所有微信用户</p>
                  <div className="flex items-center justify-center">
                    <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                      ⭐ 最受欢迎
                    </span>
                  </div>
                </div>
                
                {/* Alipay - Primary */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
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
              
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-2" />
                <span>SSL加密保护 • 支持7天无理由退款 • 24小时客服支持</span>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/pricing" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-lg">
                查看完整价格方案和更多功能
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 mb-20">
          <div className="gptzero-card p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">准备好开始了吗？</h2>
            <p className="gptzero-subtitle text-gray-600 mx-auto mb-8">立即注册并体验我们的AI绕过检测技术</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="rounded-lg font-medium px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white">
                  免费注册
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}

// Features data
const features = [
  {
    icon: <Check className="h-6 w-6 text-gray-600" />,
    title: "高通过率",
    description: "我们的技术可以有效绕过主流AI检测工具，确保您的内容顺利通过各种审核。"
  },
  {
    icon: <Check className="h-6 w-6 text-gray-600" />,
    title: "保留原意",
    description: "我们的处理算法会保持原文的语义和结构，同时降低AI检测概率。"
  },
  {
    icon: <Check className="h-6 w-6 text-gray-600" />,
    title: "多语言支持",
    description: "支持中英文等多种语言的AI内容处理，满足不同用户的需求。"
  },
  {
    icon: <Check className="h-6 w-6 text-gray-600" />,
    title: "快速处理",
    description: "强大的服务器确保您的内容能够在数秒内完成处理，节省宝贵时间。"
  },
  {
    icon: <Check className="h-6 w-6 text-gray-600" />,
    title: "API接入",
    description: "提供完整的API文档，便于开发者将我们的服务集成到自己的应用中。"
  },
  {
    icon: <Check className="h-6 w-6 text-gray-600" />,
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