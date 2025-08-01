"use client"

import { useEffect, useState } from "react"
import { HexColorPicker } from "react-colorful"

const ColorPicker = ({ defaultColor, changeColor }) => {
    const [color, setColor] = useState(defaultColor);
    const [showPicker, setShowPicker] = useState(false);
    const togglePicker = () => {
        setShowPicker(showPicker ? false : true);
    }
    useEffect(() => {
        changeColor(color);    
    }, [color])
    return (
        <div className="FCC p-2">
            <div
                className="FCC w-[30px] h-[30px] border-1 border-gray-200 cursor-pointer rounded-full"
                style={{ background: color }}
                onClick={togglePicker}
            >
                {
                    showPicker &&
                    <div >
                        <HexColorPicker
                            color={color}
                            onChange={setColor}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default ColorPicker
