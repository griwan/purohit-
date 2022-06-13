import Image from "next/image";
export default function EndScreen() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <a
                href="https://www.healthysexuals.com/"
                className="font-sans underline py-2 font-semibold text-3xl text-red"
              >
                HealthySexual<sup>&#174;</sup>{" "}
              </a>
              <img
                alt="team"
                className="flex-shrink-0 w-full h-56 object-cover object-center mb-4"
                src="/Image_36.png"
              />
              <div className="w-full flex justify-left text-left gap-1">
                <Image
                  src="/GileadHIVCode.png"
                  height={60}
                  width={60}
                  alt="qr"
                />
                <p>
                  Scan the QR code or visit <br />
                  <a
                    className="text-red underline"
                    href="https://www.healthysexuals.com/"
                  >
                    https://www.healthysexuals.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <a
                href="https://helpstopthevirus.com/"
                className="font-sans underline py-2 font-semibold text-3xl text-red"
              >
                Help Stop The Virus
              </a>
              <img
                alt="team"
                className="flex-shrink-0 w-full h-56 object-cover object-center mb-4"
                src="/Group_369.png"
              />
              <div className="w-full flex justify-left text-left gap-1">
                <Image
                  src="/HelpstopthevirusCode.png"
                  height={60}
                  width={60}
                  alt="qr"
                />
                <p>
                  Scan the QR code or visit <br />
                  <a
                    className="text-red underline"
                    href="https://helpstopthevirus.com/"
                  >
                    https://helpstopthevirus.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <a
                href="https://www.hivtestnow.com/"
                className="font-sans underline py-2 font-semibold text-3xl text-red"
              >
                Press Play
              </a>
              <img
                alt="team"
                className="flex-shrink-0 w-full h-56 object-cover object-center mb-4"
                src="/Screen.png"
              />
              <div className="w-full flex justify-left text-left gap-1">
                <Image
                  src="/PressPlayCode.png"
                  height={60}
                  width={60}
                  alt="qr"
                />
                <p>
                  Scan the QR code or visit <br />
                  <a
                    className="text-red underline"
                    href="https://www.hivtestnow.com/"
                  >
                    https://www.hivtestnow.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <a
                href="www.google.com"
                className="font-sans underline py-2 font-semibold text-3xl text-red"
              >
                Gilead HIV
              </a>

              <img
                alt="team"
                className="flex-shrink-0 w-full h-56 object-cover object-center mb-4"
                src="/Image_38.png"
              />
              <div className="w-full flex justify-left text-left gap-1">
                <Image
                  src="/GileadHIVCode.png"
                  height={60}
                  width={60}
                  alt="qr"
                />
                <p>
                  Scan the QR code or visit <br />
                  <a
                    className="text-red underline"
                    href="https://www.healthysexuals.com/"
                  >
                    https://www.healthysexuals.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
