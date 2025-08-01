"use client"

import { useState } from "react"

import useTheme from "../../context/useTheme";

import { BiMailSend } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { PiPhoneCallFill } from 'react-icons/pi';

const Settings = ({ toggleAbout }) => {
    const [showDate2, setShowDate2] = useState(false);

    const toggleDate2 = () => {
        setShowDate2(showDate2 ? false : true);
    }

    const [closeAbout, setCLoseAbout] = useState(false);
    const toggleAboutFUN = () => {
        setCLoseAbout(true)
        setTimeout(() => {
            toggleAbout()
        }, 250)
    }

    const { mode } = useTheme();
    return (
        <div
            onClick={toggleAboutFUN}
            className="fixed z-10 FCC inset-0 bg-[rgba(0,0,0,0.9)] TD "
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`overflow-hidden ${mode === 'light' ? "bg-slate-100 text-black" : 'bg-slate-700 text-white'} ${!closeAbout ? "openSetting" : "closeSetting"} w-[70%] sm:w-[400px] rounded-3xl py-7 px-1 sm:px-7 FCC flex-col gap-6 `}
            >
                <div className="FCC flex-col gap-2 text-lg sm:text-xl lg:text-2xl">

                    <div className="FCC gap-2">
                        <PiPhoneCallFill />
                        <a href="tel:0093767512187" target="_blank">+93767512187</a>
                    </div>
                    <div className="FCC gap-2">
                        <BiMailSend />
                        <a href="mailto:sah.sayedabulfazl@gmail.com" target="_blank">sah.sayedabulfazl@gmail.com</a>
                    </div>
                    <div className="FCC gap-2">
                        <FaGithub />
                        <a href="https://github.com/Sayed-Abulfazl/Weather-App.git" target="_blank">Link To Github</a>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 text-sm sm:text-lg xl:text-lg">
                    <p>Version 1.0</p>
                    <span>---</span>
                    <div onClick={toggleDate2} className="cursor-pointer">
                        {
                            showDate2 &&
                            <span>1404/05/08</span>
                        }
                        {
                            !showDate2 &&
                            <span>2025/07/30</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
