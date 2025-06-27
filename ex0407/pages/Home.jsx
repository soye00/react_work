import React, {useState} from 'react';

function Home(props) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>home</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    );
}

export default Home;