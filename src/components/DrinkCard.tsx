
import type { Drink} from '../types'
import { useAppStore } from '../stores/useAppStore'

type DrinkCardProps = {
    drink: Drink
}




export default function DrinkCard({drink}: DrinkCardProps) {
    const selectRecipe = useAppStore(state => state.selectRecipe);
    const recipe = useAppStore(state => state.selectedRecipe);

    console.log(recipe, 'RECIPEEEE');


  return (
    <div className='border shadow-lg w-full'>
        <div className='overflow-hidden'>
            <img className='w-full hover:scale-125 transition-transform hover:rotate-2' src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`} />
        </div>
         <div className='p-5'>
            <h2 className='text-2xl truncate'>{drink.strDrink}</h2>
        </div>

        <button  
        type='button'
        className='bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg'

        onClick={()=> selectRecipe(drink.idDrink)}
        >

            Ver Receta
            
        </button> 



    </div>
  )
}

