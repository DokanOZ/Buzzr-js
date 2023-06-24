'use client'

import React, { use } from 'react';

interface button{
  label: string,
  color: string,
  onlcick: any
}

export default function PrinmaryButton(props: button) {
  return (
    <button onClick={props.onlcick} className={`text-white py-1 px-3 rounded-md  ${props.color} shadow-md active:shadow-sm active:scale-95 transition-all duration-100 ease-in-out active:shadow-inner`}>
      {props.label}
    </button>
  )
}
