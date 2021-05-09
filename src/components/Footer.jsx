import React from 'react';
import '../css/footer.css';

function Footer() {

    let year = new Date().getFullYear();



    return (
        <div id="footer">
            <h2>Myplayees</h2>
            <h6>@copyright{year}</h6>
        </div>
    )
}

export default Footer

