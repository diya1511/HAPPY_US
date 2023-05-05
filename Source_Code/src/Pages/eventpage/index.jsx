import { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import AdvancedCarousel from '../../Components/Carousel';
import VideoCard from '../../Components/Video Card';
import './styles.css';

const Eventpage = () => {
  const [videoLinks, setVideoLinks] = useState([]);

  useEffect(() => {
    const fetchVideoLinks = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=motivational%20videos&type=video&regionCode=US&key=AIzaSyCTG5ymIwOz5KZ9uP6l4QDKqHhzrld-mAg'
        );
        const data = await response.json();
        const links = data.items.map((item) => {
          return 'https://www.youtube.com/watch?v=' + item.id.videoId;
        });
        setVideoLinks(links);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideoLinks();
  }, []);

  return (
    <div className="Background">
      <div className="contents">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="event-feed">
          <AdvancedCarousel />
          <div className="video-feed">
            {videoLinks.map((link) => (
              <VideoCard videoLink={link} key={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventpage;
//AIzaSyCTG5ymIwOz5KZ9uP6l4QDKqHhzrld-mAg