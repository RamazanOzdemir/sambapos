import React,{useContext} from 'react';
import '../style/mainPageStyle.scss';
import MenuSection from '../components/MenuSection';
import AllMenu from '../components/AllMenu';
import { MenuContext } from '../context/MenuContext';
const MainPage = () => {
    const {order} = useContext(MenuContext);    

    return (
        <div className='mainPage'>
            <div className='price'>
                <div className ='masaNo'>
                    <p>Masa No: </p>
                </div>
                <div className='price__section'>
                  <ul>
                      {
                          order.map(item=>(
                              <li>{item.name} <strong>{item.price}</strong>
                                <ul>
                                    {
                                        item.subMenu.map(sub=>(<li>{sub}</li>))
                                } 
                                </ul>                              
                              </li>

                          ))
                      }
                  </ul>
                </div>
                <button>Ücret Alındı</button>
            </div>
            <div className='menus'>
                <AllMenu/>
                <MenuSection/>                

            </div>
        </div>
    )
}

export default MainPage;
