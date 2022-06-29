import Image from "next/image";
export default function TreatmentTools(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 picture-wrapper">
      <section className="flex text-ui-text font-sans w-4/5 mx-auto">
        <div className="2xl:w-1/3 2xl:mb-0 mb-6 p-4 text-right h-max">
          <p className="text-2xl 2xl:text-3xl text-red font-medium pb-2">
            What is ART?<sup>1</sup>
          </p>
          <div className="text-base 2xl:text-2xl">
            <p className="text-red pb-2">Antiretroviral therapy</p>
            <p>
              {" "}
              ART means taking antiretroviral therapy as prescribed, which can
              lower the amount of virus in the body so that it cannot be
              measured by a lab test
            </p>
          </div>
        </div>
        <div className="2xl:w-1/3 2xl:mb-0 mb-6 p-2 2xl:p-4 h-full text-center justify-center items-center flex">
          <Image
            src="/Group_501.svg"
            alt="Group 501"
            height={200}
            width={270}
          />
        </div>
        <div className="2xl:w-1/3 2xl:mb-0 p-4 h-max text-left">
          <p className="text-2xl 2xl:text-3xl text-red font-medium pb-2">
            What is TasP?<sup>2</sup>
          </p>
          <div className="text-base 2xl:text-2xl">
            <p className="text-red pb-2">Treatment as Prevention</p>
            <p>
              TasP means minimizing the risk of passing HIV to partners through
              sex by getting to and staying undetectable,a also called U=U
              (undetectable equals untransmittable)
            </p>
          </div>
        </div>
      </section>
      <p className="text-red font-sans font-medium text-base 2xl:text-2xl text-center w-10/12 2xl:w-6/12 mx-auto">
        Antiretroviral therapy has also provided incentive for people to get
        tested, to take steps to keep themselves and their partners healthy, and
        to help prevent new infections<sup>3</sup>
      </p>
    </div>
  );
}
