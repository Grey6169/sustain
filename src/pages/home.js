import './home.css';
import bg from '../media/bg.png';

function Home() {
  return (
    <div className='home'>
        <div className="welcome">
            Welcome to <span className="sustain">Sustain!</span>
        </div>

        <div className='info'>
            <div className="titleInfo">What is <span className="sustain"> Sustain? </span></div> <br/>
            Sustain is a website that connects food insecure people with local
            food suppliers such as restaurants and grocery stores, who, at the end of the 
            day, can then make listings of any excess food.
        </div>

        <div className='data'>
            <span className='number'> 13.8 million </span> households in the US were
            food insecure at one point during 2020. <br/>

            <span className='number'> 38.3 million </span> people lived in one of those
            households. <br/>

            <span className='number'>14.8% </span> of households with children were 
            food insecure during 2020. <br/>

            <span className='number'> 6.1 million </span> children were impacted 
            by food insecurity. <br/>
        </div>
    </div>
  );
}

export default Home;


/* 
        <div className='fullImage'>
            <img src={bg} alt="light blue squiggle"></img>
        </div> */