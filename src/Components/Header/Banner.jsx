
import backgroundImage from './Imagesonly/Rectangle1.png';

export default function Banner() {
    return (
        <div>
        <div className="bg-cover bg-center h-screen m-20  rounded-2xl" style={{ backgroundImage: `url(${backgroundImage})` }}>

           <div className=" flex flex-col justify-center items-center space-y-6 h-full">

              <h1 className="text-white text-5xl font-bold text-center">Discover an exceptional cooking <br /> class tailored for you!</h1>

              <p className='text-white text-xln text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

              <div className="flex space-x-4 p-8">
            <button className="border border-gray-300 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Button 1
            </button>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
                Button 2
            </button>

        </div>

            </div>
       </div>

        <h1 className='text-center mb-5 text-5xl font-bold'>Our Recipes</h1>
         <p className='text-center text-xl mb-5 '>Food recipes are detailed instructions for preparing and cooking delicious meals. They typically include a list of ingredients with specific quantities and step-by-step directions on how to combine and cook those ingredients to create a dish</p>

        </div>

        
    );
}
