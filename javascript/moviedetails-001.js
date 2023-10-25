// Inicialización de Referencias (para roadmap futuro)
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Funciones para el fetch de datos de la API (dejo la búsqueda avanzada para roadmap futuro, hay que revisarlo y probarlo, ponemos en backlog para próxima versión)
let getMovie = () => {
    // let movieName = movieNameRef.value;
    let url = `https://www.omdbapi.com/?t=saw+x&y=2023&apikey=5650fb51`;
    // let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    // if si el campo es vacio
    // if (movieName.length <= 0) {
    //     result.innerHTML = `<h3 class="msg">Ingrese un nombre de película o serie</h3>`;
    // } 
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log("Pelicula:" + " " + data.Title);
            console.log("Poster:" + " " + data.Poster);
            console.log("Year:" + " " + data.Year);
            console.log("Rating:" + " " + data.imdbRating);
            console.log("Sinopsis:" + " " + data.Plot);
            console.log("Actores:" + " " + data.Actors);
            console.log("Director:" + " " + data.Director);
            console.log("Género:" + " " + data.Genre);
            console.log("Pais:" + " " + data.Country);
            console.log("Idioma:" + " " + data.Language);
            console.log("Duracion:" + " " + data.Runtime);
            console.log("Certificación:" + " " + data.Rated);

            poster.innerHTML = `<img src=${data.Poster} class="poster">`;
            title.innerHTML = `<h1 class="h1 detail-title">${data.Title}</h1>`;
            genre.innerHTML = `<p size="4">${data.Genre}</p>`;
            rating.innerHTML = `<p size="4">${data.imdbRating}</p>`;
            year.innerHTML = `<p size="4">${data.Year}</p>`;
            runtime.innerHTML = `<p size="4">${data.Runtime}</p>`;
            plot.innerHTML = `<p class="storyline">${data.Plot}</p>`;

        });
}
//};

window.addEventListener("load", getMovie);



/******************************************************************************/
/****************** *******************/
/******************************************************************************/



document.getElementById("openPopup1.1").addEventListener("click", function () {
    var videoPopup = document.getElementById("videoPopup1.1");
    var videoIframe = videoPopup.querySelector("iframe");

    // Establece la URL del video de YouTube en el iframe
    videoIframe.src = "https://www.youtube.com/embed/u1GdSJGz5Ek";

    // Muestra el video emergente
    videoPopup.style.display = "block";
});

document.getElementById("closePopup1.1").addEventListener("click", function () {
    var videoPopup = document.getElementById("videoPopup1.1");
    var videoIframe = videoPopup.querySelector("iframe");

    // Detén la reproducción del video
    videoIframe.src = "";

    // Oculta el video emergente
    videoPopup.style.display = "none";
});


document.getElementById("openPopup1.2").addEventListener("click", function () {
    var videoPopup = document.getElementById("videoPopup1.2");
    var videoIframe = videoPopup.querySelector("iframe");

    // Establece la URL del video de YouTube en el iframe
    videoIframe.src = "https://www.youtube.com/embed/soEI7nkSPco";

    // Muestra el video emergente
    videoPopup.style.display = "block";
});

document.getElementById("closePopup1.2").addEventListener("click", function () {
    var videoPopup = document.getElementById("videoPopup1.2");
    var videoIframe = videoPopup.querySelector("iframe");

    // Detén la reproducción del video
    videoIframe.src = "";

    // Oculta el video emergente
    videoPopup.style.display = "none";
});