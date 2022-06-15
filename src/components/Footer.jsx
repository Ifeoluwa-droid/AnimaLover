import React from 'react';

function Footer() {
    return <footer className='bg-color-accent text-color-white w-10 ptb-3 plr-4'>
        <div className='d-flex-row justify-space-between'>
            <p className='fs-1-5'>Made with <i style={{color: 'red'}} className="fa-solid fa-heart"></i>, <i className="fa-solid fa-laptop-code" style={{color: 'purple'}}></i>, <i className="fa-brands fa-react" style={{color: '#61DAFB'}}></i> and <i className="fa-brands fa-sass" style={{color: '#BF4080'}}></i> by Faromika Ifeoluwa Faith, &copy; 2022.</p>
            <div className='d-flex-row gap-2'>
                <i className="fa-brands fa-linkedin-in fa-2x"></i>
                <i className="fa-brands fa-discord fa-2x"></i>
                <i className="fa-brands fa-facebook-f fa-2x"></i>
                <i className="fa-brands fa-twitter fa-2x"></i>
                <i className="fa-brands fa-whatsapp fa-2x"></i>
            </div>
        </div>
    </footer>;
}

export default Footer;