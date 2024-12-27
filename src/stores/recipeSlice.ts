import { StateCreator } from "zustand";
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";
import { FavoritesSliceType } from "./favoritesSlice";

// type Category = {

// se procedio a crear la carpeta de type}

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink['idDrink'])=> Promise<void>;
  closeModal: ()=> void;
};

export const createRecipesSlice: StateCreator<RecipesSliceType & FavoritesSliceType, [], [], RecipesSliceType > = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  modal: false,
  selectedRecipe: {} as Recipe,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters);

    set({
      drinks,
    });
  },

  selectRecipe: async (id: Drink['idDrink'])=> {
     const selectedRecipe = await getRecipeById(id)
    console.log(selectedRecipe, 'definimos');
    
     
    set({
        selectedRecipe, 
        modal:true
    })
  },

  closeModal: ()=> {
    set({
      modal:false, 
      selectedRecipe: {} as Recipe
    })
  }


});
