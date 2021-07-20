import React, { useState } from 'react';
import '../css/row.css';

function Row({ title }) {
    const [movies, setMovies] = useState([]);


    return (
        <div className="row">
            <h2>{title}</h2>
        </div>
    )
}

export default Row
