const React = require('react');
const { Component } = React;
const axios = require('axios');


const API_key = 'E7EA20AB38C9BA3D72B78760502FE244'
const korean_URL = `https://stdict.korean.go.kr/api/search.do?key=${API_key}&q`;


class Api_word extends Component {

  getWord = async () => {
    try {
      
      const data = await axios.get(`${korean_URL}=안녕`, {headers: { 'X-Requested-With': 'XMLHttpRequest' }}
      )      
      console.log(data);

    } catch (error) {
      console.error(error);
    }

  }
  componentDidMount() {
    this.getWord();
  }
  render() {
    return(
      <>
      결과

      </>
    )
  }
}

module.exports = Api_word;

