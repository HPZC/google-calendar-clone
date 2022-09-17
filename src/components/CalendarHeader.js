import dayjs from "dayjs";
import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-3 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-3xl font-bold text-white fond-bold">
        TIMELY 
      </h1>
     
      
      <button
        onClick={handleReset}
        className="hover:bg-white hover:text-black transition-all ease-in-out border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer rounded-full bg-white  text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <h2 className="mb-1 text-2xl text-white font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer  rounded-full bg-white text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      
      <h1 className="px-2 pb-1">Slogan - </h1>
      
      <div className="text-3xl pb-1">
      <Typewriter
            
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Scheldule Your Time ")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Use Time Wisely")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Time Wait For No Man")
                .start();

            }}

          />
      </div>
      
    </header>
  );
}
