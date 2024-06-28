import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import {useState,useEffect} from 'react'

function App() {

  const [theme,setTheme]  = useState("light");

  const darkTheme = () => {
    setTheme("dark")
  }

  const lightTheme = () => {
    setTheme("light")
  }

  useEffect(
    () => {
      let a = document.querySelector('html').classList;
      a.remove("dark","light");
      a.add(theme);
    },[theme]
  )



  return (
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
