import { FC } from "react";
import { Button, Item, Label } from "semantic-ui-react";
import { ReposetoryItem } from "../types";

interface ReposetoriesItemProps extends ReposetoryItem {
    onFollow: (item: ReposetoryItem) => void
}

const ReposetoriesItem: FC<ReposetoriesItemProps> = (item) => {
    const { avatar, title, description, language, stargazers, url, isFavorite, onFollow } = item

    return (
        <Item>
            <Item.Image size="tiny" src={avatar} />
            <Item.Content>
                <Item.Header as='a' href={url} target="_blank">{title}</Item.Header>
                <Item.Description>{description}</Item.Description>
                <Item.Meta>{language}</Item.Meta>
                <Item.Extra>
                    <Button primary={!isFavorite} floated='right' onClick={() => onFollow(item)}>{isFavorite ? 'Unfollow' : 'Follow' }</Button>
                    <Label icon='star' floated="right" content={stargazers} />
                </Item.Extra>
            </Item.Content>
        </Item>

    )
}

export default ReposetoriesItem