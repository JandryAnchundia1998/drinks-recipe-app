import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType} from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice";
import {devtools} from 'zustand/middleware'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a)=> ({

...createRecipesSlice(...a),
...createFavoritesSlice(...a),
})))