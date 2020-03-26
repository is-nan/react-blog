import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import Nav from "./config";
function NavTabs() {
    return (
        <div className="NavTabs">
            {
                Nav.map((Item)=>{
                   return <NavLink
                       to={Item.path}
                       className="NavTabs_Item"
                       activeClassName="NavTabs_ItemActive"
                       key={Item.key}
                       >{Item.name}</NavLink>
                })
            }
        </div>
    )
}

export default NavTabs