import React,{useContext} from 'react';
import { MenuContext } from '../context/MenuContext';

const selectMenu = (menu,ctx)=>{
    const {setSelected,setMenu,totalPrice,setTotalPrice,setSubMenu,order,setOrder} = ctx;
    const {price,name,subMenus} = menu;
    if(subMenus !== undefined){
        setSubMenu(subMenus);
        const newPrice = {...totalPrice,name:menu.name,price:price,subMenu:[]}
        setTotalPrice(newPrice);
    }else{
        setMenu([menu]);
        setSelected(name);

    }
    if(menu.price !== undefined && subMenus === undefined){
        const newPrice = {...totalPrice,name:menu.name,price:price,subMenu:[]}
        setTotalPrice(newPrice);
        const newOrder = [...order,newPrice];
        setOrder(newOrder);
        setSelected('main');

     }
     else if(subMenus === undefined && menu.items === undefined)
        setSelected('main');
    
        
};
const  Menu = (props) => {
    const ctx = useContext(MenuContext);
    const {menu} = props;
    return (
        <div className='menu__button' onClick={selectMenu.bind(this,menu,ctx)}>
            <img src={menu.image} alt={menu.name}/>
            <p>{menu.name}</p>
            <span>{menu.price}</span>
        </div>
    )
}

export default Menu;
