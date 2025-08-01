// "use client"

// import { createContext, useEffect, useReducer } from "react";

// export const ThemeObject = createContext();

// const ThemeFUN = (state, action) => {
//     switch (action.type) {
//         case "CHANGE_COLOR1":
//             localStorage.setItem('color1', action.payload);
//             return { ...state, color1: action.payload }
//         case "CHANGE_COLOR2":
//             localStorage.setItem('color2', action.payload);
//             return { ...state, color2: action.payload }
//         case "CHANGE_MODE":
//             localStorage.setItem('mode', action.payload);
//             return { ...state, mode: action.payload }
//         case "CHANGE_LANGUAGE":
//             localStorage.setItem('language', action.payload);
//             return { ...state, language: action.payload }
//         case "CHANGE_OPACITY":
//             localStorage.setItem('opacity', action.payload);
//             return { ...state, opacity: action.payload }
//         case "RESET_ALL":
//             return { ...state, opacity: 1, language: 'english', color2: 'white', color1: '#2f0d68', mode: 'light' }
//         default:
//             return state;
//     }
// }

// const initial = {
//     color1: "#2f0d68",
//     color2: "white",
//     mode: 'light',
//     language: "english",
//     opacity: 1
// }

// const init = () => {
//     if(typeof window === 'undefined'){
//         return initial;
//     }
//     return {
//         color1: localStorage.getItem('color1') || initial.color1,
//         color2: localStorage.getItem('color2') || initial.color2,
//         mode: localStorage.getItem('mode') || initial.mode,
//         language: localStorage.getItem('language') || initial.language,
//         opacity: Number(localStorage.getItem('opacity')) || initial.opacity,
//     };
// };

// export const ThemeFuntion = ({ children }) => {

//     const [state, dispatch] = useReducer(ThemeFUN, initial, init)

//     const changeColorBack = (inputColor1) => {
//         dispatch({ type: "CHANGE_COLOR1", payload: inputColor1 });
//     }
//     const changeColorFront = (inputColor2) => {
//         dispatch({ type: "CHANGE_COLOR2", payload: inputColor2 });
//     }
//     const changeMode = (inputMode) => {
//         dispatch({ type: "CHANGE_MODE", payload: inputMode });
//     }
//     const changeLanguage = (inputLanguage) => {
//         dispatch({ type: "CHANGE_LANGUAGE", payload: inputLanguage });
//     }
//     const changeOpacity = (inputopacity) => {
//         dispatch({ type: "CHANGE_OPACITY", payload: inputopacity });
//     }
//     const resetAll = () => {
//         localStorage.clear();
//         dispatch({ type: "RESET_ALL" })
//     }
//     return (
//         <ThemeObject.Provider value={{ ...state, resetAll, changeOpacity, changeColorBack, changeColorFront, changeMode, changeLanguage }}>
//             {children}
//         </ThemeObject.Provider>
//     )
// }
"use client"

import { createContext, useEffect, useReducer, useState } from "react";

export const ThemeObject = createContext();

const ThemeFUN = (state, action) => {
    switch (action.type) {
        // ChatGPT ---
        case "SET_THESE":
            return { ...state, ...action.payload }
        // End --
        case "CHANGE_COLOR1":
            return { ...state, color1: action.payload }
        case "CHANGE_COLOR2":
            return { ...state, color2: action.payload }
        case "CHANGE_MODE":
            return { ...state, mode: action.payload }
        case "CHANGE_LANGUAGE":
            return { ...state, language: action.payload }
        case "CHANGE_OPACITY":
            return { ...state, opacity: action.payload }
        case "RESET_ALL":
            return { ...state, opacity: 1, language: 'english', color2: 'white', color1: '#2f0d68', mode: 'light' }
        default:
            return state;
    }
}

const initial = {
    color1: "#2f0d68",
    color2: "white",
    mode: 'light',
    language: "english",
    opacity: 1
}


export const ThemeFuntion = ({ children }) => {

    const [state, dispatch] = useReducer(ThemeFUN, initial)
    // ChatGPT start
    const [ismounted, setIsmounted] = useState(false);

    useEffect(() => {
        const stored = {
            color1: localStorage.getItem('color1') || initial.color1,
            color2: localStorage.getItem('color2') || initial.color2,
            mode: localStorage.getItem('mode') || initial.mode,
            language: localStorage.getItem('language') || initial.language,
            opacity: Number(localStorage.getItem('opacity')) || initial.opacity,
        };
        dispatch({
            type: "SET_THESE", payload: {
                color1: stored.color1,
                color2: stored.color2,
                mode: stored.mode,
                language: stored.language,
                opacity: stored.opacity
            }
        });
        setIsmounted(true)
    }, []);

    useEffect(() => {
        if (!ismounted) return;

        localStorage.setItem('color1', state.color1);
        localStorage.setItem('color2', state.color2);
        localStorage.setItem('mode', state.mode);
        localStorage.setItem('language', state.language);
        localStorage.setItem('opacity', state.opacity);
    }, [state])

    if (!ismounted) return null;

    // End ChatGPT

    const changeColorBack = (inputColor1) => {
        dispatch({ type: "CHANGE_COLOR1", payload: inputColor1 });
    }
    const changeColorFront = (inputColor2) => {
        dispatch({ type: "CHANGE_COLOR2", payload: inputColor2 });
    }
    const changeMode = (inputMode) => {
        dispatch({ type: "CHANGE_MODE", payload: inputMode });
    }
    const changeLanguage = (inputLanguage) => {
        dispatch({ type: "CHANGE_LANGUAGE", payload: inputLanguage });
    }
    const changeOpacity = (inputopacity) => {
        dispatch({ type: "CHANGE_OPACITY", payload: inputopacity });
    }
    const resetAll = () => {
        localStorage.clear();
        dispatch({ type: "RESET_ALL" })
    }
    return (
        <ThemeObject.Provider value={{ ...state, resetAll, changeOpacity, changeColorBack, changeColorFront, changeMode, changeLanguage }}>
            {children}
        </ThemeObject.Provider>
    )
}