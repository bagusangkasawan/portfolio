export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/20 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-gray-400 text-sm">
          © {year} Bagus Angkasawan Sumantri Putra. Built with Next.js & React.
        </p>
      </div>
    </footer>
  );
}
