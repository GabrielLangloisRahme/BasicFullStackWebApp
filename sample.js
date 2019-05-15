// wrote a function to retrieve a blob of jason
// make an ajax request! Use the 'fetch' function
// https://rallycoding.herokuapp.com/api/music_albums


//whenever use fetch, it returns a promise, use .then with them


function fetchAlbums() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json))
}

async function fetchAlbums() {
   const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
   const json = await res.json()
   console.log(json)
}

fetchAlbums();

const fetchAlbums = async ()=> {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    console.log(json)
 }
 
 fetchAlbums();