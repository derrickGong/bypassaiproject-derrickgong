
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useState, useEffect } from "react";
import { WechatIcon } from "@/components/ui/icons";
import { useAuth } from "@/contexts/AuthContext";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要6个字符"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // If user is already logged in, redirect to dashboard
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      await signIn(values.email, values.password);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="mb-8">
          <span className="text-brand-500 font-bold text-2xl">智绕 AI</span>
        </Link>
        
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
              登录账号
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700 mb-1">
                        邮箱地址
                      </FormLabel>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <FormControl>
                          <Input
                            placeholder="your@email.com"
                            className="block w-full pl-10 pr-3 py-2"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700 mb-1">
                        密码
                      </FormLabel>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="block w-full pl-10 pr-10 py-2"
                            {...field}
                          />
                        </FormControl>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-brand-500 focus:ring-brand-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      记住我
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link to="/forgot-password" className="text-brand-500 hover:text-brand-600 font-medium">
                      忘记密码?
                    </Link>
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full bg-brand-500 hover:bg-brand-600">
                    登录
                  </Button>
                </div>
              </form>
            </Form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    或使用其他方式登录
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <WechatIcon className="h-5 w-5 text-wechat mr-2" />
                  微信登录
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              还没有账号?{" "}
              <Link to="/register" className="text-brand-500 hover:text-brand-600 font-medium">
                立即注册
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 border-t border-gray-200 py-4 text-center">
        <p className="text-xs text-gray-500">
          &copy; 2025 智绕 AI. 保留所有权利 | 
          <Link to="/privacy" className="ml-1 text-brand-500 hover:text-brand-600">
            隐私政策
          </Link> | 
          <Link to="/terms" className="ml-1 text-brand-500 hover:text-brand-600">
            服务条款
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
