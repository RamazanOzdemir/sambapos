import React,{useContext} from 'react';
import { MenuContext } from '../context/MenuContext';

const AllMenu = () => {
    const {mainMenu,setSelected,setSubMenu} = useContext(MenuContext)
    return (
        <div className='allMenu'>
            {mainMenu.map(menu=>(
                <button onClick={()=>{setSelected(menu.key); setSubMenu([]);}} key={menu.key+'button'+menu.orderTag}>
                    {menu.orderTag || 'İndirimli Menüler'}
                </button>
            ))}
        </div>
    )
}

export default AllMenu;
