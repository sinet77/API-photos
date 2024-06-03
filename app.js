async function fetchPhotos(){
    const response = await fetch("https://api.unsplash.com/")
    const data = await response.json

    console.log(data)
}

fetchPhotos()