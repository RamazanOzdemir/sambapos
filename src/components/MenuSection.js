import React,{useContext} from 'react';
import Menu from './Menu';
import {MenuContext} from '../context/MenuContext';
import SubMenu from './SubMenu';


 const MenuSection = ()=> { 
    const {menu,selected,subMenu,mainMenu,description} = useContext(MenuContext); 
    const curentMenu = mainMenu.some(element=>(element.key===selected))?mainMenu: menu;
    const selectedMenu = curentMenu.filter(element=>(element.key===selected || element.name===selected));
    const menuArray =  selectedMenu[0] === undefined ? [] : selectedMenu[0].items || subMenu ;

    return (
        <div className='menu__select'>
            <div className='description'>
                <p>{(!selectedMenu[0]? [] : selectedMenu[0].description)||(subMenu[0]?description:'')}</p>
            </div>
            <div className='menu__section' >
            {   !subMenu[0]?
                menuArray.map((menu,index)=>(
                    <Menu key={menu.image+''+index}  menu={menu}/>
                ))
                : <SubMenu sub={subMenu}/>
            }
            </div>
        </div>

    )
}

export default MenuSection;
