import React from 'react';

const Card = ({ isActive, onClick, icon, title }) => (
  <button
    onClick={onClick}
    className={`${isActive ? 'bg-[#7562E0]' : 'bg-[#BDBDBD]'} md:w-[256px] w-[178px] md:h-[254px] h-[127px]`}
  >
    {icon}
    <p className="font-semibold md:text-[24px] text-[14px] md:mt-[14px] mt-[5pxpx] flex justify-start ml-[24px]">
      {title}
      <br />
    </p>
    <p className='font-semibold md:text-[24px] text-[14px] flex justify-start ml-[24px] md:mt-0 mt-[-5px]'>
    Work Place
    </p>
  </button>
);

export default Card;
