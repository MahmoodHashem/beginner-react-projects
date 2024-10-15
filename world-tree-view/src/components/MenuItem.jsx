/* eslint-disable react/prop-types */

import { useState } from "react";
import MenuList from "./MenuList";
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
export default function MenuItem({ item }) {
    
    const [display, setDisplay] = useState({});

    function toggle(current) {
        setDisplay(prev => {
            return {
                ...prev,
                [current]: !prev[current]
            }
        })
    }
    return (
        <>
            <li>
                <button className={`${display[item.name] ? "active" : ""} parent`} onClick={item.children?.length > 0 ? () => toggle(item.name) : null} >
                    {item.children?.length > 0 && (display[item.name] ? <img src={minus} alt='plus' /> : <img src={plus} alt="plus" />)}
                    <p>{item.name}</p>
                </button>

                {
                    item && item.children && item.children.length > 0 && display[item.name] ?
                        <MenuList list={item.children} />
                        :
                        null
                }
            </li>
        </>
    )
}