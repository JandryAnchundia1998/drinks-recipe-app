import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";
export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);

  const hasDinks = useMemo(() => drinks.drinks.length > 0, [drinks]);

  console.log(drinks.drinks);
  

  return (
    <>
      <h2 className="text-6xl text-center font-extrabold uppercase ">
        Recetas
      </h2>



      {hasDinks ? (
    

        <div className="grid grid-cols-1 md:grid-cols-3  2xl:grid-cols-4 gap-10 mt-10">

        {drinks.drinks.map((drink) => (
            <DrinkCard
            key={drink.idDrink}
              drink = {drink}
            />
          ))}

        </div>
 
        
      ) : (
        <p className="py-14 text-center font-bold text-2xl">
          No hay recetas, debe buscar en el formulario{" "}
        </p>
      )}
    </>
  );
}
