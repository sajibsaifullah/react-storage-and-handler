import React, { useEffect, useState } from 'react';
import { add, getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));
    }, [])

    const total1 = getTotal(cosmetics);
    
    const first = 55;
    const second = 66;
    const total = add(first, second);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money nedded: {total1}</p>
            <p>Total: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;