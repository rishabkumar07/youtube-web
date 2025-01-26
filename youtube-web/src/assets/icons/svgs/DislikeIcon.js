const DislikeIcon = ({ fillColor = "#fff", strokeColor = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      style={{ transform: "scaleX(-1)", transformOrigin: "center" }}
    >
      <path
        d="M1 3h4v12H1V3zm22 11.67c0 1.1-.9 2-2 2h-6.31l.95 4.57.03.33c0 .41-.17.79-.44 1.06L14.17 23 7.58 16.41C7.21 16.05 7 15.55 7 15V5c0-1.1.9-2 2-2h7c.78 0 1.48.45 1.83 1.11l3.58 6.49c.09.23.14.48.14.74v1.33z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1"
      />
    </svg>
  );
};

export default DislikeIcon;