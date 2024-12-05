const Two = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
        d="M16.3819 36.5V32.532L24.7659 24.692C25.3632 24.1373 25.8005 23.6467 26.0779 23.22C26.3765 22.7933 26.5685 22.4093 26.6539 22.068C26.7605 21.7053 26.8139 21.3747 26.8139 21.076C26.8139 20.3507 26.5685 19.7853 26.0779 19.38C25.6085 18.9747 24.8939 18.772 23.9339 18.772C23.1232 18.772 22.3659 18.9533 21.6619 19.316C20.9579 19.6787 20.3819 20.2227 19.9339 20.948L15.2299 18.324C16.0619 16.916 17.2672 15.7853 18.8459 14.932C20.4245 14.0787 22.3125 13.652 24.5099 13.652C26.2379 13.652 27.7525 13.9293 29.0539 14.484C30.3552 15.0387 31.3685 15.828 32.0939 16.852C32.8405 17.876 33.2139 19.0813 33.2139 20.468C33.2139 21.1933 33.1179 21.9187 32.9259 22.644C32.7339 23.348 32.3605 24.1053 31.8059 24.916C31.2725 25.7053 30.4725 26.5907 29.4059 27.572L22.7499 33.716L21.6939 31.476H33.8219V36.5H16.3819Z"
        fill="white"
      />
    </svg>
  );
};

export default Two;