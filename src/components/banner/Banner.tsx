/** @format */

const Banner = () => {
  return (
    <section id="home" className="w-full text-white z-10 overflow-hidden h-fit">
      <div className={`relative flex justify-center items-center h-full`}>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src="./bg-video.mp4"
        ></video>

        <div className="h-[100vh] w-full z-30">
          <div className="w-full h-full bg-[#02060a]/30 z-30">
            <div className="max-w-[1600px] h-full flex flex-col md:flex-row px-3 justify-between items-center m-auto">
              <div className="flex flex-col gap-5 items-start justify-center mt-40 md:mt-0">
                <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
                  CRAZY META 🎯 <br /> NFT COLLECTIONS
                </h1>
                <div className="flex flex-wrap items-center gap-3 md:gap-x-10">
                  <button className="btn !rounded-md">
                    <span className="button-content">Connect Wallet</span>
                  </button>
                  <button className="btn-2">MINT NOW</button>
                </div>
              </div>
              <div className="relative bg-white/20 lg:mr-32 p-3 w-fit rounded-lg">
                <p className="text-[100px] ">
                  NTF Image <br />
                  HERE
                </p>
                <div className="absolute w-32 h-32 -top-14 -left-14 bg-[#fa9536] rounded-full">
                  <div className="rotated-style">
                    <img src="/mint_live_text.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
