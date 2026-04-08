export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#2A2A2E]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-sm text-[#2A2A2E] tracking-widest">
          JA
        </span>
        <p className="font-body text-xs text-[#8A8A90]">
          © {new Date().getFullYear()} Jacob Alegre. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}
