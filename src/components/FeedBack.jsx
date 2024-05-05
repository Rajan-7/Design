import { quotes } from "../assets";

const FeedBack = ({ content, title, img, name }) => {
  return (
    <div
      className="flex justify-between flex-col 
       max-w-[370px] px-10 py-12
       md:mr-10 sm:mr-5 mr-0 my-5 
       rounded-[20px]
       feedback-card"
    >
      <img
        src={quotes}
        alt="double_quotes"
        className="h-[27px] w-[42px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white ml-4 my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
        <div className="flex flex-col">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] ml-4 text-white">{name}</h4>
          <p className="font-poppins font-semibold text-[16px] leading-[24px] ml-4 text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
