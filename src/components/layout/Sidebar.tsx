
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, History, Gift, ChevronDown, ChevronUp, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Sidebar() {
  const location = useLocation();
  const [showOtherApps, setShowOtherApps] = React.useState(false);
  const { t } = useLanguage();
  const { user, signOut } = useAuth();
  
  // Calculate usage for the progress bar
  const wordsUsed = 2300;
  const wordsLimit = 5000;
  const usagePercentage = Math.min(100, Math.round((wordsUsed / wordsLimit) * 100));
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user) return '';
    const name = user.user_metadata?.full_name || '';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center p-5">
        <span className="text-brand-500 font-bold text-xl">{t('app.name')}</span>
      </div>

      {/* User Profile */}
      {user && (
        <div className="px-5 py-3 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback className="bg-brand-100 text-brand-500">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">
                {user.user_metadata?.full_name || '用户'}
              </span>
              <span className="text-xs text-gray-500 truncate max-w-[140px]">
                {user.email}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="flex-1">
        <nav className="px-3 py-2">
          <Link
            to="/dashboard"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-500",
              isActive("/dashboard") && "bg-blue-50 text-blue-500"
            )}
          >
            <FileText size={20} />
            <span>{t('dashboard.bypass')}</span>
          </Link>
          
          <Link
            to="/history"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-500",
              isActive("/history") && "bg-blue-50 text-blue-500"
            )}
          >
            <History size={20} />
            <span>{t('dashboard.history')}</span>
          </Link>
          
          <Link
            to="/invite"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-500",
              isActive("/invite") && "bg-blue-50 text-blue-500"
            )}
          >
            <Gift size={20} />
            <span>{t('dashboard.invite')}</span>
          </Link>
        </nav>
      </div>

      {/* Plan Info */}
      <div className="px-5 py-3 border-t border-gray-100">
        <div className="mb-1 flex justify-between">
          <span className="text-gray-700 font-medium">{t('dashboard.basic')}</span>
          <span className="text-gray-500 text-sm">{wordsUsed} / {wordsLimit} {t('dashboard.words')}</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-400" 
            style={{ width: `${usagePercentage}%` }}
          />
        </div>
        <Link to="/pricing">
          <Button className="w-full mt-3 flex items-center justify-center gap-1 bg-white border-blue-500 text-blue-500 hover:bg-blue-50" variant="outline">
            {t('dashboard.upgrade')} <span className="text-yellow-500">⚡</span>
          </Button>
        </Link>
      </div>

      {/* Language & Other Apps Toggle */}
      <div className="px-5 py-3 border-t border-gray-100">
        <div className="mb-3">
          <LanguageSwitcher />
        </div>
        <button 
          onClick={() => setShowOtherApps(!showOtherApps)}
          className="w-full flex items-center justify-between text-gray-700"
        >
          <span>{t('dashboard.otherApps')}</span>
          {showOtherApps ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {showOtherApps && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2 px-2 py-1 text-gray-700">
              <div className="w-6 h-6 bg-emerald-100 rounded-md flex items-center justify-center text-emerald-500">
                AI
              </div>
              <span>智绕 AI</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-gray-700">
              <div className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center text-green-500">
                W
              </div>
              <span>智绕 Writer</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-gray-700">
              <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center text-purple-500">
                E
              </div>
              <span>EssayGPT</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-gray-700">
              <div className="w-6 h-6 bg-orange-100 rounded-md flex items-center justify-center text-orange-500">
                A
              </div>
              <span>ArticleGPT</span>
            </div>
          </div>
        )}
      </div>

      {/* Logout */}
      {user && (
        <div className="px-5 py-3 border-t border-gray-100">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-700 hover:bg-red-50 hover:text-red-500"
            onClick={() => signOut()}
          >
            <LogOut size={18} className="mr-2" />
            {t('nav.logout')}
          </Button>
        </div>
      )}
    </div>
  );
}
