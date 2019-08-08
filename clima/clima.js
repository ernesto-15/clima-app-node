const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=33f7096156c14dade7d70c60b1979425&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}