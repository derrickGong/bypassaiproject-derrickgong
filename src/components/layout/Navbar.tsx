
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Upload, History, Gift, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { user, signOut } = useAuth();

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
    <nav className="bg-[#faf9f6]/70 backdrop-blur-md border-b border-gray-100 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-brand-500 font-bold text-xl font-display">{t('app.name')}</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-brand-500 px-3 py-2 rounded-full text-sm font-medium transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/features" className="text-gray-700 hover:text-brand-500 px-3 py-2 rounded-full text-sm font-medium transition-colors">
                {t('nav.features')}
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-brand-500 px-3 py-2 rounded-full text-sm font-medium transition-colors">
                {t('nav.pricing')}
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-brand-500 px-3 py-2 rounded-full text-sm font-medium flex items-center transition-colors">
                <Zap className="mr-1 h-4 w-4" />
                {t('nav.useTool')}
              </Link>
              <LanguageSwitcher />
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <Avatar className="h-8 w-8 border border-gray-200">
                    <AvatarFallback className="bg-brand-100 text-brand-500">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => signOut()} 
                    className="text-gray-700 hover:text-brand-500"
                  >
                    {t('nav.logout')}
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="ml-2">
                    <Button variant="outline" size="sm" className="rounded-full px-4">{t('nav.login')}</Button>
                  </Link>
                  <Link to="/register" className="ml-2">
                    <Button className="bg-brand-500 hover:bg-brand-600 rounded-full px-4" size="sm">{t('nav.register')}</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.home')}
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.features')}
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.pricing')}
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Zap className="mr-1 h-4 w-4" />
              {t('nav.useTool')}
            </Link>
            <Link to="/history" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <History className="mr-1 h-4 w-4" />
              {t('nav.history')}
            </Link>
            <Link to="/invite" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Gift className="mr-1 h-4 w-4" />
              {t('nav.invite')}
            </Link>
            
            {user ? (
              <Button 
                onClick={() => signOut()}
                className="w-full bg-brand-500 hover:bg-brand-600 rounded-full mt-2"
              >
                {t('nav.logout')}
              </Button>
            ) : (
              <>
                <Link to="/login" className="block w-full mt-2">
                  <Button variant="outline" className="w-full rounded-full">{t('nav.login')}</Button>
                </Link>
                <Link to="/register" className="block w-full mt-2">
                  <Button className="w-full bg-brand-500 hover:bg-brand-600 rounded-full">{t('nav.register')}</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
