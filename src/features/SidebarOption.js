import React from 'react'
import "./SidebarOption.css"

function SidebarOption({ Icon, title, number, selected }) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <span>{Icon}</span>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
