import './index.scss'
import HeadShot from '../../assets/images/1657836375587 (1).jpg'
import {Link} from 'react-router-dom';
const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm John Murphy</h1>
                <h2>CS College Graduate</h2>
                <Link to="/contact" className='flat-button'>Contact</Link>
            </div>
        </div>
    )
}

export default Home