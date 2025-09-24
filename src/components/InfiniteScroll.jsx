import githubLogo from "../assets/infiniteScroll/github-mark-white.png";
import cloudflareLogo from "../assets/infiniteScroll/cloudflare.png";
import cssLogo from "../assets/infiniteScroll/css.png";
import htmlLogo from "../assets/infiniteScroll/html.png";
import javaLogo from "../assets/infiniteScroll/java.png";
import jsLogo from "../assets/infiniteScroll/js.png";
import linuxLogo from "../assets/infiniteScroll/linux.png";
import nodeLogo from "../assets/infiniteScroll/node.png";
import reactLogo from "../assets/infiniteScroll/react.png";
import tailwindLogo from "../assets/infiniteScroll/tailwindcss.png";
import viteLogo from "../assets/infiniteScroll/vite.png";
import photoshopLogo from "../assets/infiniteScroll/ps.png";
import androidLogo from "../assets/infiniteScroll/android.png";

import { useState, useEffect } from "react";

function InfiniteScroll() {
  const logos = [
    { name: "Github", alt: "Github logo", src: githubLogo },
    { name: "CloudFlare", alt: "CloudFlare logo", src: cloudflareLogo },
    { name: "CSS", alt: "CSS logo", src: cssLogo },
    { name: "HTML", alt: "HTML logo", src: htmlLogo },
    { name: "Java", alt: "Java logo", src: javaLogo },
    { name: "JavaScript", alt: "JavaScript logo", src: jsLogo },
    { name: "Linux", alt: "Linux logo", src: linuxLogo },
    { name: "Node.js", alt: "Node.js logo", src: nodeLogo },
    { name: "React", alt: "React logo", src: reactLogo },
    { name: "Tailwindcss", alt: "Tailwindcss logo", src: tailwindLogo },
    { name: "Vite", alt: "Vite logo", src: viteLogo },
    { name: "Photoshop", alt: "Photoshop logo", src: photoshopLogo },
    { name: "Android", alt: "Android logo", src: androidLogo },
  ];

  {
    /**Code taken from https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/ */
  }
  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {logos.map((logo, index) => (
          <li key={index}>
            <img className="w-6 h-6" src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <img className="w-6 h-6" src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>

      <style>{`
    @keyframes infinite-scroll {
        0% {
        transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-infinite-scroll {
    animation: infinite-scroll 25s linear infinite;
  }
`}</style>
    </div>
  );
}
export default InfiniteScroll;
