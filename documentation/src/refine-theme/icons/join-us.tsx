import React from "react";

export const JoinUsIcon = (
    props: React.SVGProps<SVGSVGElement> & { isDark?: boolean },
) => {
    return (
        <svg
            width="192"
            height="240"
            viewBox="0 0 192 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle
                cx="96"
                cy="144"
                r="96"
                fill={props.isDark ? "#303450" : "#DEE5ED"}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M86.0375 0C89.993 0.000141682 93.5693 0.414287 95.9995 0.883849C98.4297 0.414287 102.006 0.000141682 105.962 0C105.963 0 105.964 0 105.966 0C112.73 0.000242305 120.602 1.21148 125.747 5.42682C131.646 10.2594 136.835 16.1805 141.013 20.9481L141.013 20.9482C144.067 24.4329 146.58 27.3014 148.437 28.6784C143.899 28.1113 143.048 28.9147 143.19 29.3873C146.451 33.9241 152.747 44.5858 151.84 50.9374C151.722 51.7623 151.615 52.5321 151.515 53.2534C150.648 59.4753 150.284 62.0955 147.869 65.3988C148.129 65.3988 148.412 65.3757 148.708 65.3515L148.708 65.3515C151.154 65.152 154.462 64.8822 152.691 77.0245C152.691 77.8447 152.692 78.605 152.692 79.3108C152.698 85.8031 152.7 87.6925 152.094 89.3614C151.846 90.0463 151.495 90.6942 151 91.6078L150.989 91.6276C149.514 94.3497 146.215 99.0945 144.75 101.127C143.899 107.554 141.204 122.053 137.234 128.632C133.263 135.21 129.056 141.108 127.449 143.235C128.678 149.804 138.595 165.692 168.431 176.694C174.22 178.829 179.326 180.833 183.825 182.823C168.915 216.503 135.202 240 95.9995 240C56.7975 240 23.0836 216.503 8.17381 182.823C12.6735 180.833 17.779 178.829 23.5677 176.694C53.4039 165.692 63.3209 149.804 64.5499 143.235C62.9427 141.108 58.7358 135.21 54.7652 128.632C50.7946 122.053 48.1003 107.554 47.2495 101.127C45.7841 99.0945 42.4848 94.3497 41.01 91.6276L40.9994 91.6081C40.5043 90.6943 40.1533 90.0464 39.9047 89.3614C39.2989 87.6924 39.3007 85.803 39.3068 79.3106C39.3075 78.6048 39.3082 77.8447 39.3082 77.0245C37.5371 64.8822 40.8447 65.152 43.2907 65.3515L43.2909 65.3515C43.5866 65.3757 43.8697 65.3988 44.1297 65.3988C41.7153 62.0955 41.3506 59.4754 40.4845 53.2535C40.3841 52.5321 40.277 51.7623 40.1591 50.9374C39.2515 44.5858 45.5477 33.9241 48.8093 29.3873C48.9511 28.9147 48.1003 28.1113 43.5625 28.6784C45.4187 27.3014 47.9324 24.4329 50.9861 20.9482C55.1641 16.1806 60.3528 10.2595 66.2515 5.42682C71.3967 1.21148 79.2691 0.000242305 86.0335 0C86.0348 0 86.0362 0 86.0375 0Z"
                fill="#474E6B"
            />
        </svg>
    );
};
