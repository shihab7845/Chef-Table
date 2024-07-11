import { useState } from "react";


export default function Cookfinal({ item }) {
    const { recipe_name, preparing_time, calories } = item;
    
    return (
        <div>
            <div className="flex justify-around items-center min-w-full">
                <p>{recipe_name}</p>
                <p>{preparing_time}</p>
         
                <p>{calories}</p>
            </div>
        </div>
    );
}
