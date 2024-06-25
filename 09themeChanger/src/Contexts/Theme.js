import {useContext, createContext} from 'react';

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme : ()=>{},
    lightTheme:()=>{}
})

// this is the wrapper of context
export const ThemeProvider = ThemeContext.Provider;

// this is the hook!
export default function useTheme(){
    return useContext(ThemeContext);
}
