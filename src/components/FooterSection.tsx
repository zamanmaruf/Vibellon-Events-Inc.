import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/90 py-8 px-4 text-center mt-8">
      <div className="flex justify-center mb-2">
        <Image src="/logo.png" alt="Vibellion Events Inc. Logo" width={56} height={56} className="mx-auto" />
      </div>
      <div className="text-muted text-sm mb-2">&copy; {new Date().getFullYear()} Vibellion Events Inc. All rights reserved.</div>
      <div className="text-muted text-xs">Made with <span className="text-accent">♥</span> in Halifax</div>
    </footer>
  );
} 