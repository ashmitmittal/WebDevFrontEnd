import React from 'react';
import './pet.css';
import  HobbyList  from './hobbyList';


function Pet() {
        return (
            <div className="card">
                <h2 className="name">Some pic</h2>
                <img src="https://images.unsplash.com/photo-1575046458639-ec976a9e4a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                 alt="Some pic from unsplash" />
                <h5 style={{fontSize:'2em',margin:'2px'}}>Hobbies:</h5>
                <HobbyList />
            </div>
        );
}

export {Pet};