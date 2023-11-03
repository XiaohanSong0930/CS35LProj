import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className='Nav'>
            <ul className='menu'>
                <li>
                    <Link to="/"><h1>nothing</h1></Link>
                </li>
                <li>
                    <Link to="/home"><h1>Home</h1></Link>
                </li>
                <li>
                    <Link to="/map"><h1>Map</h1></Link>
                </li>
            </ul>
        </div>
        
    );
}

