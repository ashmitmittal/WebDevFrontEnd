import React from 'react';

function HobbyList() {
        const hobbies = ['sleeping','eating','cuddling'];
        const liStyle = {fontSize: '1.5em'};
       return ( 
            <ul>
                {hobbies.map((h,i) => {
                    return <li key={i} style={liStyle}>{h}</li>
                })}
            </ul>
       );
}

export default HobbyList;