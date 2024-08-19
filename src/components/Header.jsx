import React from "react";
import blackholeVideo from "../components/blackhole.webm";

function Header() {
  return (
    <div className="relative w-full rotate-180 h-80  overflow-hidden">
      <video autoPlay loop muted className="absolute top-1/2 w-full h-full object-cover">
        <source src={blackholeVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Header;
