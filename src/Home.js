import './App.css';
import pc1 from './assets/gamingPC.jpg'
import pc2 from './assets/gamingPC2.png'
import pc3 from './assets/gamingPC3.png'

const Home = () => {

    const buyClick = () =>{
        //to be implemented later
        console.log("Added to cart")
    }

    return (
        <div className='home'>
            <div className='homeContent'>
                <h1 style={{
                    textAlign: 'center',
                    color: '#00205B',
                    fontSize: '48px',
                    fontWeight: '400'
                }}>Featured Computers</h1>
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
            </div>
            <div style={{textAlign: 'center'}}>
                <button className='contact'>Contact Us!</button>
            </div>
        </div>
    );
}

export default Home;