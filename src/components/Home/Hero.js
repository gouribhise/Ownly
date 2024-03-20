import HeroImg from  '../../images/Hero.png'
const Hero=()=>{
    return (
        <div className='container hero'>
            <div className='row'>
            <div className='col-5'>
                 <h1 className='mt-5'>Looking for home?</h1>
                 <p>We have several options from which you can choose your home</p>
                 <button className='btn btn-primary'>Check Now</button>
            </div>
            <div className='col-4'>
            <img src={HeroImg} alt="hero image"/>
            </div>
            </div>
          
        </div>
     
    )
}

export default Hero