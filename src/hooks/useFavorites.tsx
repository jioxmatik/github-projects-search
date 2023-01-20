import { useCallback, useState } from "react"
import { ReposetoryItem } from "../types"


function getFavoriteItemsStore(): ReposetoryItem[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]') as ReposetoryItem[]
}

function setFavoriteItemsStore(items: ReposetoryItem[]) {
    localStorage.setItem('favorites', JSON.stringify(items))
}

function useFavorites(): [ReposetoryItem[], (item: ReposetoryItem) => void] {
    const storeItems = getFavoriteItemsStore();
    const [favoriteItems, setFavoriteItems] = useState<ReposetoryItem[]>(storeItems)

    const toggleFollow = (item: ReposetoryItem) => setFavoriteItems(state => {
        let newState = state

        if (state.some(favoriteItem => favoriteItem.id === item.id)) {
            newState = state.filter(favoriteItem => favoriteItem.id !== item.id)
        } else {
         newState = [...state, {...item, isFavorite: true}]
        }
        setFavoriteItemsStore(newState)
        return newState
    })

    return [favoriteItems, useCallback(toggleFollow, [])]
}

export default useFavorites