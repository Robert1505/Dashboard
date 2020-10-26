import React from 'react';
import {Link} from 'react-router-dom';

export default function Button() {
    return (
        <div className = "text-center mt-16">
            <Link to="/dashboard">
            <button className={`py-2 px-4 bg-red-700 text-white rounded hover:bg-red-600 border-2 border-black`}>
                Start
            </button>
            </Link>
        </div>
    )
}
