import useAxios from "axios-hooks"
import { Dispatch, SetStateAction, useDeferredValue, useEffect, useState } from "react"
import { ReposetoryItem, SearchData, SearchItem } from "../types"
import useDebounce from "./useDebounce "

function parceSearchItem(item: SearchItem, favoriteItems: ReposetoryItem[]): ReposetoryItem {
    const {
        full_name: title, html_url: url, stargazers_count: stargazers, owner: { avatar_url: avatar }, ...rest
    } = item
    const isFavorite = favoriteItems.some(favoriteItem => favoriteItem.id === item.id)
    return {
        ...rest, url, title, stargazers, avatar, isFavorite,
    }
}

function useSearch(favoriteItems: ReposetoryItem[]): [ReposetoryItem[], boolean, Dispatch<SetStateAction<string>>] {
    const [search, setSearch] = useState('')

    const searchParams = new URLSearchParams()
    searchParams.set('q', search)

    const [{ data, loading }, fetch] = useAxios<SearchData>(
        `https://api.github.com/search/repositories?${searchParams}`, {
            autoCancel: true,
            manual: true,
        }
    )

    const debouncedSetSearch = useDebounce(setSearch)

    useEffect(() => {
        if (search) fetch();
    }, [search])

    return [data?.items.map((item) => parceSearchItem(item, favoriteItems)) ?? [], loading, debouncedSetSearch]
}

export default useSearch