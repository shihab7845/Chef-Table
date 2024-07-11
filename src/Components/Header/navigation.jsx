import React from 'react';
import { BsPeople } from 'react-icons/bs';

export default function Navigation() {
    return (
        <div className="flex justify-around items-center m-8">
            <h1 className="text-4xl font-bold">Recipe Calories</h1>
            <div className="flex justify-between items-center w-1/3 text-xl font-semibold">
                <h3>Home</h3>
                <h3>Recipes</h3>
                <h3>About</h3>
                <h3>Search</h3>
            </div>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 w-[260px]">
                <BsPeople className="text-gray-500" />
                <input
                    type="text"
                    placeholder="Search"
                    className="ml-2 w-full border-none focus:outline-none"
                />
            </div>
        </div>
    );
}
