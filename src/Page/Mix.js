import React, { useEffect, useState } from 'react';
import './Mix.css';

const Mix = () => {

    const[items, setItems] = useState();
    useEffect(()=>{

        fetch('../../fackdb.json')
            .then(res => res.json())
            .then(data => setItems(data))

    },[]);

    return (
        <>
         <div className='gellaryWrapper'>
             <h1>This Is Our gellary</h1>
             <div className='gellary-menu'>
                 <button>one</button>
                 <button>Two</button>
                 <button>Three</button>
                 <button>Four</button>
                 <button>Five</button>
             </div>

            <div className='gellary-container'>

                {
                    items.map(item => <div className='single-item'>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <h5>Stack : {item.stack}</h5>
                    </div>)
                }

            </div>
             
         </div>
        </>
    );
};

export default Mix;