import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Card from '../Components/Card'
    
    const Cards = () => {

        const cardInfo = useSelector(state => state.cards.cardInfo);
        console.log(cardInfo)
    
    return(
        <div className="Cards">

            <div className="headning">
                <h1>Cards.jsx</h1>
                <h2>Alla Kort</h2>
            </div>
            
            <div className='cardsList'>
                <div className='activeCard'>
                    <h3>Active Card</h3>
                    {cardInfo &&
                     cardInfo.map((card, i) => {
                    if(card.active) {
                            return  < Card data={card}  key={i}/>
                        }
                    })}
                </div>

                <div className='InactiveCard'>
                    <h3>Inactive Cards</h3> 
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

            <div className="Cards-to-AddCard-Btn">
                <Link style={{textDecoration: "none"}} to="/"><button className='AddCard-Btn'>Back to home</button> </Link>
            </div>

        </div>

    ); 
}

export default Cards