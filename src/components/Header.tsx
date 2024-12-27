import  {
  useEffect,
  useMemo,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });

  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // const handleClick = (category:any)=> {
  //     console.log(category, 'prueba');
  // }

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  console.log(searchFilters, "search");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO: Validar 

    if (Object.values(searchFilters).includes('')) {
      console.log('todos los campos son obligatorios');
      return
    }
  
    //Consultar las recetas;

    searchRecipes(searchFilters)






  };

  return (
    <header
      className={
        isHome ? "bg-header-dark bg-cover bg-bottom   " : "bg-slate-800"
      }
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>

          <nav className="flex gap-5 uppercase">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold "
                  : "text-white  font-bold "
              }
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold "
                  : "text-white  font-bold "
              }
              to="/favorite"
            >
              {/* Favoritos */}
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="md:w-1/2 xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onClick={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg "
              >
                Nombre o Ingredientes
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none "
                placeholder="Nombre o Ingredientes. Ej. Vodka, Tequila, Coffee"
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg "
              >
                Categoría
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none "
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option value="">--Seleccione--</option>

                {categories.drinks.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                    // onClick={()=> handleClick(category.strCategory)}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="submit"
              value="Buscar Recetas"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full rounded-lg uppercase p-2"
            />
          </form>
        )}
      </div>
    </header>
  );
}
