import {StateCreator} from 'zustand';
import { Recipe } from '../types';
import { createRecipesSlice, RecipesSliceType } from './recipeSlice';



export type FavoritesSliceType = {

    favorites: Recipe[]
    handleClickFavorites: (recipe: Recipe)=> void
    favoriteExists: (id: Recipe['idDrink']) => boolean

}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorites: (recipe)=> {
        if(get().favorites.some(favorite => favorite.idDrink == recipe.idDrink)){
               set((state)=>({
                favorites: state.favorites.filter((favorite)=> favorite.idDrink !== recipe.idDrink )
               })) 
                
        }else{
            // console.log('no existe');
            
            set({
                favorites: [...get().favorites, recipe]
            })
            
        }

        createRecipesSlice(set, get, api).closeModal()
        
    }, 
    favoriteExists: (id)=> {
        return get().favorites.some(favorite => favorite.idDrink == id)
    }

})