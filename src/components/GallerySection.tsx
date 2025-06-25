const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

import Image from "next/image";

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-wide uppercase text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image src={src} alt={`Gallery ${i+1}`} fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>
    </section>
  );
} 