import Link from "next/link";
import React from "react";

interface LogoProps {
  text?: string;
  href?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  text = "PC.",
  href = "/",
  className = "",
}) => {
  return (
    <div>
      <Link
        href={href}
        className={`text-3xl  ${className}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Logo;