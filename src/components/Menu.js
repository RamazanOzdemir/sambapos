import React,{useContext} from 'react';
import { MenuContext } from '../context/MenuContext';

const selectMenu = (menu,setSelected,setMenu,totalPrice,setTotalPrice,resetMenu,selectSubMenu,setSubMenu,order,setOrder)=>{
    const {price,name,subMenus} = menu;
    console.log(menu)
    if(subMenus !== undefined){
        setSubMenu(subMenus);
        const newPrice = {...totalPrice,name:menu.name,price:price}
        setTotalPrice(newPrice);
    }else{
        setMenu([menu]);
        setSelected(name);

    }
    if(menu.price !== undefined && subMenus === undefined){
        const newPrice = {...totalPrice,name:menu.name,price:price,subMenus:[]}
        setTotalPrice(newPrice);
        const newOrder = [...order,newPrice];
        setOrder(newOrder);
        setSelected('main');

     }
     else if(subMenus === undefined && menu.items === undefined)
        setSelected('main');
    
        
};
const  Menu = (props) => {
    const { setMenu,setSelected,totalPrice,setTotalPrice,resetMenu,setSubMenu,selectSubMenu,order,setOrder} = useContext(MenuContext);
    const {menu} = props;
    return (
        <div className='menu__button' onClick={selectMenu.bind(this,menu,setSelected,setMenu,totalPrice,setTotalPrice,resetMenu,selectSubMenu,setSubMenu,order,setOrder)}>
            <img src={menu.image}/>
            <p>{menu.name}</p>
        </div>
    )
}

export default Menu;
