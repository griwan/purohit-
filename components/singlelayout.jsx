export default function SingleLayout(props) {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-full md:max-w-[80%] text-center p-1rem md:p-2rem">
        {props.children}
      </div>
    </div>
  );
}
