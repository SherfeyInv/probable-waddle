import * as React from "react";
import { SVGProps } from "react";

const SupabaseWithText = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={125}
        height={24}
        fill="none"
        {...props}
    >
        <path
            className="text-[#1F1F1F] dark:text-white"
            fill="currentColor"
            d="M31.969 14.27c.128 1.2 1.221 3.26 4.393 3.26 2.764 0 4.093-1.76 4.093-3.475 0-1.544-1.05-2.81-3.129-3.239l-1.5-.321c-.578-.107-.964-.43-.964-.944 0-.6.6-1.05 1.35-1.05 1.2 0 1.65.793 1.736 1.415l2.378-.536c-.128-1.137-1.136-3.046-4.136-3.046-2.271 0-3.942 1.566-3.942 3.453 0 1.48.92 2.702 2.957 3.153l1.393.321c.814.172 1.135.558 1.135 1.03 0 .557-.45 1.05-1.393 1.05-1.242 0-1.864-.771-1.928-1.608l-2.443.536ZM49.563 17.207h2.722a17.35 17.35 0 0 1-.107-1.908V6.656h-2.85v6.133c0 1.223-.73 2.08-1.993 2.08-1.329 0-1.93-.943-1.93-2.123v-6.09h-2.85v6.67c0 2.294 1.458 4.16 4.008 4.16 1.114 0 2.336-.429 2.915-1.415 0 .429.042.922.085 1.136ZM58.069 21.282v-5.104c.514.708 1.586 1.287 3.043 1.287 2.979 0 4.971-2.36 4.971-5.555 0-3.131-1.778-5.49-4.864-5.49-1.585 0-2.764.708-3.236 1.523V6.656H55.22v14.626h2.85Zm5.207-9.35c0 1.887-1.157 2.98-2.614 2.98-1.457 0-2.636-1.115-2.636-2.98 0-1.866 1.179-2.96 2.636-2.96s2.614 1.094 2.614 2.96ZM67.697 14.334c0 1.65 1.371 3.174 3.622 3.174 1.564 0 2.571-.73 3.107-1.566 0 .407.043.986.107 1.265h2.614a11.812 11.812 0 0 1-.128-1.672v-5.19c0-2.124-1.243-4.01-4.586-4.01-2.829 0-4.35 1.822-4.522 3.473l2.529.537c.086-.923.772-1.716 2.014-1.716 1.2 0 1.779.622 1.779 1.372 0 .365-.193.665-.793.751l-2.593.386c-1.757.257-3.15 1.308-3.15 3.196Zm4.221 1.05c-.92 0-1.371-.6-1.371-1.222 0-.815.579-1.223 1.307-1.33l2.379-.364v.472c0 1.865-1.114 2.444-2.315 2.444ZM82.656 17.207v-1.286c.557.9 1.672 1.544 3.129 1.544 3 0 4.972-2.38 4.972-5.576 0-3.131-1.779-5.512-4.865-5.512-1.564 0-2.721.686-3.193 1.437V1.68h-2.807v15.527h2.764Zm5.25-5.297c0 1.93-1.157 3.003-2.614 3.003-1.436 0-2.636-1.094-2.636-3.003 0-1.93 1.2-2.98 2.636-2.98 1.457 0 2.614 1.05 2.614 2.98ZM92.37 14.334c0 1.65 1.371 3.174 3.622 3.174 1.564 0 2.571-.73 3.107-1.566 0 .407.043.986.107 1.265h2.614a11.877 11.877 0 0 1-.128-1.672v-5.19c0-2.124-1.243-4.01-4.586-4.01-2.829 0-4.35 1.822-4.521 3.473l2.528.537c.086-.923.772-1.716 2.014-1.716 1.2 0 1.779.622 1.779 1.372 0 .365-.193.665-.793.751l-2.593.386c-1.757.257-3.15 1.308-3.15 3.196Zm4.222 1.05c-.922 0-1.372-.6-1.372-1.222 0-.815.579-1.223 1.307-1.33l2.379-.364v.472c0 1.865-1.114 2.444-2.314 2.444ZM103.665 14.27c.128 1.2 1.221 3.26 4.392 3.26 2.765 0 4.093-1.76 4.093-3.475 0-1.544-1.05-2.81-3.128-3.239l-1.5-.321c-.579-.107-.964-.43-.964-.944 0-.6.599-1.05 1.349-1.05 1.201 0 1.651.793 1.737 1.415l2.378-.536c-.129-1.137-1.136-3.046-4.136-3.046-2.272 0-3.943 1.566-3.943 3.453 0 1.48.921 2.702 2.957 3.153l1.393.321c.815.172 1.136.558 1.136 1.03 0 .557-.45 1.05-1.393 1.05-1.243 0-1.864-.771-1.928-1.608l-2.443.536ZM116.48 10.73c.064-.964.878-2.08 2.357-2.08 1.628 0 2.314 1.03 2.357 2.08h-4.714Zm4.993 2.746c-.343.943-1.072 1.608-2.4 1.608-1.415 0-2.593-1.008-2.657-2.402h7.543c0-.043.042-.472.042-.879 0-3.389-1.95-5.469-5.207-5.469-2.7 0-5.186 2.188-5.186 5.555 0 3.56 2.55 5.64 5.443 5.64 2.593 0 4.265-1.523 4.8-3.345l-2.378-.708Z"
        />
        <path
            fill="url(#supabase-with-text-a)"
            d="M13.66 23.601c-.613.772-1.857.35-1.872-.637l-.216-14.42h9.7c1.757 0 2.737 2.03 1.644 3.404L13.66 23.602Z"
        />
        <path
            fill="url(#supabase-with-text-b)"
            fillOpacity={0.2}
            d="M13.66 23.601c-.613.772-1.857.35-1.872-.637l-.216-14.42h9.7c1.757 0 2.737 2.03 1.644 3.404L13.66 23.602Z"
        />
        <path
            fill="#3ECF8E"
            d="M9.715.399c.614-.772 1.857-.35 1.872.637l.095 14.42H2.103c-1.756 0-2.736-2.03-1.644-3.404L9.715.399Z"
        />
        <defs>
            <linearGradient
                id="supabase-with-text-a"
                x1={11.572}
                x2={20.192}
                y1={11.742}
                y2={15.358}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#249361" />
                <stop offset={1} stopColor="#3ECF8E" />
            </linearGradient>
            <linearGradient
                id="supabase-with-text-b"
                x1={7.75}
                x2={11.68}
                y1={6.511}
                y2={13.91}
                gradientUnits="userSpaceOnUse"
            >
                <stop />
                <stop offset={1} stopOpacity={0} />
            </linearGradient>
        </defs>
    </svg>
);

export default SupabaseWithText;
