"use client";
import { useEffect, useRef, useState } from "react";
import LogoTriverse from "../../image/SVG/LogoTriverse";
import Cookies from "js-cookie";
import "./index.css";

const Loader = () => {
  const mainLoaderRef = useRef(null);
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    const showLoader = Cookies.get("loaderHidden");

    if (!showLoader) {
      setIsSaved(false);
      const loaderTimeout = setTimeout(() => {
        Cookies.set("loaderHidden", true, { expires: 0 });
        setIsSaved(true);
      }, 3000);

      return () => clearTimeout(loaderTimeout);
    }
  }, []);

  const hideLoaderSec = () => {
    document.querySelectorAll(".main_loader_sec").forEach((sec) => {
      sec.classList.add("mainSecLoaderLoaded");
    });
  };

  const hideLoader = () => {
    if (mainLoaderRef.current) {
      mainLoaderRef.current.classList.add("d-none");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(hideLoaderSec, 4000);
    const timeoutId = setTimeout(hideLoader, 4800);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeoutId);
    };
  }, [isSaved]);

  return (
    <>
      {isSaved ? null : (
        <div className={`main_loader`} ref={mainLoaderRef}>
          <div className="main_loader_sec">
            <LogoTriverse />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
