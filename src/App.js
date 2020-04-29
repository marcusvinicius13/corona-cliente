import React from 'react';

// Importação padrão
//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

// Importação por arquivo

import { Cards, Chart, CountryPicker } from './components/index';
import styles from './App.module.css';
import  { fetchData } from './api';

import coronaImage from './images/corona.png'

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {

        const { data, country } = this.state;

        return (
            <div className={ styles.container }>  
                <img className={styles.image} src={coronaImage} alt="Corona Vírus"/>
                <Cards data={ data }/>
                <CountryPicker handleCountryChange={ this.handleCountryChange }/>
                <Chart data={ data } country={ country } />

                Desenvolvido com amor por Marcus Vinícius
            </div>
        ) 
    }  
}

export default App;