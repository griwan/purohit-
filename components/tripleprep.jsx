export default function TriplePrep(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full font-sans text-2xl bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
              <h1 className="title-font text-2xl lg:text-3xl font-medium text-ui-text mb-3">
                What are Protective Practices? <sup>1</sup>
              </h1>
              <p className="leading-relaxed mb-3 text-sans">
                Protective practices against HIV include{" "}
                <span className="text-semibold">HIV testing, condom use</span>
                during sex, and
                <span className="text-semibold"> not sharing needles </span> or
                other injection equipment for those who use substances
              </p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full font-sans text-2xl px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="10"
                viewBox="0 0 63 10"
              >
                <rect
                  id="Rectangle_108"
                  data-name="Rectangle 108"
                  width="63"
                  height="10"
                  fill="#395c7e"
                />
              </svg>
              <h1 className="title-font text-2xl lg:text-3xl text-xl font-medium text-[#395C7E] mb-3 pt-5">
                What is PrEP? <sup>2,3</sup>
              </h1>
              <p className="leading-relaxed mb-3 text-sans">
                <span className="font-semibold text-[#395C7E]">
                  Pre-exposure prophylaxis (PrEP)
                </span>
                PrEP means taking prescription medicine{" "}
                <span className="font-semibold text-[#395C7E]">
                  as directed
                </span>
                before HIV exposure to help lower the chance of getting HIV
              </p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full font-sans text-2xl px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="63"
                viewBox="0 0 63 63"
              >
                <g
                  id="Group_472"
                  data-name="Group 472"
                  transform="translate(0 0.067)"
                >
                  <rect
                    id="Rectangle_45"
                    data-name="Rectangle 45"
                    width="63"
                    height="9"
                    transform="translate(0 26.933)"
                    fill="#a9253f"
                  />
                  <rect
                    id="Rectangle_46"
                    data-name="Rectangle 46"
                    width="63"
                    height="7.693"
                    transform="translate(27.654 62.933) rotate(-90)"
                    fill="#a9253f"
                  />
                </g>
              </svg>

              <h1 className="title-font text-2xl lg:text-3xl text-xl font-medium text-red mb-3 pt-5">
                What is PEP? <sup>4</sup>
              </h1>
              <p className="leading-relaxed mb-3 text-sans">
                <span className="font-semibold text-red">
                  Postexposure prophylaxis (PEP)
                </span>
                PEP means taking HIV medicines very soon{" "}
                <span className="font-semibold text-red">
                  (within 72 hours)
                </span>{" "}
                after possible exposure to HIV to help prevent getting HIV
              </p>
            </div>
          </div>
        </div>
        <p className="text-red font-sans font-medium text-2xl text-center w-10/12 lg:w-6/12 mx-auto">
          The recent availability of PrEP medicine helps provide an incentive
          for people to get tested to protect themselves and their partners
          against HIV5
        </p>
      </div>
    </section>
  );
}
