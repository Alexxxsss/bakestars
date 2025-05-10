import Image from "next/image";
import Navbar from "./components/navbar";
import { Carousel } from "./components/carousel";
import { Contact } from "./components/contact";
 
export default function Home() {
  return (
                
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className=" flex flex-col p-10 gap-8 items-center justify-center">
        <h1 className="font-bold text-4xl ">Featured Games</h1>
        <Carousel />
        <Image
          src="/logo.png"
          alt="Bake Stars Studios Logo"
          className="invert"
          width={360}
          height={76}
          priority
        />
        <div className="flex flex-col gap-4 w-full max-w-[600px]">
          <h1 className="font-[family-name:var(--font-geist-mono)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Bake Stars Studios
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-[family-name:var(--font-geist-mono)]">
            Where cooking is the number one priority!
          </p>
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="grid py-8 text-center text-sm text-gray-500 grid-cols-4 items-start-4 justify-around">© 2025 Bake Stars Studios</footer>
    </div>
  );
}
