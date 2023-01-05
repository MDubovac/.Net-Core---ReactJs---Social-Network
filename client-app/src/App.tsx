import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
        <Header as="h2" icon="users" content="Reactivities" />
        <h1>Activities</h1>
        <List>
          {
            activities.map((item: any) => {
              return (
                <ListItem key={item.id}>
                  {item.title}
                </ListItem>
              )
            })
          }
        </List>
    </div>
  );
}

export default App;
