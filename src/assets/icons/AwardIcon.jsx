export const AwardIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="#4299e1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="7"></circle>
      <path d="M8.21 13.89L7 23l5-3l5 3l-1.21-9.12"></path>
    </g>
  </svg>
);
