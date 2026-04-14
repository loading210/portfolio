export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-16 lg:px-24 border-t border-[#1A1728]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-sm gradient-text tracking-widest">
          JA
        </span>
        <p className="font-body text-xs text-[#35324A]">
          © {new Date().getFullYear()} Jacob Alegre. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}
