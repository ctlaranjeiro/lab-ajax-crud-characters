class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters');
  }

  getOneRegister(characterId) {
    return axios.get(this.BASE_URL + `/characters/${characterId}`);
  }

  createOneRegister(character) {
    return axios.post(this.BASE_URL + '/characters', character);
  }

  updateOneRegister(characterId, updatedCharacter) {
    return axios.patch(this.BASE_URL + `/characters/${characterId}`, updatedCharacter);
  }


  deleteOneRegister(characterId) {
    return axios.delete(this.BASE_URL + `/characters/${characterId}`);
  }
}