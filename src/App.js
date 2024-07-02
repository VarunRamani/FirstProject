
import './App.css';
import {useState} from "react";
import EventForm from './EventForm';
import EventList from './EventList';

function App() {

  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent])
  }
const handleDataChange = (e) => {
  setSelectedDate(e.target.value);
}
  return (
    
    <div className="App">
      <h1>Event Viewer</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDataChange}
        required
      ></input>
      <EventForm onAddEvent={addEvent} selectedDate={selectedDate}></EventForm>
      <EventList events={events} selectedDate={selectedDate} />
    </div>
    
  );
}

export default App;
