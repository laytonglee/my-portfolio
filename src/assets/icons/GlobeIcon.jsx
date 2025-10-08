export const GlobeIcon = ({ className, ...props }) => (
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
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M16 4v0a2 2 0 0 1-2 2h-.5A1.5 1.5 0 0 0 12 7.5V8a1 1 0 0 1-1 1v0a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2h1m-8 4v-2.5c0-.828-.685-1.5-1.513-1.5v0C8.673 17 8 16.34 8 15.526v0c0-.34-.118-.67-.333-.933L3.5 9.5"></path>
    </g>
  </svg>
);
