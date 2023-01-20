import { FC } from "react";
import { Input } from "semantic-ui-react";

interface SearchInputProps {
    onChange: (value: string) => void
    isLoading: boolean
}

const SearchInput: FC<SearchInputProps> = ({ onChange, isLoading }) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event
        onChange(value)
    }

    return <Input placeholder="Search" loading={isLoading} icon='search' onChange={handleSearch} />
}

export default SearchInput