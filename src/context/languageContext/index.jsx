import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const getBrowserLanguage = () => {
        const browserLang = navigator.language || 'en';
        const languageCode = browserLang.split('-')[0];

        switch (languageCode) {
            case 'en':
                return 'english';
            case 'es':
                return 'spanish';
            case 'it':
                return 'italian';
            default:
                return 'english'; 
        }
    };

    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || getBrowserLanguage();
    });

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang); // Guarda el idioma seleccionado
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);