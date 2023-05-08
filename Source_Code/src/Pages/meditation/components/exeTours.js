import Card from './Card';
import './Meditation.css';
function ExeTours({ tours, removeTour }) {
  return (
    <div className="containermed">
      <div>
        <h2 className="title">Exercise</h2>
      </div>
      <div className="cardsmed">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} type={'/exeDetail'}></Card>;
        })}
      </div>
    </div>
  );
}

export default ExeTours;
