import { FC, memo } from "react"
import { ReposetoryItem } from "../types"
import { Item, Segment } from "semantic-ui-react"
import ReposetoriesItem from "./ReposetoriesItem"

interface ReposetoriesProps {
    items: ReposetoryItem[]
    onFollow: (item: ReposetoryItem) => void
}

const Reposetories: FC<ReposetoriesProps> = ({ items, onFollow }) => {
    if (!items.length) return (
        <Segment>
            No Repositories, please start to search them and add to someone to follow
        </Segment>
    )

    return (
        <Segment>
            <Item.Group divided>
                {items.map((item) => (
                    <ReposetoriesItem key={item.id} onFollow={onFollow} {...item} />
                ))}
            </Item.Group>
        </Segment>
    )
}

export default memo(Reposetories)