import { Link } from 'react-router-dom'
import videoMoney from '../Assets/videoMoney.mp4'


//<div className={style.home}>

function Home() {

    return(
        <div className='homePage'>
            <div className="overlay"></div>
            <video  autoPlay loop muted><source src={videoMoney} type='video/mp4' /></video>
            
            <div className="Content">
                <div className="homeHeading">
                    <h1> E-Wallet </h1>
                    <p>Your digital wallet</p>
                </div>
               
                <div className="BtnBox">
                    <Link style={{textDecoration: "none"}} to="/Cards"><button className='btnHome'>Explore more <i className="fas fa-angle-right"></i></button> </Link>
                </div>
            </div>
            
        </div>
    ); 
}

export default Home