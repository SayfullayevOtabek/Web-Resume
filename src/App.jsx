import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { IoMdPerson } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Card from "./components/Card";
function App() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  useEffect(() => {
    axios
      .get(`https://1636bf53-4039-46e7-be62-7281316d32e1.mock.pstmn.io/users`)
      .then((res) => {
        setData(res.data.aboutMe);
      });
  }, []);
  return (
    <div className="containers">
      <Header />
      <div className="bg-[#1A1A29] w-full  mt-[19px]">
        <div className="flex gap-[194px]">
          <div className="md:pl-[136px] pl-[30px]">
            <p className="md:text-[32px] text-[14px] font-semibold md:pt-[209px] pt-[100px] ">Hello, i'm</p>
            {data.map((item, i) => (
              <div key={i}>
                <h1 className="md:text-[52px] text-[18px] font-semibold">
                  {item.lastName} {item.firstName}
                </h1>
                <p className="font-medium md:text-[18px] text-[8px]">
                  Freelance UI designer, Fullstack developer, &
                  <br />
                  Data Miner. I create seamless web experiences
                  <br />
                  for end-users.
                </p>
                <div className="flex gap-[32px] mt-[29px] md:pb-[50px] pb-[20px]">
                  <button className="bg-[#7562E0] md:w-[160px] w-[80px] md:h-[48px] h-[24] rounded-[8px]">
                    <div className="flex justify-center gap-[5px]">
                      <span className="font-semibold md:text-[16px] text-[8px]">About Me</span>
                      <span className="md:mt-[2px] mt-[1px]">
                        <IoMdPerson className="md:w-[20px] w-[10px] md:h-[20px] h-[10px]" />
                      </span>
                    </div>
                  </button>
                  <button className="bg-[#1A1A29] border-[#6C5BCD] border-[2px] md:w-[159px] w-[79px] md:h-[48px] h-[24px] rounded-[8px]">
                    <div className="flex justify-center gap-[5px]">
                      <span className="font-semibold md:text-[16px] text-[8px]">Projects</span>
                      <span className="md:mt-[2px] mt-[1px]">
                        <IoEye className="md:w-[20px] w-[10px] md:h-[20px] h-[10px]" />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="md:ml-[-100px] ml-[-160px]">
              <img
                src="/public/Images/portrait 1.png"
                className="absolute md:mt-[-84px] mt-[-22px] md:ml-[30px] ml-[10px] md:w-[444px] w-[142px] md:h-[444px] h-[142px]"
                alt=""
              />
              <img
                src="/public/Images/Ellipse 4.png"
                className="md:mt-[195px] mt-[142px] md:w-[486px] w-[150px] md:h-[360px] h-[120px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-[128px] mt-[50px] bg-[#1A1A29] w-full">
        <div className="md:pl-[136px] pl-[30px] pt-[55px]">
          <p className="md:text-[32px] text-[22px] text-[#7562E0] font-semibold">About me</p>
          <p className="md:w-[1032px] w-[390px] font-medium mt-[6px] md:text-[18px] text-[12px]">
            Hi, my name is Sayfullayev Otabek, i am a Frontend web developer,
            Web designer. I have honed my skills in Web Development and advance
            i have core understanding of advance Web design principles. Here are
            the major skiills i have.
          </p>
          <div className="flex items-center md:gap-[20px] gap-[12px]">
            <p className="font-semibold md:text-[96px] text-[50px] text-[#7562E0]">0</p>
            <p className="font-medium md:text-[24px] text-[14px]">
              I don't have experience so far because I recently graduated from
              Frontend.
            </p>
          </div>
          <div className="mt-[58px] md:flex flex flex-wrap md:gap-[17px] gap-[15px]">
            <Card
              isActive={activeIndex === 0}
              onClick={() => handleClick(0)}
              icon={<FaGithub   className="md:pt-[97px] pt-[20px] md:w-[150px] w-[80px] md:h-[150px] h-[80px]  md:ml-[-25px] ml-[5px]" />}
              title="Github"
            />
            <Card
              isActive={activeIndex === 1}
              onClick={() => handleClick(1)}
              icon={<FaReact  className="md:pt-[97px] pt-[20px] md:w-[150px] w-[80px] md:h-[150px] h-[80px]  md:ml-[-25px] ml-[5px]" />}
              title="React.JS"
            />
            <Card
              isActive={activeIndex === 2}
              onClick={() => handleClick(2)}
              icon={
                <RiNextjsFill  className="md:pt-[97px] pt-[20px] md:w-[150px] w-[80px] md:h-[150px] h-[80px]  md:ml-[-25px] ml-[5px]" />
              }
              title="Next.JS"
            />
            <Card
              isActive={activeIndex === 3}
              onClick={() => handleClick(3)}
              icon={
                <TbBrandJavascript
                  className="md:pt-[97px] pt-[20px] md:w-[150px] w-[80px] md:h-[150px] h-[80px]  md:ml-[-25px] ml-[5px]"
                />
              }
              title="JS"
            />
          </div>
        </div>
        <div className="mt-[80px] md:pl-[136px] pl-[30px]">
          <p className="md:text-[32px] text-[22px] text-[#7562E0] font-semibold">
            The services i offer:
          </p>
          <div className="mt-[32px]">
            <div className="flex flex-wrap md:gap-[22px] gap-[26px]">
              <div className="bg-[#1A1A29] md:w-[341px] w-[170px] md:h-[338px] h-[169px] border-[#7562E0] border-[2px] rounded-[16px]">
                <div className=" flex justify-center">
                  <FaGithub className="md:pt-[75px] pt-[15px] md:w-[150px] w-[80px] md:h-[150px] h-[100px]" />
                </div>
                <div className="text-center mt-[8px]">
                  <p className="font-semibold md:text-[24px] text-[14px]">Github Work Place</p>
                  <p className="md:mt-[16px] mt-[5px] font-medium md:text-[17px] text-[9px]">
                    I design beautiful web iterfaces
                    <br />
                    with Figma and Adove XD
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A29] md:w-[341px] w-[170px] md:h-[338px] h-[169px] border-[#F5F5F5] border-[2px] rounded-[16px]">
                <div className=" flex justify-center">
                  <FaGithub className="md:pt-[75px] pt-[15px] md:w-[150px] w-[80px] md:h-[150px] h-[100px]" />
                </div>
                <div className="text-center mt-[8px]">
                  <p className="font-semibold md:text-[24px] text-[14px]">Github Work Place</p>
                  <p className="md:mt-[16px] mt-[5px] font-medium md:text-[17px] text-[9px]">
                    I design beautiful web iterfaces
                    <br />
                    with Figma and Adove XD
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A29] md:w-[341px] w-[170px] md:h-[338px] h-[169px] border-[#F5F5F5] border-[2px] rounded-[16px]">
                <div className=" flex justify-center">
                  <FaGithub className="md:pt-[75px] pt-[15px] md:w-[150px] w-[80px] md:h-[150px] h-[100px]" />
                </div>
                <div className="text-center mt-[8px]">
                  <p className="font-semibold md:text-[24px] text-[14px]">Github Work Place</p>
                  <p className="md:mt-[16px] mt-[5px] font-medium md:text-[17px] text-[9px]">
                    I design beautiful web iterfaces
                    <br />
                    with Figma and Adove XD
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A29] md:w-[341px] w-[170px] md:h-[338px] h-[169px] border-[#7562E0] border-[2px] rounded-[16px]">
                <div className=" flex justify-center">
                  <FaGithub className="md:pt-[75px] pt-[15px] md:w-[150px] w-[80px] md:h-[150px] h-[100px]" />
                </div>
                <div className="text-center mt-[8px]">
                  <p className="font-semibold md:text-[24px] text-[14px]">Github Work Place</p>
                  <p className="md:mt-[16px] mt-[5px] font-medium md:text-[17px] text-[9px]">
                    I design beautiful web iterfaces
                    <br />
                    with Figma and Adove XD
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A29] md:w-[341px] w-[170px] md:h-[338px] h-[169px] border-[#7562E0] border-[2px] rounded-[16px]">
                <div className=" flex justify-center">
                  <FaGithub className="md:pt-[75px] pt-[15px] md:w-[150px] w-[80px] md:h-[150px] h-[100px]" />
                </div>
                <div className="text-center mt-[8px]">
                  <p className="font-semibold md:text-[24px] text-[14px]">Github Work Place</p>
                  <p className="md:mt-[16px] mt-[5px] font-medium md:text-[17px] text-[9px]">
                    I design beautiful web iterfaces
                    <br />
                    with Figma and Adove XD
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A29] md:w-[341px] w-[170px] md:h-[338px] h-[169px] border-[#F5F5F5] border-[2px] rounded-[16px]">
                <div className=" flex justify-center">
                  <FaGithub className="md:pt-[75px] pt-[15px] md:w-[150px] w-[80px] md:h-[150px] h-[100px]" />
                </div>
                <div className="text-center mt-[8px]">
                  <p className="font-semibold md:text-[24px] text-[14px]">Github Work Place</p>
                  <p className="md:mt-[16px] mt-[5px] font-medium md:text-[17px] text-[9px]">
                    I design beautiful web iterfaces
                    <br />
                    with Figma and Adove XD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[80px] md:pl-[136px] pl-[30px]">
          <p className=" md:text-[32px] text-[22px] text-[#7562E0] font-semibold">
            Featured projects:
          </p>
          <p className="font-medium md:text-[18px] md:w-[1200px] w-[385px] text-[12px] mt-[16px]">
            I have worked on many projects over the course of being a Web
            Developer, here are a few of my live, real-world <br /> projects
          </p>
          <div className="mt-[36px]">
            <div className="flex gap-[17px] md:overflow-y-hidden overflow-y-auto">
              <div className="bg-[#31313F] md:w-[343px] w-[343px] md:h-[417px] h-[380px] rounded-[8px]">
                <img
                  src="/public/Images/thumbnail-1.png"
                  alt=""
                  className="p-[16px]"
                />
                <p className="font-semibold text-[24px] text-[#7562E0] pl-[16px]">
                  TWINDER
                </p>
                <p className="font-medium md:text-[18px] text-[14px] mt-[5px] md:pl-[16px] pl-[16px]">
                  A live Geolocation app for finding tweets and twitter users
                  around you.
                </p>
                <div className="md:mt-[24px] mt-[20px] pb-[23px] flex md:pl-[16px] md:p-0 p-3 gap-[18px]">
                  <button className="md:w-[145px] w-[115px] h-[43px] bg-[#7562E0] rounded-[8px]">
                    View Live
                  </button>
                  <button className="md:w-[144px] w-[114px] h-[43px] rounded-[8px] border-[#6C5BCD] border-[2px] ">
                    Github Repo
                  </button>
                </div>
              </div>
              <div className="bg-[#31313F] md:w-[343px] w-[343px] md:h-[417px] h-[380px] rounded-[8px]">
                <img
                  src="/public/Images/thumbnail-2.png"
                  alt=""
                  className="p-[16px]"
                />
                <p className="font-semibold text-[24px] text-[#7562E0] pl-[16px]">
                  LIVENTS
                </p>
                <p className="font-medium md:text-[18px] text-[14px] mt-[5px] pl-[16px]">
                  A video streaming app with live Geolocation, for streaming{" "}
                  <br /> events.
                </p>
                <div className="md:mt-[24px] mt-[20px] pb-[23px] flex  md:pl-[16px] md:p-0 p-3 gap-[18px]">
                  <button className="md:w-[145px] w-[115px] h-[43px] bg-[#7562E0] rounded-[8px]">
                    View Live
                  </button>
                  <button className="md:w-[144px] w-[114px] h-[43px] rounded-[8px] border-[#6C5BCD] border-[2px] ">
                    Github Repo
                  </button>
                </div>
              </div>
              <div className="bg-[#31313F] md:w-[343px] w-[343px] md:h-[417px] h-[380px] rounded-[8px]">
                <img
                  src="/public/Images/thumbnail-3.png"
                  alt=""
                  className="p-[16px]"
                />
                <p className="font-semibold text-[24px] text-[#7562E0] pl-[16px]">
                  MOOVE
                </p>
                <p className="font-medium md:text-[18px] text-[14px] mt-[5px] pl-[16px]">
                  Mobile app for booking instant pickup & dropoff accross major
                  cities.
                </p>
                <div className="md:mt-[24px] mt-[20px]  pb-[23px] flex md:pl-[16px] md:p-0 p-3 gap-[18px]">
                  <button className="md:w-[145px] w-[115px] h-[43px] bg-[#7562E0] rounded-[8px]">
                    View Live
                  </button>
                  <button className="md:w-[144px] w-[114px] h-[43px] rounded-[8px] border-[#6C5BCD] border-[2px] ">
                    Github Repo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[128px] md:pl-[136px] pl-[30px]">
          <div className="md:flex flex-none gap-[191px]">
            <div>
              <p className="md:text-[32px] md:w-[300px] w-[200px] text-[22px] font-semibold text-[#7562E0]">
                Connect with me:
              </p>
              <p className="font-medium md:text-[18px] text-[10px] mt-[16px]">
                Satisfied with me? Please contact me
              </p>
              {data.map((item, i) => (
                <div className="mt-[24px] flex gap-[18.67px]" key={i}>
                  <a href={item.socialLinks.git.path}>
                    <FaGithub className="text-[#7562E0] md:w-[32px] w-[22px] md:h-[32px] h-[22px]" />
                  </a>
                  <a href={item.socialLinks.linkedin.path}>
                    <FaLinkedin className="text-[#7562E0] md:w-[32px] w-[22px] md:h-[32px] h-[22px]" />
                  </a>
                  <a href={item.socialLinks.telegram.path}>
                    <FaTelegram className="text-[#7562E0] md:w-[32px] w-[22px] md:h-[32px] h-[22px]" />
                  </a>
                </div>
              ))}
            </div>
            <div className="md:mt-0 mt-[50px]">
              <p className="font-medium text-[24px]">
                Contact me, let’s make magic together
              </p>
              <div className="mt-[24px] flex flex-col space-y-[16px]">
                <input
                  type="text"
                  placeholder="Name:"
                  className="outline-none bg-[#32323F] rounded-[8px] md:w-[473px] w-[370px] md:h-[62px] h-[50px] pl-[16px]"
                />
                <input
                  type="email"
                  placeholder="Email:"
                  className="outline-none bg-[#32323F] rounded-[8px] md:w-[473px] w-[370px] md:h-[62px] h-[50px] pl-[16px]"
                />
                <input
                  type="text"
                  placeholder="Message:"
                  className="outline-none bg-[#32323F] rounded-[8px] md:w-[473px] w-[370px] md:h-[98px] h-[70px] pl-[16px]"
                />
                <button className="w-[174px] font-medium h-[50px] bg-[#7562E0] rounded-[8px]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="pb-[32px]">
          <div className="flex md:gap-[70px] gap-[10px] mt-[157px] md:pl-[136px] pl-[30px]">
            <p className="text-[#8C8C94] font-medium md:text-[16px] text-[10px]">
              @2022 Jayjay Dinero Dinero
            </p>
            <p className="text-[#8C8C94] font-medium md:text-[16px] text-[10px]">
              Fullstack Developer
            </p>
            <p className="text-[#8C8C94] font-medium md:text-[16px] text-[10px]">
              UI Designer
            </p>
            <p className="text-[#8C8C94] font-medium md:text-[16px] text-[10px]">
              Data Analyst
            </p>
            <p className="text-[#8C8C94] font-medium md:text-[16px] text-[10px]">
              Designed by @ernestechie
            </p>
          </div>
          {data.map((item, i) => (
            <div className="mt-[15px] flex gap-[18.67px] md:pl-[136px] pl-[30px]" key={i}>
              <a href={item.socialLinks.git.path}>
                <FaGithub className="text-[#7562E0] md:w-[32px] w-[22px] md:h-[32px] h-[22px]" />
              </a>
              <a href={item.socialLinks.linkedin.path}>
                <FaLinkedin className="text-[#7562E0] md:w-[32px] w-[22px] md:h-[32px] h-[22px]" />
              </a>
              <a href={item.socialLinks.telegram.path}>
                <FaTelegram className="text-[#7562E0] md:w-[32px] w-[22px] md:h-[32px] h-[22px]" />
              </a>
            </div>
          ))}
        </footer>
      </div>
    </div>
  );
}

export default App;
