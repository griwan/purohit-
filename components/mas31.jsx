export default function MAS31(props) {
  return (
    <div className="px-5">
      <div className="mt-8 flex">
        <div className="w-4/12">
          <div className="relative text-center">
            <img
              src="/s3-1.svg"
              className="m-auto mb-3 2xl:mb-6 w-[128px] w-[128px] 2xl:h-[226px] 2xl:w-[226px]"
            />
            <div
              className="text-3xl 2xl:text-3.75rem font-bold font-serif text-ui-blue absolute top-1/2 left-1/2"
              style={{ transform: "translate(-45%, -35%)" }}
            >
              90<sup>%</sup>
            </div>
          </div>
          <div className="text-center text-ui-blue mt-6 font-sans text-base 2xl:text-1.5rem leading-9">
            of all PLWH will know their{" "}
            <b>
              HIV status<sup>2</sup>
            </b>
          </div>
        </div>
        <div className="w-4/12">
          <div className="relative text-center">
            <img
              src="/s3-1.svg"
              className="m-auto mb-3 2xl:mb-6 w-[128px] w-[128px] 2xl:h-[226px] 2xl:w-[226px]"
            />
            <div
              className="text-3xl 2xl:text-3.75rem font-bold font-serif text-ui-blue absolute top-1/2 left-1/2"
              style={{ transform: "translate(-45%, -35%)" }}
            >
              90<sup>%</sup>
            </div>
          </div>
          <div className="text-center text-ui-blue font-sans text-base 2xl:text-1.5rem leading-9">
            of all people diagnosed with HIV will be receiving{" "}
            <b>
              sustained ART<sup>2</sup>
            </b>
          </div>
        </div>
        <div className="w-4/12">
          <div className="relative text-center">
            <img
              src="/s3-1.svg"
              className="m-auto mb-3 2xl:mb-6 w-[128px] w-[128px] 2xl:h-[226px] 2xl:w-[226px]"
            />
            <div
              className="text-3xl 2xl:text-3.75rem font-bold font-serif text-ui-blue absolute top-1/2 left-1/2"
              style={{ transform: "translate(-45%, -35%)" }}
            >
              90<sup>%</sup>
            </div>
          </div>
          <div className="text-center text-ui-blue mt-6 font-sans text-base 2xl:text-1.5rem leading-9">
            of all people receiving ART will be{" "}
            <b>
              virally suppressed<sup>2</sup>
            </b>
          </div>
        </div>
      </div>
      <div className="text-center text-red font-sans text-base 2xl:text-1.5rem leading-9 mt-10 mb-7 font-medium w-[80%] mx-auto">
        The United Nations Programme on HIV/AIDS goal of 90% of all PLWH being diagnosed reflects the
        essential role of HIV testing in helping to end the HIV epidemic
        <sup>2</sup>
      </div>
    </div>
  );
}
