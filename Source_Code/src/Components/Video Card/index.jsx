import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';
import './styles.css';
import "../global.css";

export default function VideoCard( props ) {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const opts = {
    width: '1138',
    height: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  
  const handleButtonClick = () => {
    setShowVideo(true);
  };
  
  function getVideoIdFromLink(link) {
    var videoIdRegex = /(?:\?v=|&v=|youtu\.be\/)(.*?)(?:\?|$)/;
    var match = link.match(videoIdRegex);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }
  
  var videoLink = props.videoLink || 'https://www.youtube.com/';
  var videoId = getVideoIdFromLink(videoLink);
    
  
  return (
    <>
      <Card
        style={{
          width: '25%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          // gap: '0.25rem',
          height: 'auto',
        }}
      >
        <Card.Img
          variant="top"
          src={props.thumbnail}
          style={{ borderRadius: '0.3125rem' }}
        />
        <Card.Body
          style={{
            border: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            // gap: '0.25rem',
            padding: '0.25rem',
            height: '100%',
          }}
        >
          <Card.Title
            style={{
              fontSize: 'var(--title-2-medium-size)',
              lineHeight: '1.75rem',
              fontWeight: '500',
              fontFamily: 'var(--title-2-medium)',
              color: 'var(--text-color)',
              textAlign: 'left',
            }}
          >
            {props.title}
          </Card.Title>
          <Card.Text>
            {props.channelName}
          </Card.Text>
          <Button
            variant="primary"
            style={{
              fontSize: 'var(--callout-bold-size)',
              lineHeight: '1.31rem',
              fontWeight: '600',
              fontFamily: 'var(--callout-bold)',
              color: 'var(--white)',
              cursor: 'pointer',
              border: 0,
              padding: 'var(--padding-3xs) var(--padding-base)',
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--br-81xl)',
              overflow: 'hidden',
              justifyContent: 'flex-start',
              gap: 'var(--gap-4xs)',
              marginTop: '0.5rem',
            }}
            onClick={handleShowModal}
          >
            Join Now
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '10px 20px',
          borderRadius: '10px',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Modal.Header
          style={{
            backgroundColor: '#fff',
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '1rem',
          }}
        >
          <Modal.Title
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              fontWeight: '500',
              fontFamily: 'var(--title-2-medium)',
              color: 'grey',
            }}
          >
            Event Details
          </Modal.Title>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            style={{
              fontSize: 'var(--body-text-medium-size)',
              lineHeight: '1.31rem',
              fontWeight: '600',
              fontFamily: 'var(--body-text-medium)',
              color: 'grey',
              cursor: 'pointer',
              border: 0,
              padding: 'var(--padding-3xs) var(--padding-base)',
              backgroundColor: '#fff',
              borderRadius: 'var(--br-81xl)',
              overflow: 'hidden',
              justifyContent: 'flex-start',
              gap: 'var(--gap-4xs)',
            }}
          >
            Close
          </Button>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <p
            style={{
              fontSize: 'var(--title-2-medium-size)',
              lineHeight: '1.5rem',
              fontWeight: '600',
              fontFamily: 'var(--body-text-medium)',
              marginBottom: '0.25rem',
              alignSelf: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <strong>Be more with less</strong>
          </p>
          <div className="date-time-event">
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.5rem',
                fontWeight: '400',
                fontFamily: 'var(--body-text-medium)',
                marginBottom: '0.25rem',
              }}
            >
              <strong>Date:</strong> May 15, 2023
            </p>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.5rem',
                fontWeight: '400',
                fontFamily: 'var(--body-text-medium)',
                marginBottom: '0.25rem',
              }}
            >
              <strong>Time:</strong> 2:00 PM EST
            </p>
          </div>
          <p
            style={{
              fontSize: 'var(--body-text-medium-size)',
              lineHeight: '1.5rem',
              fontWeight: '400',
              fontFamily: 'var(--body-text-medium)',
              padding: '0.5rem 1rem',
              textAlign: 'left',
            }}
          >
            <strong>Description:</strong> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed ut mauris mauris. Nulla ut feugiat
            ex. Donec nec nisl sed felis tempor tincidunt non eu odio. Quisque
            ut mi at libero elementum placerat. Sed nec mauris vel justo blandit
            porttitor. Sed gravida enim vel quam sagittis, eget suscipit augue
            faucibus. Integer interdum sapien nec quam vestibulum, non pretium
          </p>
          <p
            style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              lineHeight: '1.5rem',
              fontWeight: '400',
              fontFamily: 'var(--body-text-medium)',
              padding: '0.5rem 1rem',
              marginBottom: '1.5rem',
            }}
          >
            <strong>By:</strong> Olivia Rhye
          </p>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: '1rem',
            gap: '1rem',
            padding: '0.5rem 1rem',
          }}
        >
          <Button
            variant="primary"
            onClick={() => handleButtonClick()}
            style={{
              fontSize: 'var(--body-text-medium-size)',
              lineHeight: '1.31rem',
              fontWeight: '600',
              fontFamily: 'var(--body-text-medium)',
              color: 'var(--white)',
              cursor: 'pointer',
              border: 0,
              padding: 'var(--padding-3xs) 2rem',
              backgroundColor: 'var(--accent)',
              borderRadius: 'var(--br-81xl)',
              overflow: 'hidden',
              justifyContent: 'flex-start',
              gap: 'var(--gap-4xs)',
              width: '100%',
            }}
          >
            Register
          </Button>
        </Modal.Footer>
      </Modal>
      {showVideo && (
        <div className="video-open-bg">
          <div className="video-open">
          <YouTube videoId={videoId} opts={opts}/>
          </div>
          <Button
            onClick={() => {setShowVideo(false); setShowModal(false);}}
            style={{
              fontSize: 'var(--body-text-medium-size)',
              lineHeight: '1.31rem',
              fontWeight: '600',
              fontFamily: 'var(--body-text-medium)',
              color: 'grey',
              cursor: 'pointer',
              border: 0,
              padding: 'var(--padding-3xs) var(--padding-base)',
              backgroundColor: '#fff',
              borderRadius: 'var(--br-81xl)',
              overflow: 'hidden',
              justifyContent: 'flex-start',
              gap: 'var(--gap-4xs)',
              position: 'absolute',
              right: '15px',
              top: '15px',
            }}
          >
            Close
          </Button>
        </div>
      )}
    </>
  );
}
