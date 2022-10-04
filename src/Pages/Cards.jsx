import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Card from '../Components/Card'
import fb from '../Assets/facebook.png'
import insta from '../Assets/instagram.png'
import tw from '../Assets/twitter.png'

    
    const Cards = () => {

        const cardInfo = useSelector(state => state.cards.cardInfo);
        console.log(cardInfo)
    
    return(
        <div className="Cards">

            <div className="headning">
                <h3>E-wallet</h3>
                <h4>all <span> your </span> cards</h4>
            </div>
            
            <nav>
                <Link style={{textDecoration: "none"}} to="/"><button className='btn-back'><i className="fa-solid fa-arrow-left"></i></button> </Link>
            </nav>



            <div className='addCard-Continer'>
                {(cardInfo.length < 4) ? <Link style={{textDecoration: "none"}} to="/AddCard"><button className='AddCard-Btn'>Go to Add Card</button> </Link> : <p className='max-msg'>You have added the maximum amount of cards</p>}
            </div>
            
            <div className='cardsList'>
                <div className='activeCard'>
                    <div className='activeCard-Content'>
                        <h5>Your Active Card</h5>
                        <p>You can only have <span> one </span> active card</p>
                    </div>
                    {cardInfo &&
                     cardInfo.map((card, i) => {
                    if(card.active) {
                            return  < Card data={card}  key={i}/>
                        }
                    })}
                </div>

                <div className='InactiveCard'>
                    <div className='InactiveCard-Content'>
                        <h5>Your Inactive Cards</h5> 
                        <p>You can have up to <span> four </span> cards</p>
                        <p>If you want to change your in Inactive card, click the button ""</p>
                        <p>If you want to delete your in Inactive card, click the button ""</p>
                    </div>
                    {cardInfo &&
                     cardInfo.map((card, i) => {
                    if(!card.active) {
                            return  < Card data={card}  key={i}/>
                        }
                    })}
                </div>
            </div>



            <footer>
                <h7>Footer</h7>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <div className='sociala'>
                    <img className='tw-img'src={tw} alt='twitter'></img>
                    <img className='insta-img'src={insta} alt='instagram'></img>
                    <img className='fb-img'src={fb} alt='facebook'></img>
                </div>
            </footer>

        </div>

    ); 
}

export default Cards