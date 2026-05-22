export default function HypeVideo() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hub-hype.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0a0a0a]" />
    </section>
  );
}
