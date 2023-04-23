const Contact = ({ icon, title, description }) => {
  return (
    <div className=" flex gap-6">
      <img src={icon} alt="icon" />

      <div className=" flex flex-col gap-2 text-white">
        <h2 className=" font-[700] text-2xl">{title}</h2>

        <span className=" font-[400] text-clip">{description}</span>
      </div>
    </div>
  );
};
export default Contact;
