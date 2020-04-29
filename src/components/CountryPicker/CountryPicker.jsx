import React, { useState, useEffect } from  'react';
import  { FormControl, NativeSelect } from  '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fatchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCoutries, setFetchedCountries] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fatchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect 
                defaultValue="" 
                onChange={(e) => handleCountryChange(e.target.value)}
                >
                <option value="">Global</option>
                {fetchedCoutries
                    .map(
                        (country, i) => <option key={i} value={country}>{country}</option>
                    )
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;