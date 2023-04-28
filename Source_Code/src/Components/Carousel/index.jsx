import { Carousel } from 'react-carousel-minimal';
import './styles.css';

function AdvancedCarousel() {
  const data = [
    {
      image: '/EventCarousel.png',
      caption: 'San Francisco',
    },
    {
      image: '/EventCarousel.png',
      caption: 'Scotland',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            time={5000}
            width="71.25rem"
            height="13.8125rem"
            captionStyle={captionStyle}
            radius="0.625rem"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="black"
            slideImageFit="contain"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              //   maxWidth: "850px",
              //   maxHeight: "500px",
              margin: '40px auto',
              BackgroundColor: 'black',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AdvancedCarousel;
