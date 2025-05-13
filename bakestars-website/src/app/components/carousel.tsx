"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type imageSliderProps = {
  imageURL: StaticImageData[];
};

export function Carousel({ imageURL }: imageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage(): void {
    setImageIndex((index) => (index === imageURL.length - 1 ? 0 : index + 1));
  }

  function showPrevImage(): void {
    setImageIndex((index) => (index === 0 ? imageURL.length - 1 : index - 1));
  }

  return (
    <div className="flex flex-row">
      <button onClick={showPrevImage} className="top-1/2 left-0 z-10">
        <ArrowBigLeft />
      </button>
      <div className="w-full h-[500px] relative overflow-hidden">
        <div className="w-full h-full flex">
          {imageURL.map((url) => (
            <Image
              key={url.src}
              alt="Carousel Picture"
              src={url}
              className="object-cover w-full h-[500px] block flex-shrink-0 flex-grow-0 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${imageIndex * 100}%)` }}
            />
          ))}
        </div>
      </div>
      <button onClick={showNextImage} className="top-1/2 right-0 z-10">
        <ArrowBigRight />
      </button>
    </div>
  );
}
