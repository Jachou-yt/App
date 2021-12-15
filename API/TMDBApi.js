const API_TOKEN = "773a70519829dc640ed819b296c30492"

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json)
        .catch((error) => console.log(error))
}
