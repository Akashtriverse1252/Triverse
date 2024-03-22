import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const LogoTriverse = () => {
  const svgRef = React.useRef(null);

  React.useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");

      const timeline = new gsap.timeline();
      paths.forEach((path, index) => {
        const pathLength = path.getTotalLength();

        timeline
          .from(path, {
            strokeDashoffset: pathLength,
            ease: "none",
            duration: 2.3,
          })
          .to(path, {
            strokeDashoffset: 0,
            fill: "black",
            stroke: "none",
            ease: "none",
            duration: 0.3,
          })
          .to(
            path,
            {
              fill: "white",
              ease: "none",
              duration: 1,
            },
            "-=0.3"
          );

        if (index === paths.length - 1) {
          timeline.to(svgRef.current, {
            autoAlpha: 0,
            duration: 0.8,
            delay: 3.8,
            ease: "power3.out",
          });
        }
      });

      gsap.utils.toArray(paths).forEach((path) => {
        ScrollTrigger.create({
          trigger: path,
          start: "top top",
          end: "bottom top",
          markers: false,
          toggleActions: "play none none reverse",
          onEnter: () => {
            timeline.restart();
          },
        });
      });
    }
  }, []);

  return (
    <>
      <div style={{ height: "calc(100vh - 100px)" }}></div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em 0",
        }}
      >
        <h1 style={{ color: "#333", fontSize: "3rem" }}>GSAP Animated Logo</h1>
      </div>
      <div style={{ height: "calc(100vh - 100px)" }}></div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "1em 0",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="224.834mm"
          height="64.865mm"
          viewBox="0 0 22483.4 6486.5"
          ref={svgRef}
        >
          <style>
            {`
              .fill-transparent {
                fill: none;
                stroke: white;
                stroke-width: 1;
                stroke-linecap: round;
                opacity: 1;
              }
            `}
          </style>
          <defs>
            <linearGradient
              x1="45.61%"
              y1="112.53%"
              x2="-21.44%"
              y2="-109.96%"
              id="gradient"
            >
              <stop
                style={{ stopColor: "#8047f8", offset: 0 }}
                stop-opacity="1"
              />
              <stop
                style={{ stopColor: "#4b7bec", offset: 1 }}
                stop-opacity="1"
              />
            </linearGradient>
          </defs>
          <g id="Layer_x0020_1">
            <path
              d="M20830.45 4776.6c-589.82 0-501.31-1023.73-69.8-1023.73l116.35 0c457.99 0 512.54 1023.73-46.55 1023.73zM3407.23 4450.85c0 716.67 231.91 1408.11 814.99 1744.36l414.15 0c504.41-321.63 1246.03-716.17 1850.67-856.46 274.35-79.99 565.48-134.98 814.12-243.05z"
              className="fill-transparent"
            />
          </g>
        </svg>
      </div>
      <div style={{ height: "calc(100vh - 100px)" }}></div>
    </>
  );
};
export default LogoTriverse;
