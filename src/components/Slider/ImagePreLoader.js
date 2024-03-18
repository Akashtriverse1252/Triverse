import imagesLoaded from "imagesloaded";

const preloadImages = (selector = "img") => {
  return new Promise((resolve) => {
    // Use the imagesLoaded library to ensure all images are fully loaded.
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};

export default preloadImages; // Export preloadImages function
