import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

ColorBox.propTypes = {

};

function getRandomColor() {
    let COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    let randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox(props) {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || "deeppink";
        console.log(initColor);
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }

    return (
        <div
            className='color-box'
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;