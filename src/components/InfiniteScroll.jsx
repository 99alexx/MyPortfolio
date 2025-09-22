import { useState, useEffect } from "react";

function InfiniteScroll() {
  const logos = [
    {
      name: "Github",
      alt: "Github logo",
      src: "src/assets/infiniteScroll/github-mark-white.png",
    },
    {
      name: "CloudFlare",
      alt: "CloudFlare logo",
      src: "src/assets/infiniteScroll/cloudflare.png",
    },
    { name: "CSS", alt: "CSS logo", src: "src/assets/infiniteScroll/css.png" },
    {
      name: "HTML",
      alt: "HTML logo",
      src: "src/assets/infiniteScroll/html.png",
    },
    {
      name: "Java",
      alt: "Java logo",
      src: "src/assets/infiniteScroll/java.png",
    },
    {
      name: "JavaScript",
      alt: "JavaScript logo",
      src: "src/assets/infiniteScroll/js.png",
    },
    {
      name: "Linux",
      alt: "Linux logo",
      src: "src/assets/infiniteScroll/linux.png",
    },
    {
      name: "Node.js",
      alt: "Node.js logo",
      src: "src/assets/infiniteScroll/node.png",
    },
    {
      name: "React",
      alt: "React logo",
      src: "src/assets/infiniteScroll/react.png",
    },
    {
      name: "Tailwindcss",
      alt: "Tailwindcss logo",
      src: "src/assets/infiniteScroll/tailwindcss.png",
    },
    {
      name: "Vite",
      alt: "Vite logo",
      src: "src/assets/infiniteScroll/vite.png",
    },
    {
      name: "Photoshop",
      alt: "Photoshop logo",
      src: "src/assets/infiniteScroll/ps.png",
    },
    {
      name: "Android",
      alt: "Android logo",
      src: "src/assets/infiniteScroll/android.png",
    },
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
