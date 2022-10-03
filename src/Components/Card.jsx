import { useSelector, useDispatch } from 'react-redux'
import { makeActive, removeCard} from "../Redux/SliceCards"




function Card (props){

    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user)



    return (

        <div>           
            <p>Vendor: {props.data.Vendor}</p>
            <p>Type:  {props.data.Type}</p>

            <p>Cardnumber: {props.data.CardNumber}</p>

            <p className='toUpperCase'>Cardholder:{user.first} {user.last}</p>
            <p>Valid: {props.data.Month} / {props.data.Year} </p>
            <p>CVC: {props.data.cvc}</p> 

            {!props.data.active &&  <div className='buttons'>
                <button onClick={() => { dispatch(makeActive(props.data.id)); }}>Aktivera kort</button>
                <button onClick={() => { dispatch(removeCard(props.data.id)); }}>Radera kort</button>
            </div>} 

        </div>    


       

    )
}

export default Card;


