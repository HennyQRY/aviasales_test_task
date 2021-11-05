import axios from './axios';

class Api {
  async searchRequest() {
    try {
      const { data: searchResponse } = await axios.get('/search');
      return this.getData(searchResponse);
    } catch {
      console.log('error');
    }
  }

  async getData(response) {
    try {
      const { data } = await axios.get(
        `/tickets?searchId=${response.searchId}`
      );
      return data.stop ? data.tickets : this.getData(response);
    } catch {
      return this.getData(response);
    }
  }
}

export default new Api();
