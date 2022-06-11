import Image from "next/image";
import { footerAtom } from "../store.js";
import { useAtomValue } from "jotai";

const Footer = (props) => {
  const { enable, className } = useAtomValue(footerAtom);
  return (
    <footer
      className={[
        enable ? "visible" : "hidden",
        className || "bg-ui-light",
        "container max-w-screen pin-b px-1 py-1 mx-auto",
      ].join(" ")}
    >
      <div className="flex justify-between items-center px-10">
        <div className="text-center">
          <Image src="/cvs_pharmacy.png" alt="logo" width={255} height={33} />
        </div>

        <div className="gap-4 mt-4">
          <Image
            src="/Gilead_HIV_2020_RedGrey.png"
            alt="me"
            width={385}
            height={130}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
