import Image from "next/image";
import { footerAtom, navBehavior } from "../store.js";
import { useAtomValue } from "jotai";

const Footer = (props) => {
  const { enable, className, content, defaults } = useAtomValue(footerAtom);
  const { forward } = useAtomValue(navBehavior);
  return (
    <footer
      className={[
        enable ? "visible" : "hidden",
        className || "bg-ui-light",
        "container max-w-screen pin-b px-1 py-1 mx-auto h-max-15vh",
      ].join(" ")}
    >
      <div className="flex justify-between items-center px-10">
        {defaults ? (
          <Image src="/cvs_pharmacy.png" alt="logo" width={255} height={33} />
        ) : (
          <div
            className="text-left basis-10/12"
            dangerouslySetInnerHTML={{
              __html: forward ? content : "",
            }}
          />
        )}
        <div className="basis-2/12 mt-4">
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
