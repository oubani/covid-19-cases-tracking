import React from 'react';
import { Grid } from '@material-ui/core';


import styles from './Cards.module.css';
import CardItem from './CardItem';

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  if (!confirmed) {
    return <p>Loading ...</p>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={5} justify='center'>
        <CardItem cases={confirmed} name='confirmed' bcolor="#7F7FFF" country={country} lastUpdate={lastUpdate} />
        <CardItem cases={recovered} name='recovered' bcolor="#7FFF7F" country={country} lastUpdate={lastUpdate} />
        <CardItem cases={deaths} name='deaths' bcolor="#FF7F7F" country={country} lastUpdate={lastUpdate} />
      </Grid>
    </div>
  );
};

export default Cards;
