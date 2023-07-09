import React, { useRef, useEffect } from 'react';
import './header.css';
//import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
//import userIcon from '../../assets/images/user-icon.png';

const nav__links = [
    {
        path:'home',
        display: 'Home'
    },
    {
        path:'about',
        display:'About'
    },
    {
        path:'services',
        display: 'Services'
    },
    {
        path:'contact',
        display: 'Contact'
    },
    {
        path:'companyName',
        display:'Philosophy'
    },
    
    
];

const Header = () => {
    const headerRef = useRef(null);


    const menuRef = useRef(null);
    


    const stickyHeaderFunc = () =>{
        
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
            {
                headerRef.current.classList.add('sticky__header');
            }else
            {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

   
    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener('scroll', stickyHeaderFunc);
    });

    const menuToggle =() => menuRef.current.classList.toggle('active__menu');
    
  return (
    <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className='nav__wrapper'>
                   
                    <div className='logo'>
                        <h1>Digital Marketing</h1>
                    </div>

                    <div className='navigation' ref={menuRef} onClick={menuToggle}>
                        <ul className='menu'>
                            
                            {
                                nav__links.map((item, index ) => (
                                    <li className='nav__item' key={index}>
                                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                                    </li>
                                ))
                                
                            }

                        </ul>
                        
                    </div>

                    <div className='nav__icons'>
                        <div className='mobile__menu'>
                            <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                        </div>
                    </div>

                    
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header;
