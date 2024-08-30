import { useEffect } from 'react';
import { useSelector } from 'react-redux';

type ThemeKeys = 'theme1' | 'theme2' | 'theme3';

const themes: Record<ThemeKeys, Record<string, string>> = {
    theme1: {
        '--background-color': 'hsl(224, 36%, 15%)',
        '--text-color': 'hsl(0, 0%, 100%)',
        '--display-bg': 'hsl(223, 31%, 20%)',
        '--display-text-color': 'hsl(0, 0%, 93%)',
        '--keypad-bg': 'hsl(223, 31%, 20%)',
        '--button-bg': 'hsl(30, 25%, 89%)',
        '--button-text': 'hsl(221, 14%, 31%)',
        '--button-shadow': 'hsl(28, 16%, 65%)',
        '--button-active-bg': 'hsl(0, 0%, 100%)',
        '--bg-delres-key': 'hsl(225, 21%, 49%)',
        '--shadow-delres-key': 'hsl(224, 28%, 35%)',
        '--text-delres-key': 'hsl(0, 0%, 100%)',
        '--active-delres-key': 'hsl(225, 43%, 66%)',
        '--bg-equal-key': 'hsl(6, 63%, 50%)',
        '--shadow-equal-key': 'hsl(6, 70%, 34%)',
        '--text-equal-key': 'hsl(0, 0%, 100%)',
        '--bg-equal-active': 'hsl(6, 63%, 60%)',
        '--toggle-bg': 'hsl(0, 5%, 81%)',
        '--toggle-hover': 'hsl(290, 70%, 36%)',
      },
      theme2: {
        '--background-color': 'hsl(0, 0%, 90%)',
        '--text-color': 'hsl(60, 10%, 19%)',
        '--display-bg': 'hsl(0, 5%, 81%)',
        '--display-text-color': 'hsl(60, 10%, 19%)',
        '--keypad-bg': 'hsl(0, 5%, 81%)',
        '--button-bg': 'hsl(45, 7%, 89%)',
        '--button-text': 'hsl(60, 10%, 19%)',
        '--button-shadow': 'hsl(28, 16%, 65%)',
        '--button-active-bg': 'hsl(45, 7%, 99%)',
        '--bg-delres-key': 'hsl(185, 42%, 37%)',
        '--shadow-delres-key': 'hsl(185, 58%, 25%)',
        '--text-delres-key': 'hsl(0, 0%, 100%)',
        '--active-delres-key': 'hsl(185, 42%, 57%)',
        '--bg-equal-key': 'hsl(25, 98%, 40%)',
        '--shadow-equal-key': 'hsl(25, 98%, 27%)',
        '--text-equal-key': 'hsl(0, 0%, 100%)',
        '--bg-equal-active': 'hsl(25, 98%, 60%)',
        '--toggle-color': 'hsl(25, 98%, 40%)',
        '--toggle-bg': 'hsl(0, 5%, 81%)',
        '--toggle-hover': 'hsl(290, 70%, 36%)',
      },
      theme3: {
        '--background-color': 'hsl(268, 75%, 9%)',
        '--text-color': 'hsl(52, 100%, 62%)',
        '--display-bg': 'hsl(268, 71%, 12%)',
        '--display-text-color': 'hsl(52, 100%, 62%)',
        '--keypad-bg': 'hsl(268, 71%, 12%)',
        '--button-bg': 'hsl(268, 47%, 21%)',
        '--button-text': 'hsl(52, 100%, 62%)',
        '--button-shadow': 'hsl(290, 70%, 36%)',
        '--button-active-bg': 'hsl(281, 50%, 50%)',
        '--bg-delres-key': 'hsl(281, 89%, 26%)',
        '--shadow-delres-key': 'hsl(285, 91%, 52%)',
        '--text-delres-key': 'hsl(0, 0%, 100%)',
        '--active-delres-key': 'hsl(290, 70%, 36%)',
        '--bg-equal-key': 'hsl(176, 100%, 44%)',
        '--shadow-equal-key': 'hsl(177, 92%, 70%)',
        '--text-equal-key': 'hsl(268, 71%, 12%)',
        '--bg-equal-active': 'hsl(177, 92%, 70%)',
        '--toggle-color': 'hsl(176, 100%, 44%)',
        '--toggle-bg': 'hsl(268, 71%, 12%)',
        '--toggle-hover': 'hsl(176, 100%, 44%)',
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
  

