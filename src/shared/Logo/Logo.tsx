import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/logo.png";
import logoLightImg from "images/logo-light.png";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img ="https://media.licdn.com/dms/image/C510BAQFMaf_J0Y12Bg/company-logo_200_200/0/1550667674281?e=2147483647&v=beta&t=6bWuAOKp5you4g0F7mV8hflQQ7znvAjyb0K1Dau2_TI",
  imgLight = logoLightImg ||
    "https://media.licdn.com/dms/image/C510BAQFMaf_J0Y12Bg/company-logo_200_200/0/1550667674281?e=2147483647&v=beta&t=6bWuAOKp5you4g0F7mV8hflQQ7znvAjyb0K1Dau2_TI",
  className = "w-12",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {/* <LogoSvgLight />
      <LogoSvg /> */}
      {/* {<img src="../../images/logos/Gethnaa_Logo_Temp.png" alt="logo" />} */}

      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <img
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          src={img }
          alt="Logo"
          style={{height:"100px", width:"100px"}}
          // height="100px"
          // width="80px"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-12 dark:block"
          src={imgLight}
          alt="Logo-Light"
        />
      )}
    </Link>
  );
};

export default Logo;
