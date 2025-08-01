"use client"

import { useEffect, useState } from "react";
import { BiSolidFastForwardCircle } from "react-icons/bi"
import useTheme from "../context/useTheme";

const SlideShow = ({ slideShow, slideShowsD, href }) => {

    const { mode } = useTheme();

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        showImages(slideIndex);
    },[slideIndex])

    const showImages = (input) => {
        let images = document.getElementsByClassName('images');
        let dots = document.getElementsByClassName('dots');

        if (input > images.length - 1) {
            setSlideIndex(0);
            input = 0;
        }
        if (input < 0) {
            setSlideIndex(dots.length - 1);
            input = dots.length - 1;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }

        images[input].style.display = 'block';
        dots[input].classList.add('active')
    }

    const showImagesDots = (input) => {
        setSlideIndex(input)
        showImages(slideIndex);
    }

    const goSlide = (input) => {
        setSlideIndex(prev => prev += input);
        showImages(slideIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prev => {
                const newIndex = prev + 1;
                showImages(newIndex)
                return newIndex;
            })
        }, 3000)
        return () => clearInterval(interval);
    },[])

    return (
        <div className="FCC flex-col gap-3" >
            <div className="FCC">
                <div>
                    {slideShow.map((image) => (
                        <a href={href} key={image}
                            target="_blank">
                            <img
                                src={image}
                                alt={image}
                                className="images fade rounded-2xl TD w-[250px] sm:w-[300px] sm:h-[240px] h-[200px] lg:w-[400px] lg:h-[320px] "
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex items-center w-[80%] justify-around">
                <div className={`text-3xl rotate-180 cursor-pointer ${mode === 'light' ? '' : "text-white"}`}>
                    <BiSolidFastForwardCircle onClick={() => goSlide(-1)} />
                </div>
                <div className="FCC gap-2">
                    {slideShowsD.map((dot) => (
                        <div
                            key={dot}
                            onClick={() => showImagesDots(dot)}
                            className="dots TD w-[15px] h-[15px] rounded-full bg-black cursor-pointer"
                        />

                    ))}
                </div>
                <div className={`text-3xl cursor-pointer ${mode === 'light' ? '' : "text-white"}`}>
                    <BiSolidFastForwardCircle onClick={() => goSlide(+1)} />
                </div>
            </div>
        </div>
    )
}

export default SlideShow
