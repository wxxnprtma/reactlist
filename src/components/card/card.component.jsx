import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const Card = ({ events, editEvent }) => {
    const { eventName, date } = events;




    return (
        <div className="card rounded-lg p-2 w-full md:w-1/2 lg:w-3/12">
            <div className="card-body border bg-gray-200 dark:bg-gray-900 transition-all ease-in-out duration-300 rounded p-5 ">
                <h5 className="card-title">{eventName}</h5>



                <div className="flex justify-between">
                    <p className="card-text">{date}</p>
                    {/* edit form button */}
                    <div className=''>
                        <button onClick={editEvent} className="bg-blue-500 hover:bg-blue-700 text-white mx-2">
                            <FaEdit />
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white mx-2">
                            <FaTrashAlt />
                        </button>
                    </div>

                </div>
                {/* link to pop up form */}
            </div>
        </div>
    );

}

export default Card
