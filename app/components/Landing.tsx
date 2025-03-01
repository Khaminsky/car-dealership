export default function Landing() {
    return (
      <section
        className="relative bg-black bg-opacity-60 bg-blend-overlay bg-[url(https://images.unsplash.com/photo-1518987048-93e29699e79a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>
  
        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Find Your Dream Car
  
              <strong className="block font-extrabold text-rose-500"> Today! </strong>
            </h1>
  
            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Discover a wide selection of new and used cars that fit your lifestyle. Whether you're looking for a family car, sports car, or something in between, we have something for you!
            </p>
  
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Browse Cars
              </a>
  
              <a
                href="#"
                className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  