import React,{useContext,useState} from 'react';
import { MenuContext } from '../context/MenuContext';
const setSelectedMenu = (item,index,setIndex,totalPrice,setTotalPrice,setSubMenu,length,order,setOrder)=>{
    const {subMenu,price} = totalPrice;
    const newPrice = price + (item.price || 0);
    const newSubMenu = [...(subMenu || []),item.name];
    setTotalPrice({...totalPrice,subMenu:newSubMenu});
    setIndex(index+1);
    
    if((index+1) >= length){
        setSubMenu([]);
        
        const newOrder = [...order,{...totalPrice,subMenu:newSubMenu}];
        console.log(newOrder);

        setOrder(newOrder);
    }
        
}
const SubMenu = (props) => {
    const {sub} = props;
    const [index,setIndex] = useState(0);
    const {mainMenu,totalPrice,setTotalPrice,setSubMenu,order,setOrder} = useContext(MenuContext);
    const curentSubMenu = mainMenu.filter(item=>sub.some(menu=>menu===item.key));
    const menu = curentSubMenu[index] || {items:[]};
    const length = sub.length;
    return (
        <div className='subMenu'>
            {
                menu.items.map(item=>(
                    <div className='menu__button' onClick={setSelectedMenu.bind(this,item,index,setIndex,totalPrice,setTotalPrice,setSubMenu,length,order,setOrder)}>
                        <img src={item.image}/>
                        <p>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default SubMenu;
