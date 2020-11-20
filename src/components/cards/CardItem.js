import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './CardItem.module.css';

const CardItem = ({ cases, name, lastUpdate, country, bcolor }) => {
  console.log(bcolor);
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card)}
      style={{ borderBottom: `10px solid  ${bcolor}` }}
    >
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {name}
        </Typography>
        <Typography variant='h5'>
          <CountUp start={0} end={cases.value} duration={2} separator=',' />
        </Typography>
        <Typography color='textSecondary'>
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant='body2'>
          {' '}
          Number of active cases in
          <b> {country === '' ? 'global' : country}</b>
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardItem;
