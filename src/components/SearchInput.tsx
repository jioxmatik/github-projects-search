import { FC, memo, useCallback } from "react";
import { Input } from "semantic-ui-react";

interface SearchInputProps {
    onChange: (value: string) => void
    isLoading: boolean
}

const SearchInput: FC<SearchInputProps> = ({ onChange, isLoading }) => {
    const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event
        onChange(value)
    }, [onChange])

    return <Input placeholder="Search" loading={isLoading} icon='search' onChange={handleSearch} />
}

export default memo(SearchInput)