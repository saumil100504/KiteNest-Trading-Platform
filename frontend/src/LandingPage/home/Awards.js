import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
               <div className='col-6 p-5'>
                 <img src='/images/largestBroker.svg'/>
               </div>
               <div className='col-6 p-5 mt-5'>
                <h1>Largest stock Broker in India</h1>
                <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order
                 volumes in India daily by trading and investing in:</p>
                
                <div className='row'>
                       <div className='col-6'>
                       
                    <ul>

                    <li>
                        <p>Futures and Options</p>
                    </li>
                    
                    <li>
                        <p>Commodity Derivatives</p>
                    </li>

                    <li>
                        <p>Currency Derivatives</p>
                    </li>

                 </ul>

                       </div>
                        <div className='col-6'>
                     <ul>

                    <li>
                        <p>Stock & Ipos</p>
                    </li>
                    
                    <li>
                        <p>Direct Mutual Funds</p>
                    </li>

                    <li>
                        <p>Bonds and Govt Securities:</p>
                    </li>

                 </ul>


                        </div>
                </div>
                
                 
                <img src='\images\pressLogos.png'style={{width:"80%"}}/>
               </div>
            </div>

        </div>
     );
}

export default Awards ;