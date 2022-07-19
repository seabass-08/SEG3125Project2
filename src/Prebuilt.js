import './App.css';
import pc1 from './assets/gamingPC.jpg'
import pc2 from './assets/gamingPC2.png'
import pc3 from './assets/gamingPC3.png'
import pc4 from './assets/gamingPC4.png'
import pc5 from './assets/gamingPC5.png'
import pc6 from './assets/gamingPC6.png'

const Prebuilt = () =>{

    const buyClick = () =>{
        //to be implemented later
        console.log("Added to cart")
    }

    return ( 
        <div className="prebuiltContent">
            <div className='filters'>
                <label className='filterLabel'>Price</label>
                <select className='filterSelect'>
                    <option selected>None</option>
                    <option value="1">Under $500</option>
                    <option value="2">$500-$1000</option>
                    <option value="3">$1000-$1500</option>
                    <option value="4">$1500-$2500</option>
                    <option value="5">$2500 and Up</option>
                </select>
                <label className='filterLabel'>Colour</label>
                <select className='filterSelect'>
                    <option selected>None</option>
                    <option value="1">Black</option>
                    <option value="2">White</option>
                </select>
                <label className='filterLabel'>Size</label>
                <select className='filterSelect'>
                    <option selected>None</option>
                    <option value="1">Small</option>
                    <option value="2">Medium</option>
                    <option value="3">Large</option>
                </select>

            </div>
            <div className='featured'>
                <div className='prebuilt'>
                    <img src={pc1} alt='prebuilt1' style={{
                        width: '300px',
                        height: '300px'
                    }}/>
                    <p>Gaming PC 1</p>
                    <p>$800</p>
                    <button className='buybutton' onClick={buyClick}>Buy Now</button>
                </div>
                <div className='prebuilt'>
                    <img src={pc2} alt='prebuilt2' style={{
                        width: '300px',
                        height: '300px'
                    }}/>
                    <p>Gaming PC 2</p>
                    <p>$1200</p>
                    <button className='buybutton' onClick={buyClick}>Buy Now</button>
                </div>
                <div className='prebuilt'>
                    <img src={pc3} alt='prebuilt3' style={{
                        width: '300px',
                        height: '300px'
                    }}/>
                    <p>Gaming PC 3</p>
                    <p>$1800</p>
                    <button className='buybutton' onClick={buyClick}>Buy Now</button>
                </div>
            </div>
            <div className='featured'>
                <div className='prebuilt'>
                    <img src={pc4} alt='prebuilt4' style={{
                        width: '300px',
                        height: '300px'
                    }}/>
                    <p>Gaming PC 4</p>
                    <p>$800</p>
                    <button className='buybutton' onClick={buyClick}>Buy Now</button>
                </div>
                <div className='prebuilt'>
                    <img src={pc5} alt='prebuilt4' style={{
                        width: '300px',
                        height: '300px'
                    }}/>
                    <p>Gaming PC 5</p>
                    <p>$1200</p>
                    <button className='buybutton' onClick={buyClick}>Buy Now</button>
                </div>
                <div className='prebuilt'>
                    <img src={pc6} alt='prebuilt6' style={{
                        width: '300px',
                        height: '300px'
                    }}/>
                    <p>Gaming PC 6</p>
                    <p>$1800</p>
                    <button className='buybutton' onClick={buyClick}>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Prebuilt;