import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Crown, Shield, Zap, X, Sparkles } from "lucide-react";
import { WechatPayIcon } from "@/components/ui/icons";

interface PaywallModalProps {
  open: boolean;
  onClose: () => void;
  wordsUsed?: number;
  totalWords?: number;
}

const PaywallModal = ({ open, onClose, wordsUsed = 500, totalWords = 500 }: PaywallModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState("Pro");
  const [showPayment, setShowPayment] = useState(false);

  const plans = [
    {
      name: "Essential",
      subtitle: "基础版",
      price: "¥25",
      wordCount: "1,000",
      description: "快速检查和基础编辑",
      features: ["标准AI检测绕过", "基础文本优化", "邮件客服支持"],
      icon: Shield,
      gradient: "from-slate-500 to-slate-600",
      pricePerWord: "¥0.025/词",
    },
    {
      name: "Pro", 
      subtitle: "专业版",
      price: "¥90",
      wordCount: "4,500",
      description: "学生和专业人士的理想选择",
      features: ["高级AI检测绕过算法", "语调和风格调整", "优先邮件支持", "批量文本处理"],
      icon: Zap,
      gradient: "from-blue-500 to-purple-600",
      popular: true,
      pricePerWord: "¥0.02/词",
      savings: "节省20%",
    },
    {
      name: "Ultimate",
      subtitle: "连续包月版",
      price: "¥200", 
      wordCount: "15,000",
      description: "专业内容创作者的终极选择",
      features: ["隐形模式技术", "无限次修改", "团队协作功能", "24/7专属支持"],
      icon: Crown,
      gradient: "from-green-500 to-blue-600",
      pricePerWord: "¥0.013/词",
      savings: "节省48%",
      isSubscription: true,
    },
  ];

  const selectedPlanData = plans.find(plan => plan.name === selectedPlan);

  const handleUpgrade = () => {
    setShowPayment(true);
  };

  const handlePaymentMethod = (method: string) => {
    console.log(`Processing payment with ${method} for ${selectedPlan} plan`);
    // Here you would integrate with actual payment processing
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-gradient-to-br from-gray-50 to-white">
        {!showPayment ? (
          // Plan Selection
          <div className="p-8">
            <DialogHeader className="text-center mb-8">
              <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                解锁您的全部潜能
              </DialogTitle>
              <p className="text-gray-600 mt-4 text-lg">
                您已使用了 <span className="font-semibold text-purple-600">{wordsUsed}</span> / {totalWords} 字的免费额度
              </p>
              <p className="text-gray-500 mt-2">
                选择合适的方案，继续享受专业的英文文本AI检测绕过服务
              </p>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {plans.map((plan) => {
                const IconComponent = plan.icon;
                const isSelected = selectedPlan === plan.name;
                
                return (
                  <div
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`relative cursor-pointer transition-all duration-200 p-6 rounded-2xl border-2 ${
                      isSelected
                        ? 'border-purple-500 ring-2 ring-purple-500/20 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    } ${plan.popular ? 'bg-gradient-to-br from-blue-50 to-purple-50' : plan.isSubscription ? 'bg-gradient-to-br from-green-50 to-blue-50' : 'bg-white'}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className={`bg-gradient-to-r ${plan.gradient} text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg`}>
                          ⚡ 推荐
                        </div>
                      </div>
                    )}

                    {plan.isSubscription && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className={`bg-gradient-to-r ${plan.gradient} text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg`}>
                          🔥 超值
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                      
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1">/{plan.wordCount}词</span>
                      </div>

                      <div className="mb-4">
                        <span className="text-sm text-purple-600 font-medium">{plan.pricePerWord}</span>
                        {plan.savings && (
                          <div className="mt-1">
                            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                              {plan.savings}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-left">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleUpgrade}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-xl"
              >
                立即升级 {selectedPlanData?.subtitle} - {selectedPlanData?.price}
              </Button>
              <Button
                variant="ghost"
                onClick={onClose}
                className="px-6 text-gray-500 hover:text-gray-700"
              >
                稍后再说
              </Button>
            </div>
          </div>
        ) : (
          // Payment Method Selection
          <div className="p-8">
            <DialogHeader className="text-center mb-8">
              <DialogTitle className="text-2xl font-bold text-gray-900">
                选择支付方式
              </DialogTitle>
              <p className="text-gray-600 mt-2">
                {selectedPlanData?.subtitle} - {selectedPlanData?.price}/{selectedPlanData?.wordCount}词
                {selectedPlanData?.isSubscription && <span className="text-green-600 ml-2">• 自动续费</span>}
              </p>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              {/* WeChat Pay */}
              <button
                onClick={() => handlePaymentMethod('wechat')}
                className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-200 group"
              >
                <WechatPayIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">微信支付</h3>
                <p className="text-sm text-gray-600">扫码支付，安全便捷</p>
              </button>

              {/* Alipay */}
              <button
                onClick={() => handlePaymentMethod('alipay')}
                className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-200 group"
              >
                <svg className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="#1677FF">
                  <path d="M21.422 13.253c.067-.067 0-.067 0-.067C19.43 10.197 16.107 8 12.45 8 7.126 8 2.675 12.186 2.675 17.33c0 2.59 1.342 4.92 3.467 6.642.067.067.134.067.201.067.067 0 .134-.067.134-.134l.738-2.388c0-.067 0-.134-.067-.201-.067-.067-.134-.067-.201-.067-.87.134-1.744.268-2.613.268-1.006 0-1.677-.335-1.677-1.274 0-.134 0-.268.067-.469C3.011 16.324 7.26 13.32 12.45 13.32c3.4 0 6.485 1.408 8.3 3.595.134.134.335.134.47.067.134-.67.201-.268.201-.402v-3.327Z" />
                  <path d="M7.866 19.383c0 .469.335.804.805.804.469 0 .804-.335.804-.804a.804.804 0 0 0-.804-.804c-.47 0-.805.335-.805.804Z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">支付宝</h3>
                <p className="text-sm text-gray-600">支持花呗分期付款</p>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowPayment(false)}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                ← 返回选择方案
              </button>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500 flex items-center justify-center">
              <Shield className="h-4 w-4 mr-2" />
              <span>SSL加密保护 • 支持7天无理由退款</span>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaywallModal;