import { FunctionComponent } from 'react';
import { IIconProps } from 'src/lib/types';

export const DownloadIcon: FunctionComponent<IIconProps> = ({
    size = 26,
    color = 'currentColor',
}) => {
    return (
        <svg
            stroke={color}
            fill={color}
            strokeWidth="0"
            viewBox="0 0 16 16"
            height={size}
            width={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8z"
                clipRule="evenodd"
            ></path>
            <path
                fillRule="evenodd"
                d="M5 7.5a.5.5 0 01.707 0L8 9.793 10.293 7.5a.5.5 0 11.707.707l-2.646 2.647a.5.5 0 01-.708 0L5 8.207A.5.5 0 015 7.5z"
                clipRule="evenodd"
            ></path>
            <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};
