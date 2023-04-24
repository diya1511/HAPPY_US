import Card from './Card'
import './Meditation.css'
function Tours({tours, removeTour}) {
    return (
        <div className='containermed'>
            <div>
                <h2 className='title'>Meditation</h2>
            </div>
            <div className='cardsmed'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;