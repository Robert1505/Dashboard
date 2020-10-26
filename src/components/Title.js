import React from 'react'

export default function Title(props) {
    return (
        <div className = "text-6xl font-black text-center mb-10">
            {props.title}
        </div>
    )
}
