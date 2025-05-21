export function Contact() {
  return (
    <div className="bg-black text-pink-400 border-4 border-pink-400 rounded-lg p-6 max-w-[600px] w-full font-mono shadow-[0_0_15px_rgba(156,0,156,0.6)]">
      <h2 className="text-center text-3xl mb-2 neon">💾 Got Questions?</h2>
      <p className="text-center text-sm mb-4">Reach out on the network:</p>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:mail@stenkaal.com"
          className="hover:text-white transition hover:scale-110"
        >
          📧 Email
        </a>
        <a
          href="https://discord.gg/6v6jFFK2vy"
          target="_blank"
          className="hover:text-white transition hover:scale-110"
        >
          💬 Discord
        </a>
      </div>
    </div>
  );
}
