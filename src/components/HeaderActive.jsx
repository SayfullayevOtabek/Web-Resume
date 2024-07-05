import React from 'react';

const HeaderActive = ({ isActive, onClick, icon, title }) => (
  <ul
    onClick={onClick}
    className={`text-${isActive ? '[#7562E0]' : '[#BDBDBD]'}`}
  >
    {icon}
    <li className="cursor-pointer text-[18px] font-semibold">
      {title}
      <br />
    </li>
  </ul>
);

export default HeaderActive;
