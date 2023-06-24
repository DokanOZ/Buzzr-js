import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import TeamItem from "../User/TeamItem";

const team = [
    {
        name: 'Dokan',
        status: 'banned'
    },
    {
        name: 'Ruben',
        status: ''
    },
    {
        name: 'Sjellie',
        status: ''
    },
    {
        name: 'Evi',
        status: 'banned'
    },
]

export default function TeamList() {
  const [isExtended, setIsExtended] = useState(false);
  

  return (
    <article className={`${isExtended ? "shadow-md" : "shadow-none"}`}>
      <header
        onClick={() => {
          setIsExtended(!isExtended);
        }}
        className={`${
          isExtended ? " shadow-none " : " shadow-md "
        } overflow-hidden duration-100  transition-all  ease-in-out flex flex-col items-center justify-between row w-full px-8 py-4  hover:cursor-pointer bg-slate-100 rounded-md`}
      >
        <div className="w-full flex flex-row items-center justify-between">
            <div>
            <p>De Ottomanen</p>

            <p className="text-sm text-slate-400">69 pts</p>
            </div>

            <IoIosArrowDown
            className={`${
                isExtended ? "rotate-180" : "rotate-0"
            } overflow-hidden  transition-all duration-300 ease-in-out `}
            />
        </div>
        

        <div
          className={`${
            isExtended ? "h-[10em] mt-4 opacity-100" : "h-0 opacity-0"
          } overflow-hidden  transition-all duration-700 ease-in-out bg-slate-100 rounded-b-md grid grid-cols-2 items-center justify-center w-full`}
        >
          <div className="h-[1px] bg-slate-300 rounded-full col-span-2 " />
          <ul className="flex flex-col gap-3 col-span-2">
            {
                team.map(
                    (item, index) => {
                        return <TeamItem key={index} name={item.name} status={item.status} />
                    }
                )
            }
          </ul>
        </div>
      </header>
    </article>
  );
}
