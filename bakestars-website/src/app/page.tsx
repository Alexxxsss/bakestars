import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="row-start-1 flex gap-[24px] flex-wrap items-center justify-center"></nav>
      <main className="row-start-2 flex flex-col gap-8 items-center justify-center">
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
            This site is still baking!
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-[family-name:var(--font-geist-mono)]">
            This is the up and coming site for Bake Stars Studios.
          </p>
        </div>
      </main>
    </div>
  );
}
