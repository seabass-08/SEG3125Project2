import './App.css';
import cpu from './assets/Ryzen.jpg';
import pcCase from './assets/medcase.jpg';
import mobo from './assets/mobo.jpg';
import gpu from './assets/gpu.jpg';

const Custom = () =>{
    return ( 
        <div className="custom">
            <div className='homeContent'>
                <h2>Customize your own System</h2>

                <h4 style={{ margin: '16px', marginTop: '32px'}}>Select Case</h4>
                <img src={pcCase} alt='case' style={{
                    width: '200px',
                    height: '200px',
                    margin: '16px'
                }}/>
                <div>
                    <input className='radio' type="radio" id="smallCase" name="case" value="smallCase"></input>
                    <label className='radioLabel'>Small</label>
                    <input className='radio' type="radio" id="mediumCase" name="case" value="mediumCase"></input>
                    <label className='radioLabel'>Medium</label>
                    <input className='radio' type="radio" id="largeCase" name="case" value="largeCase"></input>
                    <label className='radioLabel'>Large</label>
                </div>

                <h4 style={{ margin: '16px', marginTop: '32px'}}>Select Processor</h4>
                <img src={cpu} alt='cpu' style={{
                        width: '200px',
                        height: '200px',
                        margin: '16px'
                    }}/>
                <div>
                    <input className='radio' type="radio" id="r5" name="cpu" value="Ryzen5"></input>
                    <label className='radioLabel'>AMD Ryzen 5</label>
                    <input className='radio' type="radio" id="r7" name="cpu" value="Ryzen7"></input>
                    <label className='radioLabel'>AMD Ryzen 7</label>
                    <input className='radio' type="radio" id="r9" name="cpu" value="Ryzen9"></input>
                    <label className='radioLabel'>AMD Ryzen 9</label>
                </div>

                <h4 style={{ margin: '16px', marginTop: '32px'}}>Select Motherboard</h4>
                <img src={mobo} alt='cpu' style={{
                        width: '200px',
                        height: '200px',
                        margin: '16px'
                    }}/>
                <div>
                    <input className='radio' type="radio" id="basicmobo" name="mobo" value="basicmobo"></input>
                    <label className='radioLabel'>Basic Motherboard</label>
                    <input className='radio' type="radio" id="perfmobo" name="mobo" value="perfmobo"></input>
                    <label className='radioLabel'>Performance Motherboard</label>
                    <input className='radio' type="radio" id="deluxemobo" name="cmobo" value="deluxemobo"></input>
                    <label className='radioLabel'>Deluxe Motherboard</label>
                </div>

                <h4 style={{ margin: '16px', marginTop: '32px'}}>Select Graphics Card (GPU)</h4>
                <img src={gpu} alt='cpu' style={{
                        width: '200px',
                        height: '200px',
                        margin: '16px'
                    }}/>
                <div>
                    <input className='radio' type="radio" id="basicgpu" name="gpu" value="basicgpu"></input>
                    <label className='radioLabel'>Basic GPU (Nvdia RTX 3050)</label>
                    <input className='radio' type="radio" id="perfgpu" name="gpu" value="perfgpu"></input>
                    <label className='radioLabel'>Performance GPU (Nvdia RTX 3060)</label>
                    <input className='radio' type="radio" id="perfplusgpu" name="gpu" value="perfplusgpu"></input>
                    <label className='radioLabel'>Performance Plus GPU (Nvdia RTX 3070)</label>
                    <input className='radio' type="radio" id="deluxegpu" name="gpu" value="deluxegpu"></input>
                    <label className='radioLabel'>Deluxe GPU (Nvdia RTX 3080)</label>
                </div>
                <h4 style={{ margin: '16px', marginTop: '32px'}}>Other Options</h4>
                <div className='options'>
                <label className='filterLabel'>Select RAM Configuration</label>
                <select className='filterSelect'>
                    <option selected></option>
                    <option value="1">16 GB</option>
                    <option value="2">32 GB</option>
                    <option value="3">64 GB</option>
                    <option value="4">128 GB</option>
                </select>
                <label className='filterLabel'>Select Power Supply</label>
                <select className='filterSelect'>
                    <option selected></option>
                    <option value="1">Basic (650W)</option>
                    <option value="2">Performance (750W)</option>
                    <option value="2">Performance Plus (850W)</option>
                    <option value="3">Deluxe (1000W)</option>
                </select>
                <label className='filterLabel'>Select Colour</label>
                <select className='filterSelect'>
                    <option selected></option>
                    <option value="1">Black</option>
                    <option value="2">White</option>
                </select>
                </div>
                <div style={{textAlign: 'center'}}>
                    <button className='submit'>Submit Order</button>
                </div>
            </div>

        </div>
    );
}

export default Custom;