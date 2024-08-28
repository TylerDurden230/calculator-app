import { useEffect } from 'react';
import { useSelector } from 'react-redux';

type ThemeKeys = 'theme1' | 'theme2' | 'theme3';

const themes: Record<ThemeKeys, Record<string, string>> = {
    theme1: {
        '--background-color': 'hsl(224, 36%, 15%)',
        '--text-color': 'hsl(0, 0%, 100%)',
        '--button-bg': 'hsl(6, 63%, 50%)',
        '--desaturated-dark-blue-key': 'hsl(225, 21%, 49%)',
        '--dark-blue-shadow': 'hsl(224, 28%, 35%)',
        '--active-delres-key': 'hsl(225, 64%, 77%)',
      },
      theme2: {
        '--background-color': 'hsl(0, 0%, 90%)',
        '--text-color': 'hsl(60, 10%, 19%)',
        '--button-bg': 'hsl(25, 98%, 40%)',
        '--desaturated-dark-blue-key': 'hsl(185, 42%, 37%)',
        '--dark-blue-shadow': 'hsl(185, 58%, 25%)',
        '--active-delres-key': 'hsl(25, 99%, 27%)',
      },
      theme3: {
        '--background-color': 'hsl(268, 75%, 9%)',
        '--text-color': 'hsl(52, 100%, 62%)',
        '--button-bg': 'hsl(285, 91%, 52%)',
        '--desaturated-dark-blue-key': 'hsl(281, 89%, 26%)',
        '--dark-blue-shadow': 'hsl(285, 91%, 52%)',
        '--active-delres-key': 'hsl(290, 70%, 36%)',
      }    
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const selectedTheme = useSelector((state: { theme: { selectedTheme: ThemeKeys } }) => state.theme.selectedTheme);
  
    useEffect(() => {
      const themeVariables = themes[selectedTheme];
      if (themeVariables) {
        Object.keys(themeVariables).forEach((key) => {
          document.documentElement.style.setProperty(key, themeVariables[key]);
        });
      }
    }, [selectedTheme]);
  
    return <>{children}</>;
  };
  
  export default ThemeProvider;
  

