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
        const motivationalWords =  [
          'motivational videos',
          'inspirational speeches',
          'self-improvement',
          'personal growth',
          'success stories',
          'mindfulness',
          'gratitude',
          'mental health',
          'positive affirmations',
        ];
        const randomWord = motivationalWords[Math.floor(Math.random() * motivationalWords.length)];
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${randomWord}%20videos&type=video&regionCode=UK&key=AIzaSyCTG5ymIwOz5KZ9uP6l4QDKqHhzrld-mAg`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        const links = data.items.map((item) => ({
          title: item.snippet.title,
          channelName: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
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
              <VideoCard
                key={link.videoLink}
                videoLink={link.videoLink}
                title={link.title}
                channelName={link.channelName}
                thumbnail={link.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventpage;

//AIzaSyCTG5ymIwOz5KZ9uP6l4QDKqHhzrld-mAg