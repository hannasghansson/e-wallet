import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from "react-router"

import { addCard } from "../Redux/SliceCards"



function AddCard() {
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const { letestID } = useSelector((state) => state.cards)



    const handleVendor = (e) => {
        const handleVendor = document.querySelector('#Display-Vendor')
        handleVendor.innerText = e.target.value
    }

    const handleType = (e) => {
        const handleType = document.querySelector('#Display-Type')
        handleType.innerText = e.target.value
    }


    const handleCardNumber = (e) => {
        const cardNumber = document.querySelector('#Display-CardNumber')
        cardNumber.innerText = e.target.value
    }

    const handleCVCnumber = (e) => {
        const cvcNumber = document.querySelector('#card-CVC-display')
        cvcNumber.innerText = e.target.value
    }

    const ValidThruMonth = (e) => {
        const ValidThruMonth = document.querySelector('#monthDisplay')
        ValidThruMonth.innerText = e.target.value
    }

    const ValidThruYear = (e) => {
        const ValidThruYear = document.querySelector('#yearDisplay')
        ValidThruYear.innerText = e.target.value
    }

    const sendCardinfo = () => {

        let cardholder = user.first + ' ' + user.last
        let vendor = document.querySelector('#vendor').value
        
        let cardNumber = document.querySelector('#cardnumber').value
        let cardNumberNew =  cardNumber.split('').map((number, index) => {
            if (index === 3 || index === 7 || index === 11) {
                return number + ' '
            } else {
                return number
            }
        }).join('')


        let cardType = document.querySelector('#cardType').value
        let expireMonth = document.querySelector('#expireMonth').value
        let expireYear = document.querySelector('#expireYear').value

        console.log(expireYear);
        let cvc = document.querySelector('#cvc').value


        const newCard = {
            Vendor : vendor,
            Cardholder : cardholder,
            Type: cardType,
            CardNumber: cardNumberNew,
            Month : expireMonth,
            Year : expireYear,
            cvc: cvc,
            active: false,
            id : letestID
        }

    

        dispatch(addCard(newCard));

        navigate("/Cards")

    }



    return(

        <div className="AddCard">
            
            <div className="headning">
                <h3>E-wallet</h3>
                <h4>Add a <span> new Card </span> to your e-wallet</h4>
            </div>
            

            <div className="back-btn">
                <Link style={{textDecoration: "none"}} to="/Cards"><button className='btn-back'><i className="fa-solid fa-arrow-left"></i></button> </Link>
            </div>

        
            <div className='infoText'>
                <h6>To add your new card, fill in the information in the boxes</h6>
            </div>

            <div className='Continer'>
                <div className='creditcard'>
                    <div className='frontDisplay'>
                        <p id='Display-Vendor'>Vendor</p>
                        <p id='Display-Type'>Type</p>
                        <p id="Display-Cardholder">{user.first} {user.last}</p>
                        <p id="Display-CardNumber">XXXX XXXX XXXX</p>
                        <p id="card-date-display"> Vaild Thru <span id='monthDisplay'>XX</span> / <span id='yearDisplay'>XX</span></p>
                        <p id="card-CVC-display">CVC XXX </p>
                    </div>
                </div>
 


                <form className='AddCard-Form' onSubmit={sendCardinfo}>

                    <div className='field-container'>
                        <label htmlFor="label-Vendor">Vendor</label>
                        <select onChange={(e) => handleVendor(e)} id='vendor' className='vendor' required defaultValue={''}>
                            <option value="" disabled hidden>Choose</option>
                            <option value="Handelsbanken">Handelsbanken</option>
                            <option value="Swedbank Bank">Swedbank</option>
                            <option value="Nordea Bank">Nordea</option>
                            <option value="Länsförsäkringar">Länsförsäkringar</option>
                        </select>
  


                    
                        <label htmlFor="Display-Type">Card Type</label>
                        <select onChange={(e) => handleType(e)} id='cardType' className='cardType' required defaultValue={''}>
                            <option value="" disabled  hidden>Choose</option>
                            <option value="Bankkort">Bankkort</option>
                            <option value="Allkort">Allkort</option>
                            <option value="Platinakort">Platinakort</option>
                        </select>
                    </div>



                    <div className='card-container'>
                        <label htmlFor="cardnumber">Card Number </label>
                        <input onChange={(e) => handleCardNumber(e)}  id="cardnumber" type="text" name="card-number" placeholder='XXXX-XXXX-XXXX-XXXX' pattern="[0-9]{16}" maxLength={16} required />
                    </div>


                    <div className='row'> 
                        <div className='ValidThru-Month'>
                            <label htmlFor="Valid">Expiration Month</label>
                            <select onChange={(e) => ValidThruMonth(e)} id='expireMonth' name='expireMonth' >
                            <option value="">Month</option>
                                {['1','2','3','4','5','6','7','8','9','11','12'].map((month, index) => <option key={index}>{month}</option>)}
                            </select>
                        </div>

                        <div className='ValidThru-Year'>
                            <label htmlFor="Valid">Expiration Date</label>
                            <select onChange= {(e) => ValidThruYear(e)} id='expireYear' name='year'  placeholder='Year' pattern="[0-9]{16}" maxLength={16} >
                            <option value="">Year</option>
                                {['22','23','24','25'].map((year,index) => <option key={index}>{year}</option>)}                            </select>
                        </div>

                        <div className="input">
                            <label htmlFor="CVCnumber" type='number'>CVC</label>
                            <input onChange={(e) => handleCVCnumber(e)} id="cvc" type="text" name="CVC-number" placeholder="XXX" pattern="[0-9]{3}" maxLength={3} required />
                        </div>
                    </div>

                        

                    

                    <div className='btn-Add'>
                        <button type='submit' className='Btn-AddCard'>Add new Card</button>
                    </div>

                </form>

            </div>


            <footer>
                <h7>Footer</h7>
            </footer>

        </div>



     ); 
} 
export default AddCard