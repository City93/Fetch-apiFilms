const fetch = require('node-fetch')
let api = '1acfe935'
const getMovie = async (movie) =>{
    let film = movie
    const response = await fetch(`https://www.omdbapi.com/?apikey=${api}&t=${film}`)
    const data = await response.json()
    const dataMovie =  {
        title : data.Title,
        year : data.Year,
        imbd : data.imdbID
    }
    return dataMovie
}

module.exports = getMovie