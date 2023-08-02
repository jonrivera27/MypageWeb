import NextLink from 'next/link'
import React from "react";

function Navigation(){
    return(

        <ul>
            <li>
                <NextLink href="/" passHref legacyBehavior>
                    <Link>
                        <span>Home</span>
                    </Link>
                    <Link>
                        <span>About</span>
                    </Link>
                    <Link>
                        <span>Services</span>
                    </Link>
                </NextLink>
            </li>
        </ul>


    )
}
export default Navigation;