
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage} 
      className="rounded-full hover:bg-gray-100 group flex items-center gap-1"
      aria-label={t('language.switch')}
    >
      <Globe className="h-4 w-4 text-gray-600 group-hover:text-brand-500" />
      <span className="font-medium">{language === 'en' ? '中文' : 'EN'}</span>
    </Button>
  );
}
