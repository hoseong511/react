const React = require('react');
const { Component } = React;
const axios = require('axios');



const korean_URL = `https://stdict.korean.go.kr/api/search.do?key=${API_key}&q`;


class Api_word extends Component {

  getWord = async () => {
    try {
      
      const data = await axios.get(`${korean_URL}=안녕`, { headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'}}
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

