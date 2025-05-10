import Image from "next/image";
import Link from "next/link";

export function Carousel() {
  return (
    <div className="flex flex-row gap-4 w-full justify-center items-center mb-100">        
        <button className="rounded-full bg-compliment w-12 flex items-center justify-center font-bold text-xl hover:scale-120 hover:text-stone-600 transition-transform-colors duration-300">&#60;</button>
            <Link href={"/"} className="shadow-lg shadow-black rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image
                className="blur-sm"
                src="/placeholder.jpg"
                alt="Placeholder Image"
                width={720}
                height={480}
                priority/>
            </Link>
            <Link href={"/"} className="shadow-lg shadow-black rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 z-2" style={{ marginLeft: '-200px', marginRight: '-200px' }}>
                <Image
                src="/Cannjohn.png"
                alt="Placeholder Image"
                width={1440}
                height={960}
                priority/>
            </Link>
            <Link href={"/"} className="shadow-lg shadow-black rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image
                className="blur-sm"
                src="/Image_Sequence.png"
                alt="Placeholder Image"
                width={720}
                height={480}
                priority/>
            </Link>
        <button className="rounded-full bg-compliment w-12 flex items-center justify-center font-bold text-xl hover:scale-120 hover:text-stone-600 transition-transform-colors duration-300">&#62;</button>
    </div>
  );
}