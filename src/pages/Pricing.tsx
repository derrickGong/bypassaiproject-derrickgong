
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Crown, Shield, Zap, Users, Star, Sparkles, HelpCircle } from "lucide-react";
import { WechatPayIcon } from "@/components/ui/icons";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "免费计划",
      subtitle: "Free Plan",
      price: "¥0",
      originalPrice: null,
      period: "每月300词",
      wordCount: "300",
      description: "核心AI降重功能体验",
      features: [
        "每月300词 (次月1日重置)",
        "基础AI降重功能体验（降AI率达80%）",
        "解决基础降AI率需求",
      ],
      cta: "免费开始",
      popular: false,
      icon: Shield,
      gradient: "from-slate-500 to-slate-600",
      bgGradient: "from-slate-50 to-white",
      pricePerWord: "免费",
    },
    {
      name: "应急包",
      subtitle: "PAYG",
      price: "¥60",
      originalPrice: null,
      period: "2,000词", 
      wordCount: "2,000",
      description: "永不过期，即买即用",
      features: [
        "2,000词处理量",
        "永不过期，即买即用",
        "单篇紧急论文降AI利器",
        "解决燃眉之急",
      ],
      cta: "选择应急包",
      popular: true,
      icon: Zap,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      pricePerWord: "¥30/千词",
    },
    {
      name: "学期包",
      subtitle: "PAYG", 
      price: "¥500",
      originalPrice: null,
      period: "20,000词",
      wordCount: "20,000",
      description: "永不过期，量大优惠",
      features: [
        "20,000词处理量",
        "永不过期，量大优惠",
        "满足学期多篇课程论文降重需求",
      ],
      cta: "选择学期包",
      popular: false,
      icon: Crown,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      pricePerWord: "¥25/千词",
    },
    {
      name: "毕业论文包",
      subtitle: "PAYG",
      price: "¥999",
      originalPrice: null,
      period: "50,000词",
      wordCount: "50,000",
      description: "永不过期，最高性价比",
      features: [
        "50,000词处理量",
        "永不过期，最高性价比",
        "单词成本低至2分钱",
        "快速解决毕业论文长篇报告需求",
      ],
      cta: "选择毕业论文包",
      popular: false,
      icon: Sparkles,
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
      pricePerWord: "~¥20/千词",
      isSubscription: false,
    },
  ];

  const monthlyPlans = [
    {
      name: "连续包月",
      subtitle: "即将上线",
      price: "即将上线",
      originalPrice: null,
      period: "敬请期待",
      wordCount: "TBD",
      description: "即将上线，敬请期待",
      features: [
        "即将上线，敬请期待",
        "更多功能正在开发中",
        "敬请期待我们的更新",
      ],
      cta: "敬请期待",
      popular: false,
      icon: Sparkles,
      gradient: "from-gray-400 to-gray-500",
      bgGradient: "from-gray-50 to-gray-100",
      pricePerWord: "敬请期待",
      isSubscription: true,
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border mb-8">
            <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-gray-600">智能绕过AI检测，让文本更人性化</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
            智能文本人性化处理
          </h1>
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
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 ${isAnnual ? 'lg:grid-cols-1' : 'lg:grid-cols-4'} gap-6`}>
            {(isAnnual ? monthlyPlans : plans).map((plan) => {
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
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${plan.name === "免费计划" ? "from-gray-400 to-gray-500" : plan.gradient} mb-4`}>
                        <IconComponent className={`h-8 w-8 ${plan.name === "免费计划" ? "text-gray-200" : "text-white"}`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                      
                      <div className="mt-6">
                        <div className="flex items-baseline justify-center whitespace-nowrap">
                          <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600 ml-1 text-sm">/{plan.period}</span>
                        </div>
                        
                        <div className="mt-2">
                          <span className="text-xs text-purple-600 font-medium">{plan.pricePerWord}</span>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-600">{plan.description}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8 min-h-[140px]">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                        (plan as any).comingSoon
                          ? 'bg-gray-400 text-white cursor-not-allowed'
                          : plan.popular || isUltimate
                          ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white`
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                      disabled={(plan as any).comingSoon}
                    >
                      {plan.cta}
                    </Button>
                    
                    {/* Additional Info */}
                    <p className="text-xs text-gray-500 text-center mt-3">
                      💳 一次性购买，立即生效
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">安全快捷的支付方式</h2>
          <p className="text-gray-600 mb-12">选择您喜欢的支付方式，享受无缝购买体验</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* WeChat Pay - Primary */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <WechatPayIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">微信支付</h3>
                <p className="text-sm text-gray-600 mb-4">推荐使用，支持所有微信用户</p>
                <div className="flex items-center justify-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-gray-700">最受欢迎</span>
                </div>
              </div>
            </div>
            
            {/* Alipay - Coming Soon */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 relative overflow-hidden group transition-all duration-300 opacity-60">
              <div className="relative">
                <img 
                  src="/lovable-uploads/fc950847-e533-4b60-a51c-79eaf05e696a.png" 
                  alt="Alipay Logo" 
                  className="h-16 w-16 mx-auto mb-4 opacity-60"
                />
                <h3 className="text-xl font-bold text-gray-500 mb-2">支付宝</h3>
                <p className="text-sm text-gray-500 mb-4">即将上线，敬请期待</p>
                <div className="flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">即将推出</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">常见问题</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-brand-500" />
                如何计算字数处理量？
              </h3>
              <p className="mt-3 text-gray-700">
                字数处理量是根据输入的原始文本字数计算的。例如，如果您输入了1000字的文本并使用我们的服务处理，那么将消耗1000字的处理量。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-brand-500" />
                如果当月没用完字数额度，是否可以累积到下月？
              </h3>
              <p className="mt-3 text-gray-700">
                不可以。每月的字数处理量会在下月初重置。如果您需要处理更多文本，可以随时升级到更高级的方案或购买额外的字数包。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-brand-500" />
                可以随时更换方案吗？
              </h3>
              <p className="mt-3 text-gray-700">
                是的，您可以随时升级、降级或取消您的订阅。升级时，我们会根据剩余天数按比例计算费用。降级或取消将在当前订阅期结束后生效。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-brand-500" />
                如何获取API密钥？
              </h3>
              <p className="mt-3 text-gray-700">
                专业版和团队版用户可以在账户设置中生成API密钥。生成后，您可以使用我们提供的文档和示例代码将智绕AI集成到您的应用程序中。
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">还有其他问题？</p>
            <Link to="/contact" className="text-brand-500 font-medium hover:text-brand-600 mt-2 inline-block">
              联系我们获取帮助
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">准备好开始使用了吗？</h2>
          <p className="text-lg text-gray-600 mb-8">
            选择适合您需求的方案，开始使用智绕AI绕过检测系统
          </p>
          <Button className="bg-brand-500 hover:bg-brand-600" size="lg">
            免费注册，立即开始
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
