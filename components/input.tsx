'use client';

import clsx from "clsx";
import { useState } from "react";

export default function InputItem(){
  const [value, setValue] = useState("");
  const handleChange =  (e:React.ChangeEvent<HTMLInputElement>)=>{
    const val = e.target.value;

    if (val === "" || val.trim() !== "") {
      setValue(val);
    }
  }


  return (
    <div className="group flex items-center gap-2  py-4 px-6 rounded-md bg-(--color-dev-gray100)">
      <input 
        type="text" 
        placeholder="Placeholder" 
        className={clsx(
          "font-medium flex-1 bg-transparent outline-none group-hover:text-(--color-dev-gray800)",
          value ? "text-(--color-dev-gray600)" : "text-(--color-dev-gray300)"
        )} 
        onChange={handleChange} 
        value={value}/>
      <button className={clsx(
        "font-bold group-hover:text-(--color-dev-primary)",
        value ? "text-(--color-dev-primary) cursor-pointer" : "text-(--color-dev-gray400)"
      )}>추가</button>
    </div>

  )
}