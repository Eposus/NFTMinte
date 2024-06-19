/** @format */

const Navbar = () => {
  return (
    <>
      <nav className="py-5 fixed w-full text-white z-50 bg-blur">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-10">
          <div className="flex justify-between items-center">
            <div className="text-lg flex items-center uppercase font-semibold">
              <img className="h-10" src="/logo.svg" alt="logo" />
              <span className="block mt-1">Siriux</span>
            </div>
            <button className="btn">
              <span className="button-content">Connect Wallet</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
