import { IoMdCheckmark } from "react-icons/io";
import SearchBox from "../Search/Search";
import bannerImg from "../../../public/images/Banner 1.png";
import { FcStatistics } from "react-icons/fc";
import CountUp from "react-countup";
import meta from "../../../public/images/meta_6033716.png";
import google from "../../../public/images/google_300221.png";
const HeroBanner = () => {
  return (
    <div className="bg-indigo-100 w-full overflow-hidden h-[590px]">
      <div className="flex   lg:mx-14 ">
        <section className="w-1/2 lg:pt-32">
          <div className="flex items-center gap-x-4">
            <div className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center">
              <IoMdCheckmark className="font-bold text-white" />
            </div>
            <p>
              Stay connect to get upcoming job with{" "}
              <span className="font-semibold text-blue-500 italic">
                Jobnest
              </span>
            </p>
          </div>
          <div>
            <h1 className="text-6xl font-bold leading-[5rem] mt-5">
              Find Your Perfect <br /> <span>Job </span>
              <span className="text-blue-500">Platform</span>
            </h1>
          </div>

          {/* Search functionality design */}

          <SearchBox />
        </section>

        <section className="w-1/2 relative">
          <div className="w-[450px] h-[650px] bg-indigo-300 rounded-full absolute right-7 top-4"></div>
          <div className="absolute mt-3 right-0">
            <img className="h-[580px] w-[500px] " src={bannerImg} alt="" />
          </div>
          <div className="w-[200px] h-[90px] flex rounded-lg shadow-lg shadow-blue-400 bg-white absolute top-14 left-20">
            <div className="text-center  p-3">
              <CountUp
                start={0}
                end={25000}
                duration={10}
                separator=","
                prefix=""
              >
                {({ countUpRef }) => (
                  <div className="font-bold text-2xl text-blue-800">
                    <span ref={countUpRef} />K <span>+</span>
                  </div>
                )}
              </CountUp>
              <p className="font-semibold">People Got hired</p>
            </div>
            <div className="mt-4">
              <FcStatistics className="text-3xl" />
            </div>
          </div>
          <div className="absolute w-20 right-4 top-[100px]">
            <img src={meta} alt="" className="" />
          </div>
          <div className="absolute w-20 left-[100px] bottom-4">
            <img src={google} alt="" className="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroBanner;
