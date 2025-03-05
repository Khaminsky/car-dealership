export default function Footer (){
    return (
        <footer className="bg-rose-600 text-white">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-white">
      <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        
      </svg>
    </div>

    <nav className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
      <a href="/inventory" className="hover:opacity-75"> Inventory </a>
      <a href="/testimonials" className="hover:opacity-75"> Testimonials </a>
      <a href="/contact" className="hover:opacity-75"> Contact </a>
      <a href="#" className="hover:opacity-75"> Privacy Policy </a>
    </nav>

    <p className="mt-8 text-center text-sm opacity-75">
      &copy; {new Date().getFullYear()} The Car Dealers. All rights reserved.
    </p>
  </div>
</footer>

    )
}