const One = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="50" height="50" rx="25" fill="currentColor" />
      <path
        d="M22.8676 36.5V16.372L25.5876 18.996H18.7076V14.1H29.2036V36.5H22.8676Z"
        fill="white"
      />
    </svg>
  );
};

export default One;
