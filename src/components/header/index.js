import React from 'react';
import './index.css'

function Header() {
    const avatar = "https://api.adorable.io/avatars/30/user.png"

    return (
        <div className='header'>
            <h1>GOOSTACK </h1>
            <div className="profile">
                <a href=''>Meu perfil</a>
                <a href=''>
                    <img src={avatar}></img>
                </a>
            </div>
        </div>
    )
}
export default Header;