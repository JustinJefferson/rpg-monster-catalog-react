import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css'

const Navigator = (props: any) => {
    const links: string[] = props.links;
    return( 
        <div className="Nav">
            {links.map((link: string) =>
                <Link to={'/' + link.toLowerCase()}>{link}</Link>
            )}
            <Link className="Home" to="/" >Mongaia</Link>
        </div>
    )
}

export default Navigator;