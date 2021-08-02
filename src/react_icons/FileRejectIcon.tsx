export const FileRejectIcon = ({ size = 26, color = 'currentColor' }) => {
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
            <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h5v-1H4a1 1 0 01-1-1V3a1 1 0 011-1h5v2.5A1.5 1.5 0 0010.5 6H13v2h1V6L9 1z"></path>
            <path
                fillRule="evenodd"
                d="M11 11.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};
