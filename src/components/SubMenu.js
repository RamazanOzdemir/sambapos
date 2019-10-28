import React,{useContext,useState,useEffect} from 'react';
import { MenuContext } from '../context/MenuContext';
const setSelectedMenu = (item,index,setIndex,length,ctx)=>{
    const {totalPrice,setTotalPrice,setSubMenu,order,setOrder,setSelected} = ctx;
    const {subMenu,price} = totalPrice;
    const newPrice = price + (item.price || 0);
    const newSubMenu = [...subMenu ,item.name];
    // kutu kola iki defa yazmasın diye
    if(item.items === undefined)
    setTotalPrice({...totalPrice,price:newPrice,subMenu:newSubMenu});
    setIndex(index+1);
    // submenü nün altında menü varsa
    if(item.items !== undefined){
        setSubMenu(item.items);
    }
    else if((index+1) >= length){
        setSubMenu([]);
        const newOrder = [...order,{...totalPrice,price:newPrice,subMenu:newSubMenu}];
        setSelected('main');
        setOrder(newOrder);
    }
        
}
const SubMenu = (props) => {
    const {sub} = props;
    const [index,setIndex] = useState(0);
    const ctx = useContext(MenuContext);
    const {mainMenu,setDescription} = ctx;
    
    const curentSubMenu =  mainMenu.filter(item=>sub.some(menu=>menu===item.key))
    // coco cola alt menüsü için sub'ın dizi olup olmadığını kontrol ediyoruz.
    const menu = sub[0]['name']===undefined?(curentSubMenu[index] || {items:[]}):{items:sub};;
    const length = sub.length;
    useEffect(()=>{
        if(menu.description)
            setDescription(menu.description)
    });
    return (
        <div className='subMenu'>
            {
                menu.items.map(item=>(
                    <div className='menu__button' key={item.name+item.price+'submenu'} onClick={setSelectedMenu.bind(this,item,index,setIndex,length,ctx)}>
                        <img src={item.image} alt={menu.name} />
                        <p>{item.name}</p>
                        <span>{item.price}</span> 
                    </div>
                ))
            }
        </div>
    )
}

export default SubMenu;
