import { AppBar, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import '../globals.css';
import React from 'react';

const Header = () => {

    const url: any = "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

    return (
        <>
            <div>
                <AppBar>
                    <div id='navbar'>
                        <Toolbar>
                            <div id='menuIcon'>
                                <Menu />
                            </div>
                            <img id='logo' src={url}></img>
                        </Toolbar>
                    </div>
                </AppBar>
            </div>
        </>
    )
}

export default Header