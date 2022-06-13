export function TextBlock(props) {
  return (
    <div className="text-block text-2xl text-ui-text font-sans text-left py-10">
      <p>{props.top}</p>
      <p className="text-6xl text-red font-serif font-bold">
        {props.hero}
        <span className="text-2xl font-semibold">{props.subhero}</span>
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.bottom }} />
    </div>
  );
}
