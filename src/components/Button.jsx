const Button = ({ text, type }) => {
  return (
    <button
      className=" uppercase px-8 py-3 font-semibold rounded-3xl text-darkPurple bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
      type={type}
    >
      {text}
    </button>
  );
};
export default Button;
