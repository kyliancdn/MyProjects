const API_KEY = "api_key=b1bb009f89a909c0ae0b65bc17104e0e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE = 'https://image.tmdb.org/t/p/w500/';
const searchBtn = document.querySelector('button')


function fetchAll() {
    
    const input = document.querySelector('input')
    const search = input.value
    const API_URL = `${BASE_URL}/search/movie?${API_KEY}&query=${search}&page=1&include_adult=false8&language=fr-fr`
   
    console.log(API_URL)
	fetch(API_URL)
    .then(res => res.json())
    .then(data => {
    console.log(data.results[0])
    const movie = data.results[0]
    
    const h2 = document.createElement('h2')
    h2.innerHTML = `${movie.title}`
    document.body.appendChild(h2)
    
    const img = document.createElement('img')
    img.src = `${IMG_BASE + movie.poster_path}`
    document.body.appendChild(img)
    
    showTrailer(movie)
	})
}

searchBtn.addEventListener("click", fetchAll)

function showTrailer(film){
    fetch(`https://api.themoviedb.org/3/movie/${film.id}/videos?api_key=1cf50e6248dc270629e802686245c2c8&language=fr-fr`)
        .then((res) => res.json())
        .then((videoData) => {
            console.log(videoData)
            const videoKey = videoData.results[0].key
            console.log(videoKey)
            const iframe = document.createElement("iframe")
            iframe.src=`https://www.youtube.com/embed/${videoKey}`
            iframe.width = 1080;
            iframe.height = 720;
            document.body.appendChild(iframe);
        })
}





















    
