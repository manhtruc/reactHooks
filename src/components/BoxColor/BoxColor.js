import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BoxColor.css'

BoxColor.propTypes = {

};

const getRandomColor = () => {
    const COLOR_LIST = ['blue', 'black', 'green', 'red', 'yellow']
    const radomIndex = Math.trunc(Math.random() * 5)
    return COLOR_LIST[radomIndex]
}

function BoxColor() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('colorBox') || 'pink'
        return initColor
    })

    const handleBoxClick = () => {
        const newColor = getRandomColor()
        setColor(newColor)
        localStorage.setItem('colorBox', newColor)
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}



export default BoxColor;