import { FC, ReactNode, memo } from "react"
import { Link, useLocation } from "react-router-dom"
import { Container, Menu } from "semantic-ui-react"

interface Navigation {
    children: ReactNode
}

const Navigation: FC<Navigation> = ({ children }) => {
    const location = useLocation();
    const isFavorites = location.pathname.includes('favorites')
    return (
        <Menu secondary borderless as="nav">
            <Menu.Item active={!isFavorites}>
                <Link to='/'>Repositories</Link>
            </Menu.Item>
            <Menu.Item active={isFavorites}>
                <Link to='/favorites'>Favorites</Link>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    {children}
                </Menu.Item>
            </Menu.Menu>

        </Menu>
    )
}

export default memo(Navigation)