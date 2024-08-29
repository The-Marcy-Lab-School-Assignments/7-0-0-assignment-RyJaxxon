import { useState } from "react";

const Header = ({font, greeting}) => {

    return (
        <>
            <h1 style={{fontSize : `${font}em`}}>{greeting}</h1>
        </>
    );
};

export default Header;