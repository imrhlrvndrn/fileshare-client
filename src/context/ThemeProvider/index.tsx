import { createContext, ReactNode, useContext, useReducer } from 'react';
import { initialState, themeReducer } from './theme.reducer';
import { ThemeContextType } from './ThemeContext.types';

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({
    children,
}: {
    children: ReactNode;
}): JSX.Element => {
    // const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={useReducer(themeReducer, initialState)}>
            {children}
        </ThemeContext.Provider>
    );
};
