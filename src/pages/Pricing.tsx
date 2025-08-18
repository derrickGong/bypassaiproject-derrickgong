
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
      name: "Essential",
      subtitle: "基础版",
      price: "¥25",
      originalPrice: null,
      period: "月",
      wordCount: "1,000",
      description: "快速检查和基础编辑的完美选择",
      features: [
        "标准AI检测绕过",
        "基础文本优化",
        "邮件客服支持",
        "适合学生和偶尔使用",
      ],
      cta: "选择基础版",
      popular: false,
      icon: Shield,
      gradient: "from-slate-500 to-slate-600",
      bgGradient: "from-slate-50 to-white",
    },
    {
      name: "Pro",
      subtitle: "专业版",
      price: "¥90",
      originalPrice: null,
      period: "月", 
      wordCount: "4,500",
      description: "学生和专业人士的理想选择",
      features: [
        "高级AI检测绕过算法",
        "语调和风格调整",
        "优先邮件支持", 
        "适合论文和报告写作",
        "批量文本处理",
      ],
      cta: "选择专业版",
      popular: true,
      icon: Zap,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      name: "Ultimate",
      subtitle: "旗舰版", 
      price: "¥200",
      originalPrice: isAnnual ? "¥240" : null,
      period: "月",
      wordCount: "15,000",
      description: "大规模生产的最佳选择",
      features: [
        "隐形模式 - 最先进的AI绕过技术",
        "抄袭检测器集成",
        "团队访问权限（最多3用户）",
        "专属客服支持",
        "自定义处理策略",
        "API接口访问",
      ],
      cta: "选择旗舰版",
      popular: false,
      icon: Crown,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
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
            解锁您的全部潜能
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            用AI的力量写作，用人性化的细致入微完善。轻松实现真实性并绕过AI检测。
          </p>
          
          {/* Monthly/Annual Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-sm font-medium mr-3 ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>按月付费</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ml-3 ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>按年付费</span>
            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              节省2个月
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              const finalPrice = isAnnual && plan.name === "Ultimate" 
                ? "¥200" 
                : plan.price;
              const savings = isAnnual && plan.name === "Ultimate" ? "原价¥240" : plan.originalPrice;
              
              return (
                <div 
                  key={plan.name}
                  className={`relative bg-gradient-to-br ${plan.bgGradient} rounded-3xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-purple-200 shadow-lg ring-1 ring-purple-500/20 transform scale-105' 
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
                          <span className="text-5xl font-bold text-gray-900">{finalPrice}</span>
                          <span className="text-gray-600 ml-2">/{plan.period}</span>
                        </div>
                        {savings && (
                          <div className="mt-1">
                            <span className="text-sm text-gray-500 line-through">{savings}</span>
                          </div>
                        )}
                        <div className="mt-2">
                          <span className="text-2xl font-bold text-purple-600">{plan.wordCount}</span>
                          <span className="text-gray-600 ml-1">字/月</span>
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
                    <Button 
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white`
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                    
                    {/* Word count refresh info */}
                    <p className="text-xs text-gray-500 text-center mt-3">
                      📅 您的字数额度每月自动刷新
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
            
            {/* Alipay - Primary */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <svg className="h-16 w-16 mx-auto mb-4" viewBox="0 0 24 24" fill="#1677FF">
                  <path d="M21.422 13.253c.067-.067 0-.067 0-.067C19.43 10.197 16.107 8 12.45 8 7.126 8 2.675 12.186 2.675 17.33c0 2.59 1.342 4.92 3.467 6.642.067.067.134.067.201.067.067 0 .134-.067.134-.134l.738-2.388c0-.067 0-.134-.067-.201-.067-.067-.134-.067-.201-.067-.87.134-1.744.268-2.613.268-1.006 0-1.677-.335-1.677-1.274 0-.134 0-.268.067-.469C3.011 16.324 7.26 13.32 12.45 13.32c3.4 0 6.485 1.408 8.3 3.595.134.134.335.134.47.067.134-.67.201-.268.201-.402v-3.327Z" />
                  <path d="M7.866 19.383c0 .469.335.804.805.804.469 0 .804-.335.804-.804a.804.804 0 0 0-.804-.804c-.47 0-.805.335-.805.804Z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">支付宝</h3>
                <p className="text-sm text-gray-600 mb-4">安全便捷，支持花呗分期</p>
                <div className="flex items-center justify-center">
                  <Shield className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm font-medium text-gray-700">安全保障</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
            <Shield className="h-4 w-4 mr-2" />
            <span>SSL加密保护 • 支持7天无理由退款 • 24小时客服支持</span>
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
