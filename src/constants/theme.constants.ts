import { ITheme } from '../context/ThemeProvider/ThemeContext.types';

export const lightTheme = {
    lightestBackground: '250,250,250', // lighest grey
    lightBackground: '246, 246, 246', // light grey
    mediumBackground: '237, 237, 237', // medium grey
    darkBackground: '145, 145, 145', // dark grey
    text: '4,4,4', // dark blue
    icon: '145, 145, 145',
    constants: {
        darkText: '4,4,4', //dark blue
        lightText: '238,238,238', //light grey
    },
};

export const darkTheme = {
    lightestBackground: '79,79,103', // lightest blue
    lightBackground: '65,65,84', // light blue
    mediumBackground: '36,36,47',
    darkBackground: '4,4,4', //dark blue
    text: '240,240,240', // light grey
    icon: '145, 145, 145',
    constants: {
        darkText: '4,4,4',
        lightText: '238,238,238',
    },
};

export const initialTheme: ITheme = {
    breakpoints: {
        lg_tablet: 'screen and (max-width: 1024px)',
        tablet: 'screen and (max-width: 770px)',
        mobile: 'screen and (max-width: 510px)',
        sm_mobile: 'screen and (max-width: 350px)',
    },
    colors: {
        lightestBackground: '79,79,103', // lightest blue
        lightBackground: '65,65,84', // light blue
        mediumBackground: '36,36,47',
        darkBackground: '4,4,4', //dark blue
        text: '240,240,240', // light grey
        icon: '145, 145, 145',
        constants: {
            darkText: '4,4,4',
            lightText: '238,238,238',
        },
    },
    fonts: {
        size: {
            xs: '0.5rem',
            sm: '0.8rem',
            md: '1rem',
            lg: '1.2rem',
            xl: '1.7rem',
            '2xl': '2rem',
            '4xl': '4rem',
            '6xl': '6rem',
        },
    },
    spacing: {
        xs: '0.5rem',
        sm: '0.8rem',
        md: '1rem',
        lg: '1.2rem',
        xl: '1.7rem',
        '2xl': '2rem',
        '4xl': '4rem',
        '6xl': '6rem',
    },
};
