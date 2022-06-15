import React from 'react';
import Brand from './Brand';
import Link from './Link';
import links from '../links';
import DropdownButton from './DropdownButton';

function Header() {
    return <header>
        <Brand />
        <nav>
            <ul>
               {links.map(link => <Link 
                key={link.key}
                link={link.name}
                className='nav-link'
               />)} 
            </ul>
        </nav>
        <DropdownButton />
    </header>;
}

export default Header;