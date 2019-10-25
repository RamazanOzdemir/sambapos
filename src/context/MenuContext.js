import React,{createContext,useState,useEffect} from 'react';
import menuJ from '../menu.json';

export const MenuContext = createContext();
const resetMenu = (setMenu,setSubMenu)=>{
    const menuJson = JSON.stringify(menuJ);
    const menus = JSON.parse(menuJson).menus;
    console.log(menus);
    setMenu(menus);
    if(setSubMenu!==undefined)
    setSubMenu(menus);

}
const MenuContextProvider = (props) =>{
    const [mainMenu,setMainMenu] = useState([]);
    const [menu,setMenu] = useState([]);
    const [totalPrice,setTotalPrice] = useState({});
    const [order,setOrder] = useState([]);
    const [selected,setSelected] = useState('main');
    const [subMenu,setSubMenu] = useState([]);
    const selectSubMenu = (value)=>{
       setSubMenu( subMenu.filter(elmt=>value.some(item=>item===elmt.key)));
    };
    useEffect(()=>{
        const menuJson = JSON.stringify(menuJ);
        const menus = JSON.parse(menuJson).menus;
        setMenu(menus);
        setMainMenu(menus);
        console.log(order);
        
    },[setMenu,setMainMenu]);
    return (
        <MenuContext.Provider value={{mainMenu,menu,setMenu,selected,setSelected,totalPrice,setTotalPrice,resetMenu,subMenu,setSubMenu,selectSubMenu,order,setOrder}}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;
