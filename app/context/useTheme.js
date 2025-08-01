"use client"

import { useContext } from "react"
import { ThemeObject } from './ThemeContext'

const useTheme = () => {
    const theme = useContext(ThemeObject)

    return theme;
}

export default useTheme
