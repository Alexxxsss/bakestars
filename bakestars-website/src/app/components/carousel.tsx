"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type imageSliderProps = {
  imageURL: StaticImageData[];
  logoURL: StaticImageData[];
};

export function Carousel({ imageURL, logoURL }: imageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  function showNextImage(): void {
    setImageIndex((index) => (index === imageURL.length - 1 ? 0 : index + 1));
  }

  function showPrevImage(): void {
    setImageIndex((index) => (index === 0 ? imageURL.length - 1 : index - 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index === imageURL.length - 1 ? 0 : index + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [imageURL.length]);

  return (
    <div className="flex flex-row items-center gap-4 relative">
      <button
        onClick={showPrevImage}
        className="top-1/2 right-0 z-10 py-2 px-6 font-extrabold text-4xl rounded-full hover:bg-compliment hover:text-gray-900 transition duration-275 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        &lt;
      </button>
      <div
        className="w-full h-[500px] relative overflow-hidden rounded-2xl shadow-lg shadow-black"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="w-full h-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${imageIndex * 100}%)` }}
        >
          {imageURL.map((url, index) => (
            <div key={url.src} className="relative w-full h-full flex-shrink-0 flex-grow-0">
              <Image
                alt={`Carousel Picture ${index + 1}`}
                src={url}
                className={`object-cover w-full h-full block transition-filter duration-300 ${
                  isHovering ? "blur-md" : ""
                }`}
              />
              {logoURL[index] && (
                <div className={`absolute top-4 left-4 w-auto h-auto transition-all duration-300 ${isHovering ? "scale-105" : ""}`}>
                  <Image
                    alt={`Logo for Picture ${index + 1}`}
                    src={logoURL[index]}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={showNextImage}
        className="top-1/2 right-0 z-10 py-2 px-6 font-extrabold text-4xl rounded-full hover:bg-compliment hover:text-gray-900 transition duration-275 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        &gt;
      </button>
    </div>
  );
}