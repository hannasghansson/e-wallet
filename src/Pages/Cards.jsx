import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Card from '../Components/Card'
    
    const Cards = () => {

        const cardInfo = useSelector(state => state.cards.cardInfo);
        console.log(cardInfo)
    
    return(
        <div className="Cards">

            <div className="headning">
                <h3>E-wallet</h3>
                <h4>all <span> your </span> cards</h4>
            </div>

            <div className="back-btn">
                <Link style={{textDecoration: "none"}} to="/"><button className='btn-back'><i className="fa-solid fa-arrow-left"></i></button> </Link>
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

            <div className="Cards-to-AddCard-Btn">
            {(cardInfo.length < 4) ? <Link style={{textDecoration: "none"}} to="/AddCard"><button className='AddCard-Btn'>Go to Add Card</button> </Link> : <p className='max-msg'>You have added the maximum amount of cards</p>}
            </div>

            <footer>
                <h7>Footer</h7>
            </footer>

        </div>

    ); 
}

export default Cards