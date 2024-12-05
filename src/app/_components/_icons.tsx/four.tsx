const Four = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
        d="M14.6609 32.212V28.084L24.7089 14.1H31.2689L21.5089 28.084L18.5009 27.188H36.0049V32.212H14.6609ZM26.5009 36.5V32.212L26.6929 27.188V23.38H32.6769V36.5H26.5009Z"
        fill="white"
      />
    </svg>
  );
};

export default Four;
