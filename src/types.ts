export interface SearchOwner {
    avatar_url: string
}
export interface SearchItem {
    id: string
    full_name: string
    description: string
    stargazers_count: number
    owner: SearchOwner
    language: string
    html_url: string
}
export interface SearchData {
    items: SearchItem[]
    incomplete_results: boolean
    total_count: number
}
export interface ReposetoryItem {
    id: string
    url: string
    title: string
    description: string
    stargazers: number
    avatar: string
    language: string
    isFavorite: boolean
}
