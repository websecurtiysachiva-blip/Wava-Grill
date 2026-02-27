import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="founder-container">

        {/* LEFT TEXT */}
        <div className="founder-text">
          <h2>Ashraf Mohammad</h2>
          <p>
            Ashraf Mohammad, the Flavor Architect, transformed his tech-driven
            mindset into culinary artistry. From Silicon Valley precision to
            crafting bold flavors, he merges technology with gourmet techniques
            to create unforgettable dining experiences.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="founder-image-box">
          <Image
            src="/images/founder.jpg"
            alt="Founder"
            width={400}
            height={500}
            className="founder-image"
            priority
          />
        </div>

      </div>
    </section>
  );
}