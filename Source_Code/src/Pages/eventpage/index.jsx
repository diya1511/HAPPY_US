import Navbar from '../../Components/Navbar';
import AdvancedCarousel from '../../Components/Carousel';
import VideoCard from '../../Components/Video Card';
import './styles.css';

export default function Eventpage() {
  return (
    <div className="Background">
      <div className="contents">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="event-feed">
          <AdvancedCarousel />
          <div className="video-feed">
            <VideoCard videoLink = 'https://www.youtube.com/watch?v=26U_seo0a1g'/>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  );
}
