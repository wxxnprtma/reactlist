import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { FaPlus, } from 'react-icons/fa'
import AddEventForm from './components/add-event/add-event.component';
import EditFormEvent from './components/edit-event/edit-event.component';

const App = () => {
  const date = new Date()
  const year = date.getFullYear()
  const [events, setEvents] = useState([
    { id: '1', eventName: "Hari Laut dan Samudera Nasional", date: `${year}-01-15` },
    { id: '2', eventName: "Hari Lahan Basah Sedunia", date: `${year}-02-02` },
    { id: '3', eventName: "Hari Peduli Sampah Nasional", date: `${year}-02-21` },
    { id: '4', eventName: "Hari Hutan Sedunia", date: `${year}-03-21` },
    { id: '5', eventName: "Hari Air Sedunia", date: `${year}-03-22` },
    { id: '6', eventName: "Hari Meteorologi Sedunia", date: `${year}-03-23` },
    { id: '7', eventName: "Hari Bumi", date: `${year}-04-22` },
    { id: '8', eventName: "Hari Burung Migratori Internasional", date: `${year}-05-03` },
  ]);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [search, setSearch] = useState('');
  const [openAdd, setAddOpen] = useState(false);
  const [openEdit, setEditOpen] = useState(false);
  const [addValue, setAddValue] = useState(null);
  const [addTextValue, setAddTextValue] = useState('');
  const [editValue, setEditValue] = useState(null);
  const [editTextValue, setEditTextValue] = useState('');


  const handleClickAddOpen = () => {
    setAddOpen(true);
  };
  const handleAddClose = () => {
    setAddOpen(false);
  };
  const handleClickEditOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleDateChange = (date) => {
    setAddValue(date);
  };
  const handleTextChange = (e) => {
    setAddTextValue(e.target.value);
  };
  const handleEditDateChange = (date) => {
    setEditValue(date);
  }
  const handleEditTextChange = (e) => {
    setEditTextValue(e.target.value);
  }

  //search event
  useEffect(() => {
    const newFilteredEvents = events.filter(event => {
      return event.eventName.toLowerCase().includes(search.toLocaleLowerCase());
    });
    setFilteredEvents(newFilteredEvents);
  }, [search, events]);


  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearch(searchField);

  }
  //add alert

  const onAddEventHandler = () => {
    const newEvent = {
      id: events.length + 1,
      eventName: addTextValue,
      date: addValue.getFullYear() + '-' + (addValue.getMonth() + 1) + '-' + addValue.getDate()
    }
    setEvents([...events, newEvent]);
    setAddOpen(false);

  }

  const openAddEventForm = () => {
    return <AddEventForm open={openAdd}
      handleClose={handleAddClose}
      handleDateChange={handleDateChange}
      handleTextChange={handleTextChange}
      onSumbitHandler={onAddEventHandler}
      value={addValue}
      textValue={addTextValue} />
  }

  const onEditEventHandler = () => {
    const newEvents = events.map(event => {
      if (event.id === editValue.id) {
        event.eventName = editTextValue;
        event.date = editValue.getFullYear() + '-' + (editValue.getMonth() + 1) + '-' + editValue.getDate();
      }
      return event;
    });
    setEvents(newEvents);
    setEditOpen(false);
  }


  const openEditEventForm = () => {

    return (<EditFormEvent open={openEdit}
      handleClose={handleEditClose}
      handleDateChange={handleEditDateChange}
      handleTextChange={handleEditTextChange}
      onSumbitHandler={onEditEventHandler}
      value={editValue}
      textValue={editTextValue}
      event={events} />)
  }
  const delEvent = (id) => {
    const newEvents = events.filter(event => {
      return event.id !== id;
    });
    setEvents(newEvents);
  }


  return (
    <div className=''>
      {openAddEventForm()}
      {openEditEventForm()}

      <div className='header text-center mb-2 mt-20'>
        <h1 className='text-4xl m-4'>Hari Lingkungan Hidup</h1>
      </div>
      <div className='flex justify-center gap-4'>
        <SearchBox className='event-search-box '
          onChangeHandler={onSearchChange}
          placeholder='search event' />
        <button className='rounded-lg p-4 border hover:bg-black' onClick={handleClickAddOpen}><FaPlus /></button>

      </div>

      <div className='m-20'>
        <CardList events={filteredEvents} editEvent={handleClickEditOpen} />

      </div>

    </div>
  )



}
export default App;
