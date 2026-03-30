import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import type { PublicSiteLanguage } from '../content/publicSiteContent';

const PUBLIC_SITE_LANGUAGE_STORAGE_KEY = 'dealtech-ui-public-site-language';

interface PublicSiteLanguageContextValue {
  language: PublicSiteLanguage;
  setLanguage: Dispatch<SetStateAction<PublicSiteLanguage>>;
}

const PublicSiteLanguageContext = createContext<PublicSiteLanguageContextValue | null>(null);

const getInitialLanguage = (): PublicSiteLanguage => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  return window.localStorage.getItem(PUBLIC_SITE_LANGUAGE_STORAGE_KEY) === 'id'
    ? 'id'
    : 'en';
};

export const PublicSiteLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<PublicSiteLanguage>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(PUBLIC_SITE_LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return (
    <PublicSiteLanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </PublicSiteLanguageContext.Provider>
  );
};

export const usePublicSiteLanguage = () => {
  const context = useContext(PublicSiteLanguageContext);

  if (!context) {
    throw new Error('usePublicSiteLanguage must be used within PublicSiteLanguageProvider');
  }

  return context;
};
