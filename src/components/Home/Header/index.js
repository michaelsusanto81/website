import React from 'react';
import { Bold, Name, Im } from './style';

const Header = () => {
    return (
        <>
            <Bold>Hi!</Bold>
            <Name>
                <Im>I'm</Im>
                <Bold>Michael Susanto</Bold>
            </Name>            
        </>
    )
}

export default Header;