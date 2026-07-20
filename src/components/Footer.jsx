function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-gray-500 md:flex-row">

        <h3 className="text-xl font-bold text-gray-900">
          &lt;PD /&gt;
        </h3>

        <p>
          Built with React, Tailwind CSS & ❤️
        </p>

        <p>
          © {new Date().getFullYear()} Parth Tripathi
        </p>

      </div>
    </footer>
  );
}

export default Footer;