var axios = require('axios');


module.exports = {
  fetchPopularRepos: function(language) {
    var encodedResult = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+language+'&sortstars&order=desc&type=Respositories');

    return axios.get(encodedResult)
    .then(function(response) {
      return response.data.items;
    });
  }
}
