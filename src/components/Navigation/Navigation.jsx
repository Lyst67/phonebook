import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={css.nav}>
            <NavLink to="/" end>Home</NavLink> 
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    )
}