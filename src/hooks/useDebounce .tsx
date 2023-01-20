import { useCallback, useEffect, useRef } from "react"

function useDebounce<T extends ((...args: any) => any)>(func: T, delay = 300) {
    const timer = useRef(0)

    const debounced = (...args: any) => {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => func(...args), delay)
    }

    useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    return useCallback<(...args: Parameters<T>) => ReturnType<T>>(debounced as (...args: Parameters<T>) => ReturnType<T>, [func, delay])
}

export default useDebounce