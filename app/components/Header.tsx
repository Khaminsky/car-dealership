import Link from "next/link";

const navLinks = [
  { href: "/cardisplay", label: "Inventory" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="block text-rose-600">
          <span className="sr-only">Home</span>
          🚗 <span className="text-xlg font-bold">AutoDeals</span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-md">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-700 transition hover:text-rose-600"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>


          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-rose-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-rose-700"
                href="/login"
              >
                Login
              </Link>

              <Link
                className="hidden rounded-md bg-rose-100 px-5 py-2.5 text-sm font-medium text-rose-600 transition hover:text-rose-400 sm:block"
                href="/register"
              >
                Register
              </Link>
            </div>

            <button
              className="block rounded-sm bg-rose-100 p-2.5 text-rose-600 transition hover:text-rose-700 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
