import React from 'react'
import Introduction from './Introduction';

const Home = () => {
    const [more, setMore] = React.useState(false);
    return (
        <>
        <div>
            <Introduction/>
        </div>
        </>
    )
}

export default Home
