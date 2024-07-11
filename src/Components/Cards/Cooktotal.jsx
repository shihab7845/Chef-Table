import Cookfinal from "./Cookfinal";


export default function Cooktotal({item}) {
    

    return (
        <div>
            <div className="flex justify-around items-center">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
           

            <Cookfinal
            item={item}
            ></Cookfinal>
        </div>
    );
}
