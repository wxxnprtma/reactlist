import Card from "../card/card.component";

const CardList = ({ events, editEvent }) => {
    return (
        <div className="card-list flex flex-wrap -m-4  lg:mx-20">

            {events.map(event => (
                <Card key={event.id} events={event} editEvent={editEvent} />
            ))}


        </div>
    );
}
export default CardList
// flex flex-wrap -m-4