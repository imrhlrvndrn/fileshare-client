export interface ITheme {
    breakpoints: {
        lg_tablet: string;
        tablet: string;
        mobile: string;
        sm_mobile: string;
    };
    colors: {
        lightestBackground: string;
        lightBackground: string;
        mediumBackground: string;
        darkBackground: string;
        text: string;
        icon: string;
        constants: {
            darkText: string;
            lightText: string;
        };
    };
    fonts: {
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '4xl': string;
            '6xl': string;
        };
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '4xl': string;
        '6xl': string;
    };
}

export type InitialState = {
    theme: ITheme;
    themeState: string;
    inverted: { theme: IThemeColors; state: string };
};

export type ThemeContextType = [
    state: InitialState,
    dispatch: (action: Action) => void
];

export interface IThemeColors {
    lightestBackground: string;
    lightBackground: string;
    mediumBackground: string;
    darkBackground: string;
    text: string;
    icon: string;
    constants: {
        darkText: string;
        lightText: string;
    };
}

export type Action = {
    type: 'TOGGLE_THEME';
    payload: { theme: string };
};
