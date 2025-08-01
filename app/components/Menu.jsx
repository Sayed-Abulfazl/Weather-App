import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiSettings4Fill, RiShareForward2Fill } from "react-icons/ri";
import '../styles/style1.css'
import { useState } from "react";
import useTheme from "../context/useTheme";
const Menu = ({ toggleMenu, toggleSettings,toggleAbout, toggleOthers }) => {
  
  const [closeMenu, setCloseMEnu] = useState(false);

  const { mode, opacity } = useTheme();

  const showingSettingsAndClosingMenu = () => {
    toggleMenu()
    toggleSettings();
  }
  const showingOthersAndClosingMenu = () => {
    toggleMenu()
    toggleOthers();
  }
  const showingAboutAndClosingMenu = () => {
    toggleMenu()
    toggleAbout();
  }
  const closingMenu = () => {
    setCloseMEnu(true);
    setTimeout(() => {
      toggleMenu()
    }, 1000)
  }
  return (
    <div
      onClick={closingMenu}
      className={`${closeMenu ? "closeMenuBack" : "openMenuBack"} fixed inset-0 z-30 ${mode === 'light' ? 'bg-[rgba(0,0,0,0.8)]' : "bg-[rgba(255,255,255,0.5)]"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${closeMenu ? "closeMenuFront" : "openMenuFront"} flex flex-col w-[80%] pt-3 pb-13 sm:pb-11 lg:pb-16 transition-all duration-500 sm:w-[400px] ${mode === 'light' ? 'bg-white' : "bg-black"} rounded-br-full`}
      >
        <div className="FCC mb-4">
          <div className={`box overflow-hidden relative FCC w-[220px] h-[150px] `}>
            <div className={`absolute top-0 left-0 h-[100%] z-10 w-[4px] ${mode === 'light' ? 'lightBar1' : "lightBar2"} rounded-3xl`}></div>
            <div className={`absolute top-0 left-0 h-[100%] w-[100%] ${mode === 'light' ? 'topLayer1' : "topLayer2"}`}></div>
            <p className={`text-2xl sm:font-semibold ${mode === 'light' ? 'text1' : "text2"} `}>Wethear App</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 text-sm sm:font-semibold font-light font-serif sm:text-lg lg:text-xl">

          <div className={`FCC gap-2 ${mode === 'light' ? "bg-slate-100 text-black" : "bg-slate-700 text-white"} px-3 py-1 sm:pr-7 lg:pr-13 sm:py-2 rounded-tr-2xl rounded-br-2xl`}>
            <div className="spinAnimate">
              <RiSettings4Fill />
            </div>
            <div onClick={showingSettingsAndClosingMenu}>
              <span className=" cursor-pointer">Settings</span>
            </div>
          </div>

          <div className={`FCC gap-2 ${mode === 'light' ? "bg-slate-100 text-red-700" : "bg-slate-700 text-yellow-300"} px-3 py-1 sm:pr-7 lg:pr-13 sm:py-2 rounded-tr-2xl rounded-br-2xl`}>
            <div className="bounceAnimate">
              <IoMdHelpCircleOutline />
            </div>
            <div onClick={showingAboutAndClosingMenu}>
              <span className=" cursor-pointer">About Us</span>
            </div>
          </div>

          <div className={`FCC gap-2 ${mode === 'light' ? "bg-slate-100 text-green-600" : "bg-slate-700 text-cyan-400"} px-3 py-1 sm:pr-7 lg:pr-13 sm:py-2 rounded-tr-2xl rounded-br-2xl`}>
            <div className={`${mode === 'light' ? 'goAnimate1' : "goAnimate2"}`}>
              <RiShareForward2Fill />
            </div>
            <div onClick={showingOthersAndClosingMenu}>
              <span className=" cursor-pointer">Other Apps</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Menu
