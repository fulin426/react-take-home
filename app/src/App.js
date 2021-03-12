import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import MediaList from './components/MediaList';
import axios from 'axios';
import './App.css';

function App() {
 const [data, setData] = useState({ campaigns: [] });

 useEffect(() => {
  // Fetch initial data
  axios.get('https://www.plugco.in/public/take_home_sample_feed')
  .then(res => {
    console.log(res.data);
    setData(res.data);
  })
  .catch(err =>
    console.log(err)
  );
 }, [])

  return (
    <Container maxWidth="sm">
      {data.campaigns.map(campaign =>
        <div key={campaign.id}>
          <Header 
            name={campaign.campaign_name} 
            iconUrl={campaign.campaign_icon_url} 
            perInstall={campaign.pay_per_install}
          />
          <MediaList medias={campaign.medias} />
        </div>
      )}
    </Container>
  );
}

export default App;
