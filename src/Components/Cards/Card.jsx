export default function Card({card,handleBtn}) {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = card;
  
    
  
    return (
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={recipe_image} alt={recipe_name} />
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-2">{recipe_name}</h1>
          <p className="text-gray-700 mb-4">{short_description}</p>
          <hr className="mb-4" />
          <h2 className="text-lg font-medium mb-2">Ingredients: {ingredients.length}</h2>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <hr className="mb-4" />
          <div className="flex justify-between text-gray-700 mb-4">
            <p className="flex-1">{preparing_time}</p>
            <p className="flex-1 text-right">{calories} calories</p>
          </div>
          <button 
            onClick={()=>{handleBtn(card)}}
            className="w-full py-2 bg-green-400 text-white text-xl font-semibold rounded-lg hover:bg-green-500 transition duration-300">
            Want to Cook
          </button>
        </div>
      </div>
    );
  }
  