import BGImg from '../../assets/bg.png';
import SearchBar from '../../components/searchBar/SearchBar';
import "./HomePage.scss";

function HomePage() {
    return (
      <div className='homePage'>
        <div className='textContainer'>
          <div className='wrapper'>
            <h1 className='title'>
              Find Real Esatte & Get Your Dream Place.
            </h1>
            <p>
              Key Takeaways. Real estate is considered real property that
              includes land and anything permanently attached to it or built on
              it, whether natural or man-made. There are five main categories of
              real estate which include residential, commercial, industrial, raw
              land, and special use.
            </p>
            <SearchBar />
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200+</h1>
                    <h2>Award Gaibed</h2>
                </div>
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
          </div>
        </div>
        <div className='imgContainer'>
          <img src={BGImg} alt='bg image' />
        </div>
      </div>
    );
}

export default HomePage;