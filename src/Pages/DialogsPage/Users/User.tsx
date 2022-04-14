import { FC } from "react";
import { NavLink } from "react-router-dom";


interface IUser {
    name: string,
    id: number
}

export const User: FC<IUser> = ({ name,id }) => {
    return (
        <NavLink to={`'/dialogs/${id}`}>{name}</NavLink>
    )
}