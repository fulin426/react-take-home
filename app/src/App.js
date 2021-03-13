import React, { useState, useEffect } from 'react';
import { Container, Button, Box } from '@material-ui/core';
import Header from './components/Header';
import MediaList from './components/MediaList';
import RefreshIcon from '@material-ui/icons/Refresh';
import axios from 'axios';
import './App.css';

function App() {
 const [data, setData] = useState({ campaigns: [] });
 // If error from network
 const [isNetworkError, setIsNetworkError] = useState(false);

 useEffect(() => {
  // Fetch initial data
  fetchAPI();
 }, [])

 const fetchAPI = () => {
  axios.get('https://www.plugco.in/public/take_home_sample_feed')
  .then(res => {
    setData(res.data);
    setIsNetworkError(false);
  })
  .catch(err => {
    console.log(err, 'Something Went Wrong');
    setIsNetworkError(true);
  });
 }

  // Only return if there is a network error
  if (isNetworkError) {
    return (
      <Container maxWidth="sm">
        <h2>Oops! Something went wrong with your request</h2>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Button onClick={()=> fetchAPI()}>
            Try Again<RefreshIcon />
          </Button>
        </Box>
      </Container>
    );
  }

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
