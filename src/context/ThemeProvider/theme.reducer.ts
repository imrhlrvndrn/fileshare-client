import { initialTheme, lightTheme, darkTheme } from '../../constants';
import { Action, InitialState } from './ThemeContext.types';

export const initialState: InitialState = {
    theme: initialTheme,
    themeState: 'dark',
    inverted: { theme: lightTheme, state: 'light' },
};

export const themeReducer = (
    state: InitialState,
    action: Action
): InitialState => {
    console.log('Theme action => ', action);
    switch (action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                theme: { ...state.theme, colors: state.inverted.theme },
                themeState: state.themeState === 'dark' ? 'light' : 'dark',
                inverted: {
                    theme: state.themeState === 'dark' ? darkTheme : lightTheme,
                    state: state.themeState === 'dark' ? 'light' : 'dark',
                },
            };
        }

        default: {
            return state;
        }
    }
};
