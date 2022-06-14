export default function MAS33() {
  return (
    <div className="px-44">
      <div className="flex justify-center"></div>
      <div className="text-center text-ui-blue font-sans text-lg 2xl:text-1.5rem font-semibold leading-9 mt-4 2xl:mt-16 mb-4 2xl:mb-10">
        New HIV diagnosis rates in the United States and dependent areas in 2019
        <sup>2</sup>
      </div>
      <div className="mt-8 flex justify-around">
        <div className="relative text-center w-1/5">
          <img
            src="/s3-2-1.svg"
            className="m-auto mb-3 2xl:mb-6 w-[128px] w-[128px] 2xl:h-[226px] 2xl:w-[226px]"
          />
          <div
            className="text-red  absolute top-1/2 left-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="text-3xl 2xl:text-3.75rem font-bold font-serif">
              69<sup>%</sup>
            </div>
            <div className="text-[10px] 2xl:text-1.5rem 2xl:leading-6 font-sans max-w-[12rem] 2xs:max-w-[9rem]">
              Gay, bisexual, and other MSM
            </div>
          </div>
        </div>
        <div className="relative text-center w-1/5">
          <img
            src="/s3-2-2.svg"
            className="m-auto mb-3 2xl:mb-6 w-[128px] w-[128px] 2xl:h-[226px] 2xl:w-[226px]"
          />
          <div
            className="text-red  absolute top-1/2 left-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="text-3xl 2xl:text-3.75rem font-bold font-serif">
              42<sup>%</sup>
            </div>
            <div className="text-[10px] 2xl:text-1.5rem 2xl:leading-6 font-sans max-w-[9rem]">
              Black/African American
            </div>
          </div>
        </div>
        <div className="relative text-center w-1/5">
          <img
            src="/s3-2-3.svg"
            className="m-auto mb-3 2xl:mb-6 w-[128px] w-[128px] 2xl:h-[226px] 2xl:w-[226px]"
          />
          <div
            className="text-red  absolute top-1/2 left-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="text-3xl 2xl:text-3.75rem font-bold font-serif">
              29<sup>%</sup>
            </div>
            <div className="text-[10px] 2xl:text-lg 2xl:leading-6 font-sans max-w-[9rem]">
              Hispanic/Latinx
            </div>
          </div>
        </div>
        <div className="relative text-center w-1/5">
          <img
            src="/s3-2-4.svg"
            className="m-auto mb-3 2xl:mb-6 w-[128px] w-[128px] 2xl:h-[226px] 2xl:w-[226px]"
          />
          <div
            className="text-red  absolute top-1/2 left-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="text-3xl 2xl:text-3.75rem font-bold font-serif">
              7<sup>%</sup>
            </div>
            <div className="text-[10px] 2xl:text-1.5rem 2xl:leading-6 font-sans max-w-[9rem]">
              Persons who inject drugs
            </div>
          </div>
        </div>
        <div className="relative text-center w-1/5">
          <img
            src="/s3-2-5.svg"
            className="m-auto mb-3 2xl:mb-6 w-[128px] w-[128px] 2xl:h-[226px] 2xl:w-[226px]"
          />
          <div
            className="text-red  absolute top-1/2 left-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="text-3xl 2xl:text-3.75rem font-bold font-serif">
              2<sup>%</sup>
            </div>
            <div className="text-[10px] 2xl:text-1.5rem 2xl:leading-6 font-sans max-w-[9rem]">
              Transgender individuals
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-red font-sans text-base 2xl:text-1.5rem leading-5 2xs:leading-9 mt-10 mb-7 w-[80%] mx-auto">
        The risk of HIV and other health outcomes is driven largely by social
        determinants of health—the conditions in which people are born, grow,
        live, work, and age<sup>3</sup>
      </div>
    </div>
  );
}
