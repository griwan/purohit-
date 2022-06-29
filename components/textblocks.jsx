import Image from "next/image";
import classNames from "classnames";
export function TextBlock(props) {
  return (
    <div className="text-block text-base 2xl:text-2xl text-ui-text font-sans text-left py-5 2xl:py-10">
      <p>{props.top}</p>
      <p className="text-3xl 2xl:text-6xl text-red font-serif font-bold">
        {props.hero}
        <span className="text-base 2xl:text-2xl font-semibold">
          {props.subhero}
        </span>
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.bottom }} />
    </div>
  );
}

export function PP(props) {
  return <p className={props.class || props.className}>{props.children}</p>;
}

export function Pic(props) {
  return (
    <div className={classNames("relative", props.className)}>
      <Image
        src={props.src}
        alt="image"
        layout="fill"
        objectFit={props.cover ? "cover" : "contain"}
      />
    </div>
  );
}

export function Division(props) {
  return <div className={classNames(props.className)}>{props.children}</div>;
}

export function Kxa() {
  return (
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Thik xa hajur!</a>
  );
}
