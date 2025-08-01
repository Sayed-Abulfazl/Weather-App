"use client"

import { useEffect, useState } from "react"
import { CgMenuGridO } from "react-icons/cg"
import { FaSearch } from "react-icons/fa"
import { RiCloseLargeLine } from "react-icons/ri"
import { WiHumidity, WiWindy } from "react-icons/wi"
import Menu from "./Menu"
import Settings from "./Modals/Settings"
import About from "./Modals/About"
import Others from "./Modals/Others"

import MyClock from './MyClock'

import useTheme from '../context/useTheme'
import { BiErrorCircle } from "react-icons/bi"

const WeatherApp = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [showSettings, setShowSettings] = useState(false);

  const [showAbout, setShowABout] = useState(false);

  const [showOthers, setShowOthers] = useState(false);

  const [isText, setIsText] = useState('');

  const toggleMenu = () => {
    setShowMenu(showMenu ? false : true);
  }
  const toggleAbout = () => {
    setShowABout(showAbout ? false : true);
  }
  const toggleSettings = () => {
    setShowSettings(showSettings ? false : true);
  }
  const toggleOthers = () => {
    setShowOthers(showOthers ? false : true);
  }

  const { color1, color2, mode, opacity } = useTheme();

  const [wIcon, setWIcon] = useState('01d.png');


  let api_key = 'a83621611689899c93083638684ea2af';

  const search = async (inputCity) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=Metric&appid=${api_key}`

    let response = await fetch(url);
    let data = await response.json()

    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const location = document.getElementById('location');
    const tepm = document.getElementById('tepm');
    const disk = document.getElementById('disk');
    const min = document.getElementById('min');
    const max = document.getElementById('max');

    humidity.innerHTML = data.main.humidity + ' %';
    windSpeed.innerHTML = Math.floor(data.wind.speed) + ' km/h';
    tepm.innerHTML = Math.floor(data.main.temp);
    location.innerHTML = data.name;
    disk.innerHTML = data.weather[0].description;
    min.innerHTML = Math.floor(data.main.temp_min) + '°';
    max.innerHTML = Math.floor(data.main.temp_max) + '°';

    if (data.weather[0].icon === '01d') {
      setWIcon('01d.png')
    }
    else if (data.weather[0].icon === '01n') {
      setWIcon('01n.png')
    }

    else if (data.weather[0].icon === '02d') {
      setWIcon('02d.png')
    }
    else if (data.weather[0].icon === '02n') {
      setWIcon('02n.png')
    }

    else if (data.weather[0].icon === '03d') {
      setWIcon('03d.png')
    }
    else if (data.weather[0].icon === '03n') {
      setWIcon('03n.png')
    }

    else if (data.weather[0].icon === '04d') {
      setWIcon('04d.png')
    }
    else if (data.weather[0].icon === '04n') {
      setWIcon('04n.png')
    }

    else if (data.weather[0].icon === '09d') {
      setWIcon('09d.png')
    }
    else if (data.weather[0].icon === '09n') {
      setWIcon('09n.png')
    }

    else if (data.weather[0].icon === '10d') {
      setWIcon('10d.png')
    }
    else if (data.weather[0].icon === '10n') {
      setWIcon('10n.png')
    }

    else if (data.weather[0].icon === '11d') {
      setWIcon('11d.png')
    }
    else if (data.weather[0].icon === '11n') {
      setWIcon('11n.png')
    }

    else if (data.weather[0].icon === '13d') {
      setWIcon('13d.png')
    }
    else if (data.weather[0].icon === '13n') {
      setWIcon('13n.png')
    }

    else if (data.weather[0].icon === '50d') {
      setWIcon('50d.png')
    }
    else if (data.weather[0].icon === '50n') {
      setWIcon('50n.png')
    }

    else {
      setWIcon('01d.png')
    }
  }

  const getCityAndSearch = () => {
    const city = document.getElementById('city');
    if (city.value === '') {
      setShowError(true);
      city.style.borderColor = 'red';
      setTimeout(() => {
        city.style.borderColor = 'transparent'
        setShowError(false)
      },2000)
      return 0;
    }
    search(city);
  }

  // useEffect(() => {
  //   search('Mazar-e-Sharif');
  // }, [])


  const [background, setBackground] = useState('13d.jpg')

  useEffect(() => {
    if (mode === 'light') {
      setBackground('13d.jpg')
    } else {
      setBackground('01n.jpg');
    }
  }, [mode])

  const [showError , setShowError] = useState(false);
  return (
    <div className={`FCC h-screen`} >
      {
        showMenu && <Menu toggleSettings={toggleSettings} toggleAbout={toggleAbout} toggleOthers={toggleOthers} toggleMenu={toggleMenu} />
      }
      {
        showSettings && <Settings toggleSettings={toggleSettings} />
      }
      {
        showAbout && <About toggleAbout={toggleAbout} />
      }
      {
        showOthers && <Others toggleOthers={toggleOthers} />
      }
      <div className="w-[100%] TD h-[100%] absolute z-[-1] ">
        <img
          src={background}
          className="w-[100%] fade TD h-[100%]"
        />
      </div>
      <div
        style={{ background: color1, color: color2, opacity }}
        className="FCC flex-col gap-5 w-[80%] sm:w-[60%] lg:w-[40%] px-4 pt-5 pb-9 rounded-lg shadow-2xl TD">
        <div className="flex justify-between items-center w-[100%]">
          <div
            onClick={toggleMenu}
            className={`cursor-pointer rounded-2xl FCC hover:bg-[rgba(255,255,255,0.5)] text-2xl TD sm:text-3xl lg:text-4xl`} >
            <CgMenuGridO />
          </div>
          <div>
            <MyClock />
          </div>
        </div>
        <div className="FCC text-sm sm:text-lg lg:text-xl sm:font-bold font-semibold w-[80%] lg:w-[60%] TD">
          {
            isText &&
            <RiCloseLargeLine
              onClick={() => setIsText('')}
              className="cursor-pointer translate-x-[20px] sm:translate-x-[25px]"
              style={{ color: color1 }}
            />
          }
          { showError &&
            <BiErrorCircle 
              className="text-red-600 translate-x-[25px] text-lg"
            />
          }
          <input
            type="text"
            value={isText}
            id="city"
            onChange={(e) => setIsText(e.target.value)}
            placeholder="Search..."
            autoFocus
            style={{ background: color2, color: color1 }}
            autoComplete="off"
            className="font-serif TD rounded-2xl border-2 shadow-2xl shadow-[rgba(255,255,255,0.1)] border-transparent w-[100%] outline-none px-9 py-2"
          />
          <FaSearch onClick={getCityAndSearch} style={{ color: color1 }} className="cursor-pointer translate-x-[-30px] text-xl" />
        </div>
        <div>
          <img src={wIcon} />
        </div>

        <div className="flex gap-2 justify-center flex-col w-[100%] ">
          <div className="flex justify-center">
            <p className="sm:text-lg lg:text-xl text-sm font-semibold " id="location">Mazar-e-Sharif</p>
          </div>
          <div className="flex justify-center gap-7 items-center py-3 ">
            <p>
              <span className="sm:text-7xl text-5xl" id="tepm">24</span>
              <sup className="text-3xl sm:text-5xl">℃</sup>
            </p>
            <div className="flex flex-col gap-2 items-end">
              <p id="disk">Sunny</p>
              <p className="flex gap-1">
                <span id="max">38°</span>
                <span>/</span>
                <span id="min">27°</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around sm:w-[80%] lg:w-[60%] w-[100%] mt-4">

          <div className="flex justify-center items-start">
            <WiHumidity className="text-3xl sm:text-5xl" />
            <div className="flex justify-center gap-1 items-center flex-col">
              <p id="humidity">64%</p>
              <p className="font-light sm:font-semibold">Humidity</p>
            </div>
          </div>

          <div className="flex justify-center items-start">
            <WiWindy className="text-3xl sm:text-5xl" />
            <div className="flex justify-center gap-1 items-center flex-col">
              <p id="windSpeed">18 Km/h</p>
              <p className="font-light sm:font-semibold">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
