export default function FourWay() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container p-5 mx-auto">
        <div className="flex">
          <div className="flex flex-col">
            <div className=" text-red px-4 py-3 2xl:px-8 2xl:py-6 font-sans text-center">
              <h2 className="text-3xl 2xl:text-6xl font-bold font-serif mb-2">
                &gt;6X
              </h2>
              <p className="mb-2 2xl:mb-4 text-base 2xl:text-2xl font-semibold">
                higher in
                <br /> Black men
              </p>
            </div>
            <div className="md:w-full text-red px-4 py-3 2xl:px-8 2xl:py-6 font-sans text-center">
              <h2 className="text-3xl 2xl:text-6xl font-bold font-serif mb-2">
                ~3X
              </h2>
              <p className="mb-2 2xl:mb-4 text-base 2xl:text-2xl font-semibold">
                higher in Latinx men
                <br />
                <span className="font-normal">than in White men</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center border-dashed border-l-3 border-[#395C7E]">
            <div className=" text-[#395C7E] px-4 py-3 2xl:px-8 2xl:py-6 font-sans text-center">
              <h2 className="text-3xl 2xl:text-6xl font-bold font-serif mb-2">
                ~88X
              </h2>
              <p className="mb-2 2xl:mb-4 text-base 2xl:text-2xl font-semibold">
                higher in MSM
                <br />{" "}
                <span className="font-normal">than in heterosexual men</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col border-dashed border-l-3 border-[#395C7E]">
            <div className=" text-red px-4 py-3 2xl:px-8 2xl:py-6 font-sans text-center">
              <h2 className="text-3xl 2xl:text-6xl font-bold font-serif mb-2">
                5X
              </h2>
              <p className="mb-2 2xl:mb-4 text-base 2xl:text-2xl font-semibold">
                higher in
                <br /> Black MSM
              </p>
            </div>
            <div className="md:w-full text-red px-4 py-3 2xl:px-8 2xl:py-6 font-sans text-center">
              <h2 className="text-3xl 2xl:text-6xl font-bold font-serif mb-2">
                &gt;2X
              </h2>
              <p className="mb-2 2xl:mb-4 text-base 2xl:text-2xl font-semibold">
                higher in Latinx MSM
                <br />
                <span className="font-normal">than in White MSM</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col border-dashed border-l-3 border-[#395C7E]">
            <div className=" text-[#395C7E] px-4 py-3 2xl:px-8 2xl:py-6 font-sans text-center">
              <h2 className="text-3xl 2xl:text-6xl font-bold font-serif mb-2">
                ~17X
              </h2>
              <p className="mb-2 2xl:mb-4 text-base 2xl:text-2xl font-semibold">
                higher in
                <br /> Black women
              </p>
            </div>
            <div className="md:w-full text-[#395C7E] px-4 py-3 2xl:px-8 2xl:py-6 font-sans text-center">
              <h2 className="text-3xl 2xl:text-6xl font-bold font-serif mb-2">
                &gt;3X
              </h2>
              <p className="mb-2 2xl:mb-4 text-base 2xl:text-2xl font-semibold">
                higher in Latinx women
                <br /> <span className="font-normal">than in White women</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
