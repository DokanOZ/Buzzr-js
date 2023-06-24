import React from "react";

interface UserTime{
    time: string,
    name: string,
    teamName: string,
    isVisible: boolean
}

export default function UserTime(props:UserTime) {
  return (
    <li className={`flex flex-row justify-between items-center bg-slate-100 rounded-md px-8 py-4 w-full shadow-md  transition-all ease-in-out duration-700 ${ props.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-96  opacity-0' }`}>
      <div className="flex flex-col justify-center">
        {props.name}
        <span className="text-sm text-slate-400">{props.teamName}</span>
      </div>
      <div>{props.time}</div>
    </li>
  );
}
