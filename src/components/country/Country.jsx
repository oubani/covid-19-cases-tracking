import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';
import { getCountries } from '../../api';

import styles from './Country.module.css';
const Country = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await getCountries());
    };
    fetchCountries();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value=''>Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
