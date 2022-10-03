import { useSelector, useDispatch } from 'react-redux'
import { makeActive, removeCard} from "../Redux/SliceCards"

import wifi from '../Assets/wifi.png'

//<div> Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry"> Kiranshastry </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

function Card (props){

    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user)



    return (

        <div className='card'>
            <div className='cardHolder'>
                <div align='right'>
                    <p className='Vendor-card'>{props.data.Vendor}</p>
                    <p className='Type-card'>{props.data.Type}</p>
                </div>

                <div align='left' className='imgS'>
                    <img src="https://img.pngio.com/chip-png-free-download-fourjayorg-chip-png-2400_2400.png" class="chip"></img>
                    <img className='waves'src={wifi} alt="chip"></img>
                </div>
                <p className='cardNumber-card'>{props.data.CardNumber}</p>

                <p className='date-card'><span className='vaildThru-card'>Vaild Thru</span>{props.data.Month} / {props.data.Year} </p>
                <p className='cardholder-card'>{user.first} {user.last}</p>
            </div>
        
            
            {!props.data.active &&  <div className='buttons'>
                <button onClick={() => { dispatch(makeActive(props.data.id)); }}>Aktivera kort</button>
                <button onClick={() => { dispatch(removeCard(props.data.id)); }}>Radera kort</button>
            </div>} 

        </div>    


       

    )
}

export default Card;


