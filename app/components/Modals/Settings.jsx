"use client"

import { useState } from "react"

import ColorPicker from '../ColorPicker'
import useTheme from "../../context/useTheme";

import '../../styles/style2.css'
import { RiResetRightFill } from "react-icons/ri";

const Settings = ({ toggleSettings }) => {
    const [closeSetting, setCLoseSettings] = useState(false);
    const toggleSettingsFUN = () => {
        setCLoseSettings(true)
        setTimeout(() => {
            toggleSettings()
        }, 250)
    }
    const { color1,resetAll, color2,opacity,changeOpacity , mode, changeMode, changeColorBack, changeColorFront } = useTheme();
    return (
        <div
            onClick={toggleSettingsFUN}
            className="fixed z-10 FCC inset-0 bg-[rgba(0,0,0,0.9)] TD "
            >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${mode === 'light' ? "bg-slate-200 text-black" : 'bg-slate-700 text-white'} ${!closeSetting ? "openSetting" : "closeSetting"} w-[70%] sm:w-[400px] rounded-3xl py-7 px-1 sm:px-7 FCC flex-col gap-6 `}
            >
                <div className="flex items-center flex-col text-sm sm:text-2xl sm:font-semibold gap-5 TD z-10">
                    <div className="FCC">
                        <p>Background Color</p>
                        <ColorPicker defaultColor={color1} changeColor={changeColorBack} />
                    </div>
                    <div className="FCC">
                        <p>Foreground Color</p>
                        <ColorPicker defaultColor={color2} changeColor={changeColorFront} />
                    </div>
                </div>
                <div className="flex TD items-center sm:justify-start sm:items-center sm:flex-row flex-col gap-3">
                    <span className="text-sm sm:text-2xl sm:font-semibold">Night Mode</span>
                    <label >
                        {mode === 'light' &&
                            <input
                                onClick={() => changeMode(mode === 'light' ? 'dark' : "light")}
                                type="checkbox"
                                className="appearance-none"
                            />
                        }
                        {mode === 'dark' &&
                            <input
                                defaultChecked
                                onClick={() => changeMode(mode === 'light' ? 'dark' : "light")}
                                type="checkbox"
                                className="appearance-none"
                            />
                        }
                        <span> <i ></i> </span>
                    </label>
                </div>
                <div>
                    <input 
                        type="range" 
                        min={0.4}
                        max={1}
                        step={0.1}
                        value={opacity}
                        className="cursor-pointer"
                        onInput={(e) => changeOpacity(e.target.value) }
                    />
                </div>
                <div className={`FCC TD gap-2 sm:text-lg cursor-pointer sm:font-semibold mt-5 ${mode === 'light' ? 'text-[red] ' : "text-[yellow]"}`}
                onClick={resetAll }
                >
                    <RiResetRightFill />
                    <span>Reset All</span>
                </div>
            </div>
        </div>
    )
}

export default Settings
