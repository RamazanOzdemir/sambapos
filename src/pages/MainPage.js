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
                <div className='price__section'>
                  <ul>
                      {
                          order.map((item,index)=>(
                              <div className='order' key={item.name+item.price+index}>
                                    <li>
                                        <b>{item.name} </b>
                                        <ul>
                                            {
                                                item.subMenu.map((sub,ind)=>(sub?<li key={sub+item.name+item.price+ind}>{sub}</li>:null))
                                            } 
                                        </ul>                              
                                    </li>
                                    <span><strong>{item.price +' \u20BA'}</strong>{}</span>
                              </div>
                          ))
                      }
                  </ul>
                </div>
                <button>ÖDEME YAP</button>
            </div>
            <div className='menus'>
                <AllMenu/>
                <MenuSection/>                

            </div>
        </div>
    )
}

export default MainPage;
