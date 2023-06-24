"use client";

import ScrollContainer from "react-indiana-drag-scroll";
import PrinmaryButton from "./components/Buttons/PrimaryButton";
import { useEffect, useState } from "react";
import TeamList from "./components/TeamList/TeamList";
import LoadingList from "./components/Loading/LoadingList";
import UserTime from "./components/User/UserTime";
import { SelectMultiple } from "./components/Select/SelectMultiple";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [itemView, setItemView] = useState(false);
  const [view, setView] = useState();
  const [points, setPoints] = useState();
  const [showUserList, setShowUserList] = useState(false);
  const [value, setValue] = useState('');
  let filteredList:any

  const timeList = [
    {
      name: "Dokhan",
      time: "3s",
      teamName: "De Ottomanen",
    },
    {
      name: "Jeff",
      time: "3.2s",
      teamName: "De Puzzelaars",
    },
    {
      name: "Meneertje",
      time: "4s",
      teamName: "Koekje",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
    {
      name: "Koekepeertje",
      time: "4.7s",
      teamName: "Kanker",
    },
  ];

  const updateList = () => {
    setItemView(true);
  };

  const resetList = () => {
    setItemView(false);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }
  

  return (
    <main className="w-screen h-screen px-[5em] py-[3em] grid grid-cols-3 grid-rows-1">
      <section className="w-[30em]  h-full shadow-md">
        <div className=" flex flex-row items-center justify-around bg-slate-400 px-8 py-4 rounded-t-lg">
          <p className="font-mono  font-semibold text-3xl text-white">
            Buzztimes
          </p>
          <div className="grid grid-cols-2 gap-5">
            <PrinmaryButton
              label="Update"
              color="bg-indigo-400"
              onlcick={updateList}
            />
            <PrinmaryButton
              label="Reset"
              color="bg-red-400"
              onlcick={resetList}
            />
          </div>
        </div>
        <ScrollContainer className="bg-slate-300 p-6 rounded-b-lg h-[50em] overflow-y-scroll overflow-x-hidden scrollbar-hide flex flex-col gap-4">
          {timeList.map((item, index) => {
            return (
              <UserTime
                key={index}
                name={item.name}
                time={item.time}
                teamName={item.teamName}
                isVisible={itemView}
              />
            );
          })}
        </ScrollContainer>
      </section>
      <section className="w-[30em]  h-full text-black flex flex-col items-center gap-44">
        <div className="w-full">
          <div className="flex flex-row items-center justify-around bg-slate-400 px-8 py-4 rounded-t-lg">
            <p className="font-mono  font-semibold text-3xl text-white">
              Points
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-slate-300 py-6 rounded-b-md shadow-md h-full">
            <SelectMultiple />
            <div className="w-full flex flex-row items-center justify-evenly py-6 ">
              <div className="flex flex-col items-start gap-4">
                <p>Quick add:</p>
                <div className="flex flex-row items-center gap-4">
                  <PrinmaryButton
                    label="-15"
                    color="bg-indigo-400"
                    onlcick={() => ""}
                  />{" "}
                  <PrinmaryButton
                    label="+15"
                    color="bg-indigo-400"
                    onlcick={() => ""}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p>Custom Value:</p>
                <div className="flex flex-row items-center gap-4">
                  <input
                    placeholder="Value"
                    className="border-[1px] border-gray-300 px-4 py-[0.28em] focus:outline-none rounded-md w-28"
                    type="number"
                    onChange={(e: any) => setPoints(e.target.value)}
                  />
                  <PrinmaryButton
                    label="Add"
                    color="bg-indigo-400"
                    onlcick={() => ""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-row items-center justify-around bg-slate-400 px-8 py-4 rounded-t-lg">
            <p className="font-mono  font-semibold text-3xl text-white">
              Users
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-slate-300 py-6 rounded-b-md shadow-md">
            <div className="w-full flex flex-row items-start justify-evenly py-6 ">
              <div className="h-full w-[10em]">
                <input placeholder="Username" value={value} onClick={() => setValue('')} onFocus={() => setShowUserList(!showUserList)} onBlur={() => setShowUserList(!showUserList)} onChange={handleChange} className="border-[1px] w-full border-gray-300 px-4 py-[0.28em] focus:outline-none rounded-md w-28 peer" type="text" name="" id="" />
                <ul className={`${showUserList ? 'h-[12em]' : 'h-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
                  {
                    timeList.filter((item) => {
                      if(value === ""){
                          return item;
                      }
                      else if(item.name.toLowerCase()
                              .includes(value.toLowerCase())){
                          return item
                      }
  
                  }).map((item, index) => (
                      <li key={index} onClick={() => setValue(item.name)}  className="hover:bg-slate-200 px-2 py-1 hover:cursor-pointer">
                        {item.name}
                      </li>
                  ))
                  }
                </ul>
              </div>
              <PrinmaryButton label="Ban" color="bg-red-400" onlcick={() => ''} />
              <PrinmaryButton label="Unban" color="bg-emerald-400" onlcick={() => ''} />
              <PrinmaryButton label="Unban All" color="bg-emerald-600" onlcick={() => ''} />
            </div>
          </div>
        </div>
      </section>
      <section className="w-[30em]  h-full shadow-md">
        <div className=" flex flex-row items-center justify-around bg-slate-400 px-8 py-4 rounded-t-lg">
          <p className="font-mono  font-semibold text-3xl text-white">Teams</p>
        </div>
        <div className="bg-slate-300 p-6 rounded-b-lg h-[50em] shadow-inner flex flex-col gap-4 overflow-scroll overflow-x-hidden scrollbar-hide">
          <TeamList />
        </div>
      </section>
    </main>
  );
}
