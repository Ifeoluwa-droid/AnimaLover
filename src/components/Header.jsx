import React, {useState} from 'react';
import Brand from './Brand';
import Link from './Link';
import links from '../links';
import DropdownButton from './DropdownButton';
import CloseLine from './CloseLine';
import NavButton from './NavButton';

function Header() {

    const [isNavActive, setIsNavActive] = useState(['', false]);

    return <header>
        <Brand />
        <nav>
            <ul className={isNavActive[0]}>
                {isNavActive[1] && <div style={{width: '100%', position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', justifyContent: 'flex-start'}}>
                    <NavButton style={{width: 'fit-content'}} onClick={() => setIsNavActive(['', false])}
                        child = {<div style={{cursor: 'pointer'}}>
                        <CloseLine
                            style={{transform: 'translateY(70%) rotate(135deg)'}}
                         />
                         <CloseLine
                            style={{transform: 'translateY(-70%) rotate(45deg)'}}
                          />
                        </div>}
                    />
                </div>}
               {links.map(link => <Link 
                key={link.key}
                link={link.name}
                className='nav-link'
               />)} 
            </ul>
        </nav>
        <NavButton className='open-nav-btn' onClick={() => setIsNavActive(['active', true])}  child={<DropdownButton />}/>
    </header>;
}

export default Header;