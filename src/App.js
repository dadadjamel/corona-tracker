import React, { Component } from 'react';
import Cards from './components/Card/Cards'
import Chart from './components/Chart/Chart'
import Countrypicker from './components/Countrypicker/Countrypicker';
import style from "./App.module.css"
import { fetchData } from "./api"
import covid19 from "./image.png"

class App extends Component {

  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const data = await fetchData()
    console.log(data);
    this.setState({ data: data });

  }
  state = {}
  render() {

    const handlecountruchange = async (country) => {
      const data = await fetchData(country)
      this.setState({ data: data, country:country });
      console.log(data);
      console.log(country);
      
      

    }
    return (
      <div className={style.container}>
        <img src={covid19} alt="covid19"/>
        <Cards data={this.state.data} />
        <Countrypicker handlecountruchange={handlecountruchange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;