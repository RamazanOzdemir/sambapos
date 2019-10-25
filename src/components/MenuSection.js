import React,{useEffect,useContext} from 'react';
import Menu from './Menu';
import {MenuContext} from '../context/MenuContext';
import SubMenu from './SubMenu';


 const MenuSection = ()=> { 
    const {menu,selected,subMenu,mainMenu} = useContext(MenuContext); 
    const curentMenu = mainMenu.some(element=>(element.key===selected))?mainMenu: menu;
    const selectedMenu = curentMenu.filter(element=>(element.key===selected || element.name===selected));
    const menuArray =  selectedMenu[0] === undefined ? [] : selectedMenu[0].items || subMenu ;


    return (
        <div>
            <div className='description'>
                <p>{selectedMenu[0] === undefined ? [] : selectedMenu[0].description}</p>
            </div>
            <div className='menu__section' >
            {   !subMenu[0]?
                menuArray.map((menu,index)=>(
                    <Menu key={menu.image+''+index}  menu={menu}/>
                ))
                : <SubMenu sub={subMenu}/>
            }
            </div>
            <button className='complete'>
                Şiparişi Tamamla
            </button>
        </div>

    )
}

export default MenuSection;
