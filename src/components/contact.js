import React, {useState, useEffect} from 'react';
import './contact.css';
import check from '../imgs/check.png';

function Contact() {

    const [FullName, setName] = useState("");
    const [EmailAddress, setEmail] = useState("");
    const [PhoneNumbers, setPhone] = useState([]);
    const [Message, setMessage] = useState("");
    const [showPhone2, setShowPhone2] = useState(false);
    const [bIncludeAddressDetails, setShowAddress] = useState(false);
    const [AddressDetails, setAddressDetails] = useState({
        AddressLine1 : "",
        AddressLine2 : "",
        CityTown : "",
        StateCounty: "",
        Postcode: "",
        Country: ""
    });
    const onClickPhone = () => {setShowPhone2(true);}
    const [submitForm, setSubmitForm] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const onChangeAddress = () => {
        if (!bIncludeAddressDetails)
            setShowAddress(true)
        else 
            setShowAddress(false)};

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDetails = {
            FullName, 
            EmailAddress, 
            PhoneNumbers,
            Message,
            bIncludeAddressDetails,
            AddressDetails
            };
            try {
                const response = await fetch("http://localhost:5000/api/contact", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body : JSON.stringify(formDetails)
                });
                const contentType = response.headers.get("content-type");
                console.log(contentType);
                if (!response.ok) {
                    console.log('response status is: ',response.status);
                    const responseJson = await response.json();
                    console.log(responseJson);
                    setIsError(true);
                    // setErrorMessage(responseJson.Errors[0].MessageCode);
                }
                else
                    setSubmitForm(true);
            }
            catch(e) {
                console.log(e);
            }
        };
    
        const header = 'Contact us';
        const textVariable = 'Nulla lobortis vehicula eros eget molestie. Sed sagittis, neque et ultricies viverra, felis quam faucibus arcu, sollicitudin rhoncus tortor nulla sed lectus.';
        
        if (!submitForm) {
            return (
                <div className="Contact-container">
                    <title>Contact Us</title>

            <div className="contact-us">
                
                <div className="contact-wrapper">
                <h1>{header}</h1>
                <p><b>{textVariable}</b></p>
                <form className="contact-form" onSubmit={handleSubmit}>
                
                <span id="fullname">
                    <label htmlFor ="Fullname">Full Name</label> 
                    <input type = "text" id="Fullname" 
                        value={FullName}
                        onChange= {(e)=> {setName(e.target.value)}} 
                        ></input>
                </span>
                <span id="email">
                    <label htmlFor ="Email">Email Address</label>
                    <input type = "text" id="Email" 
                    value={EmailAddress}
                    onChange= {(e)=> {setEmail(e.target.value)}} 
                    ></input>
                </span>
               
                <div id="phonedetails">
                    <label htmlFor ="Phonenum1">Phone number 01 <i>- optional</i></label>
                    <input type = "text" id="Phonenum1"
                        value={PhoneNumbers[0]}
                        onChange = {(e) => {
                            const y = [...PhoneNumbers];
                            y[0] = e.target.value;
                            setPhone(y);
                        }}></input>

                        {
                        showPhone2 ?
                        <div>
                            <label htmlFor ="Phonenum2">Phone number 02 <i>- optional</i></label>
                            <input type = "text" id="Phonenum2" 
                            value={PhoneNumbers[1]} 
                            onChange= {(e) => {
                                const y = [...PhoneNumbers];
                                y[1] = e.target.value;
                                setPhone(y);
                            }}></input>           
                        </div>
                        : null 
                        }
                        <button type = "button" className="addPhone" onClick= {onClickPhone}>Add new phone number</button>  
                        
                    </div>

                    <label htmlFor="Message">Message</label>
                    <p id="Messageinfo"> Maximum text length is 500 characters</p>
                    <textarea id="Message" 
                    value={Message} onChange= {(e)=> {setMessage(e.target.value)}} ></textarea>
                    
                    <input type="checkbox" id="addAddress" onChange={onChangeAddress}/>
                    <label htmlFor="addAddress">Add address details</label>
                    {
                    bIncludeAddressDetails ?
                    <div className="AddressForm">
                        
                            <span id="Addressline1details">
                            <label htmlFor="Addressline1">Address line 1</label>
                            <input type="text" id="Addressline1"
                            value={AddressDetails.AddressLine1} 
                            onChange = {(e) => {
                                const x = {...AddressDetails};
                                x.AddressLine1 = e.target.value;
                                setAddressDetails(x);
                            }}>
                            </input>
                            </span>
                            <span id="Addressline2details">
                            <label htmlFor="Addressline2">Address line 2 <i>- optional</i></label>
                            <input type="text" id="Addressline2"
                            value={AddressDetails.AddressLine2} 
                            onChange = {(e) => {
                                const x = {...AddressDetails};
                                x.AddressLine2 = e.target.value;
                                setAddressDetails(x);
                            }}>
                            </input>
                            </span>
                     
                       
                        
                            <span id="Addressdetails2-1">
                                <span id="Addressdetails-citytown">
                                <label htmlFor="Citytown">City/Town</label>                            
                                <input type="text" id="Citytown"
                                value={AddressDetails.CityTown} 
                                onChange = {(e) => {
                                    const x = {...AddressDetails};
                                    x.CityTown = e.target.value;
                                    setAddressDetails(x);
                                }}>
                                </input>
                                </span>
                                <span id="Addressdetails-statecounty">
                                <label htmlFor="Statecounty">State/County</label>
                                <input type="text" id="Statecounty"
                                value={AddressDetails.StateCounty} 
                                onChange = {(e) => {
                                    const x = {...AddressDetails};
                                    x.StateCounty = e.target.value;
                                    setAddressDetails(x);
                                    }}>
                                </input>
                                </span>
                            </span>
                            <span id="Addressdetails2-2">
                                <span id="Addressdetails-postcode">
                                    <label htmlFor="Postcode">Postcode</label>
                                    <input type="text" id="Postcode"
                                        value={AddressDetails.Postcode} 
                                        onChange = {(e) => {
                                        const x = {...AddressDetails};
                                        x.Postcode = e.target.value;
                                        setAddressDetails(x);
                                    }}>
                                    </input>
                                </span>
                            <span id="Addressdetails-country">
                                <label htmlFor="Country">Country</label>
                                <input type="text" id="Country"
                                    value={AddressDetails.Country} 
                                    onChange = {(e) => {
                                        const x = {...AddressDetails};
                                        x.Country = e.target.value;
                                        setAddressDetails(x);
                                    }}>
                                </input>
                            </span> 
                            </span>
                        
                    </div>
                    : null
                    }
                
                    {isError ? 
                    <div className="FormError">
                        <p>Error in submiting form : {errorMessage}</p>
                    </div>
                    : null}
                
                <input className="Submit" type="submit" value="Submit"></input>
                </form>
        
            </div>
                <div className = "image-container">                  
                </div>
            </div>
            </div>
        );
    }
    else {
        return (
            <div className="contact-us">
                 <title>Contact Us</title>
                <div className="contact-wrapper">
                    <h1>{header}</h1>
                    <p>{textVariable}</p>
                    <div className ="Form-sent">
                        <div className="Checkmark-container">
                            <img src={check} className="Checkmark" alt=""/>
                        </div>
                        <h2>Your message has been sent</h2>
                        <p>We will be in contact with you within 24 hours.</p>
                    </div>
                </div>
                <div className = "image-container">
                </div>
            </div>

        );

    }
}


export default Contact;