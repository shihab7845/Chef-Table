
import Cookform from "./Cookform";

export default function Cooktable({cookitems,count}){
    console.log(cookitems);

       return (
        <div>
            <h1>Want to cook:{cookitems.length}</h1>

            <div className="flex justify-around items-center">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            
       
            {
                cookitems.map((item,index) => <Cookform
                    key={index}
                    item={item}
                    count={count}
                ></Cookform>)
            }

        </div>
    )
}