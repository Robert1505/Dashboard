import React from 'react'

export default function Card(props) {
    return (
        <div className = "border-black border-2 py-8 px-16 rounded text-2xl font-bold card">
            {props.label}  {props.suma}$
        </div>
    )
}
