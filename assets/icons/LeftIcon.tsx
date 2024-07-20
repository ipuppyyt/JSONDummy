import React from 'react';

interface LeftIconProps {
    color?: string;
    width?: string | number;
    height?: string | number;
}

const LeftIcon: React.FC<LeftIconProps> = ({
    color = '#000000',
    width = '800px',
    height = '800px',
}) => {
    return (
        <svg
            fill={color}
            width={width}
            height={height}
            viewBox="-4.5 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Page-1" stroke="none" strokeWidth="5" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -6679.000000)" fill={color}>
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" id="arrow_left-[#334]" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default LeftIcon;
