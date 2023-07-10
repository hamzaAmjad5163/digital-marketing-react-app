import React, { useRef, useEffect } from 'react';
import './header.css';
//import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
//import userIcon from '../../assets/images/user-icon.png';




const Header = () => {
    const nav__links = [
        {
            path: '#home',
            display: 'Home'
        },
        {
            path: '#demandPage',
            display: 'About'
        },
        {
            path:'#services',
            display: 'Services'
        },
        {
            path:'#companyName',
            display:'Philosophy'
        },
        {
            path:'#about',
            display: 'Contact'
        },
    
    ]
    const menuRef = useRef(null);
        
        const headerRed = useRef(null);
    
        const headerFunc = () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRed.current.classList.add('sticky__header');
            }else{
                headerRed.current.classList.remove('sticky__header');
            }
        }
    
        useEffect (()=>{
            window.addEventListener('scroll', headerFunc);
            return ()=> window.removeEventListener('scroll', headerFunc);
        },[]);
    
        const handleClick = e =>{
            e.preventDefault();
    
            const targetAttr = e.target.getAttribute('href');
            const location = document.querySelector(targetAttr).offsetTop;
            window.scrollTo({
                left:0,
                top:location - 80,
            });
        };
        const menuToggle =() => menuRef.current.classList.toggle('active__menu');
    
  return (
    <header className='header' ref={headerRed}>
        <Container>
            <Row>
                <div className='nav__wrapper'>
                   
                    <div className='logo'>
                        <h1>Digital Marketing</h1>
                    </div>

                    <div className='navigation'  ref={menuRef} onClick={menuToggle}>
                    <ul className='menu'>
                        {
                            nav__links.map((item, index) => (
                                <li className='nav__item' key={index}><a onClick={handleClick} href={item.path}>{item.display}</a>
                                <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}></NavLink></li>
                            ))
                        }
                    </ul>
                        
                    </div>
                    
                    
                    <div className='nav__right'>
                    <span className='Back'><Link to='/home'><i class="ri-arrow-left-circle-line"></i></Link></span>
                        
                </div>
                <div className='mobile__menu'>
                            <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                        </div>
                </div>
            </Row>
            
            
           
        </Container>
    </header>
  )
}

export default Header;
