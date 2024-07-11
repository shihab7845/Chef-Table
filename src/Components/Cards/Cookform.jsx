import { useState } from "react";
import Cooktotal from "./Cooktotal";

export default function Cookform({ item, count }) {
    const { recipe_name, preparing_time, calories } = item;
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <>
            {!clicked && (
                <div>
                    <div className="flex justify-between space-y-4">
                        <div className="flex justify-around items-center min-w-full">
                            <p>{recipe_name}</p>
                            <p>{preparing_time}</p>
                            <p>{calories}</p>
                        </div>
                        <button
                            onClick={handleClick}
                            className="border border-green-500 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                        >
                            Preparing
                        </button>
                    </div>
                </div>
            )}
            {clicked && <Cooktotal item={item} />}
        </>
    );
}
