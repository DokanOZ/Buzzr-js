import React from "react";
import { IoIosRemove } from "react-icons/io";

interface UserTeam {
  name: string;
  status: string;
}

export default function TeamItem(props: UserTeam) {
  return (
    <li className="flex flex-row items-center justify-between">
      <p>{props.name}</p>
      {props.status ? (
        <p className="text-sm text-red-400 cursor-pointer">{props.status}</p>
      ) : (
        <IoIosRemove />
      )}
    </li>
  );
}
