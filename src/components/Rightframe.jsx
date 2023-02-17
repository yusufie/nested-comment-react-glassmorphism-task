import catnews from '../images/catnews.png';
import sportnews from '../images/sportnews.jpg';
import technews from '../images/technews.jpg';
import info from '../icons/info.svg';


function Rightframe() {
  return (
    <>
        <div className="card bg-dark text-white m-2">
        <img src={technews} className="card-img opacity-50" alt="technews" height={210} width={280} />
            <div className="card-img-overlay mt-5 mb-1">
                <h4 className="card-title">Apple</h4>
                <p className="card-text">Apple Makes PlanS to Move Production Out of China-WSJ</p>
                <p className='card-text'>
                {<img src={info} alt="info" height={20} width={20} />}
                r/news and more</p>
            </div>

        </div>

        <div className="card bg-dark text-white m-2 ">
        <img src={catnews} className="card-img opacity-50" alt="catnews" height={210} width={280} />
            <div className="card-img-overlay mt-5 mb-1 ">
                <h4 className="card-title">Cats</h4>
                <p className="card-text">My cat was attacked by a bobcat two weeks ago and had one of...</p>
                <p className='card-text'>
                {<img src={info} alt="info" height={20} width={20} />}
                r/news and more</p>
            </div>
        </div>

        <div className="card bg-dark text-white m-2">

        <img src={sportnews} className="card-img opacity-50" alt="sportnews" height={210} width={280} />
            <div className="card-img-overlay lh-1 mt-5 ">
            <br/>
                <h4 className="card-title">Lionel Messi</h4>
                <p className="card-text">Lionel Messi with his man of the match trophy.</p>
                
                
                <p>{<img src={info} alt="info" height={20} width={20} />}
                r/news and more
                </p>
            </div>
        </div>

    </>
  );
}

export default Rightframe;