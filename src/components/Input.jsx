const Input = ({ span, placeHolder }) => {
  return (
    <input
      className={`rounded-[100px] border-2 border-white bg-transparent text-sm text-white py-7 px-11 ${
        span ? " col-span-2" : ""
      }`}
      type="text"
      placeholder={placeHolder}
    />
  );
};
export default Input;
