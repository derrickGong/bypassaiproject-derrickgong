
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import enTranslations from '@/translations/en';
import zhTranslations from '@/translations/zh';

// Define a union type of all possible translation keys
type TranslationKey = keyof typeof zhTranslations;
type Language = 'zh' | 'en';
type TranslationsType = typeof zhTranslations;

interface LanguageContextType {
  language: Language;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Load saved language preference from localStorage if available
const getSavedLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'zh') ? savedLanguage : 'zh';
  }
  return 'zh';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getSavedLanguage);
  const [mounted, setMounted] = useState(false);
  
  const translations = language === 'zh' ? zhTranslations : enTranslations;

  // Only run this effect client-side
  useEffect(() => {
    setMounted(true);
    const savedLang = getSavedLanguage();
    setLanguage(savedLang);
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage(prevLang => {
      const newLang = prevLang === 'zh' ? 'en' : 'zh';
      console.log(`Language switched from ${prevLang} to ${newLang}`);
      return newLang;
    });
  };

  const t = (key: TranslationKey): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
