import FrameComponent from "../components/FrameComponent";
import Collection from "../components/Collection";
import ToddlersClub from "../components/ToddlersClub";
import HappyCustomers from "../components/HappyCustomers";
import PottyTraining from "../components/PottyTraining";
import Footer from "../components/Footer";
import ImagePopup from "../components/ImagePopup";

const HomePageDesign = () => {
  return (
    <div className="w-full relative rounded-t-6xl rounded-b-none bg-download-nero box-border overflow-hidden flex flex-col items-start justify-start gap-[284px] leading-[normal] tracking-[normal] text-center text-29xl text-gray-400 font-roboto-serif border-[3px] border-solid border-download-nero mq450:gap-[71px] mq800:gap-[142px]">
      <div className="w-full h-[123px] relative overflow-hidden shrink-0 hidden max-w-full z-[9]" />
      <div className="w-full h-[25.5rem] absolute !m-[0] top-[40rem] left-[0] z-[7] flex items-center justify-center">
        <ImagePopup />
      </div>
      <FrameComponent />

      <main className="self-stretch flex flex-col items-end justify-start min-h-[4092px] max-w-full">
        <Collection />
        <section className="mr-[-1px] mb-[348px] self-stretch h-[2924px] bg-download-nero overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[250px] px-px pb-[682px] box-border relative gap-[36px] max-w-full z-[6] mt-[-461px] text-center text-xl text-gray-200 font-nuckle mq450:pb-[122px] mq450:box-border mq1125:h-auto mq1125:pb-[187px] mq1125:box-border mq800:gap-[18px] mq1300:pb-72 mq1300:box-border">
          <div className="w-full self-stretch  !m-[0] absolute top-[5.313rem]  overflow-hidden flex flex-row items-start justify-start pt-[0.437rem] px-[29.75rem] pb-[24.625rem] box-border text-[3.75rem]">
            <h1 className="m-0 h-[4.5rem] w-full relative text-inherit leading-[120%] capitalize inline-block max-w-full z-[3] font-inherit mq450:text-[2.25rem] mq450:leading-[2.688rem] mq800:text-[3rem] mq800:leading-[3.625rem]">
              <span>
                <span className="font-normal ">Exclusive</span>
                <span className="font-semibold font-roboto-serif">{` `}</span>
              </span>
              <b className="text-darkslategray-100">{`Accessories `}</b>
            </h1>
          </div>
          <ToddlersClub />
          <HappyCustomers />
          <PottyTraining />
        </section>
        <Footer />
      </main>

      <img
        className="w-full right-[0px] left-[0px] h-[180px] absolute !m-[0] bottom-[740px] object-cover z-[7] mx-auto"
        loading="lazy"
        alt=""
        src="/mask-group-4@2x.png"
      />

    </div>
  );
};

export default HomePageDesign;
