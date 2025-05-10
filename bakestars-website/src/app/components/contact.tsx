

export function Contact() {return (
<div className="bg-darker-bg grid grid-cols-6 gap-4 p-10 items-center justify-center rounded-2xl shadow-lg shadow-black w-full max-w-[600px]">
  <h1 className="col-span-6 text-center font-bold text-xl">Got questions?</h1>
  <p className="col-span-6 text-center">Feel free to contact us at any of these</p>
  <div className="col-span-6 flex justify-center gap-5">
    <a href="mailto:mail@stenkaal.com" className="font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">mail@stenkaal.com</a>
    <a target="_blank" href="https://discord.gg/6v6jFFK2vy" className="font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Discord</a>
  </div>
</div>
)}