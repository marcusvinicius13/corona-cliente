import React from 'react';

// Importação padrão
//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

// Importação por arquivo

import { Cards, Chart, CountryPicker, Header, Footer } from './components/index';
import styles from './App.module.css';
import  { fetchData } from './api';

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
                <Header />
                
                <Cards data={ data }/>
                <CountryPicker handleCountryChange={ this.handleCountryChange }/>
                <Chart data={ data } country={ country } />

                <Footer />
                
            </div>
        ) 
    }  
}

export default App;