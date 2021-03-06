import { FunctionComponent } from 'react';
import { IIconProps } from 'src/lib/types';

export const CopyIcon: FunctionComponent<IIconProps> = ({
    size = 26,
    color = 'currentColor',
}) => {
    return (
        <svg
            stroke={color}
            fill={color}
            strokeWidth="0"
            viewBox="0 0 24 24"
            height={size}
            width={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20,2H10C8.897,2,8,2.897,8,4v4H4c-1.103,0-2,0.897-2,2v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-4h4 c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M4,20V10h10l0.002,10H4z M20,14h-4v-4c0-1.103-0.897-2-2-2h-4V4h10V14z"></path>
        </svg>
    );
};
