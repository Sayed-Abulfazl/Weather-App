"use client"

import { useState } from "react"

import SlideShow from '../SlideShow'

import useTheme from "../../context/useTheme";

const Others = ({ toggleOthers }) => {
    
    const slideShows1 = ['./bc3.png', 'bc2.png', 'bc1.png'];
    const slideShowsD1 = [0, 1, 2];

    const [closeOthers, setCLoseOthers] = useState(false);
    const toggleOthersFUN = () => {
        setCLoseOthers(true)
        setTimeout(() => {
            toggleOthers()
        }, 250)
    }

    const { mode } = useTheme();
    return (
        <div
            onClick={toggleOthersFUN}
            className="fixed z-10 FCC inset-0 bg-[rgba(0,0,0,0.9)] TD "
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative ${mode === 'light' ? "bg-slate-100 text-black" : 'bg-slate-700 text-white'} ${!closeOthers ? "openSetting" : "closeSetting"}  rounded-3xl py-7 px-3 sm:px-7 FCC flex-col gap-6 `}
            >
                <div>
                    <SlideShow 
                        slideShow={slideShows1}
                        slideShowsD={slideShowsD1}
                        href="https://basic-calculator-next-theta.vercel.app/"
                    />
                </div>
            </div>
        </div>
    )
}

export default Others
