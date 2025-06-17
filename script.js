const movies = [
  { title: 
    "Iron Man", poster: "ironman.jpg", 
    video: "https://www.youtube.com/embed/8ugaeA-nMTc" },
 
    { title:
     "Captain America", poster: "captain america.jpg", 
     video: "https://www.youtube.com/embed/JerVrbLldXw" },
 
     { title: "Thor", poster: "thor.jpg",
         video: "https://www.youtube.com/embed/JOddp-nlNvQ" },
 
     { title: "Black Panther",
         poster: "black panther.jpg", video: "https://www.youtube.com/embed/xjDjIWPwcPU" },
 
     { title: "Avengers: Endgame", poster: "avenger end game.jpg", video: "https://www.youtube.com/embed/TcMBFSGVi1c" },
 
     { title: "Iron Man 2", poster: "ironman2.jpg", video: "https://www.youtube.com/embed/BoohRoVA9WQ" },
 
     { title: "Iron Man 3", poster: "ironman3.jpg", video: "https://www.youtube.com/embed/Kkhr_GcE6kA" },
 
     { title: "Captain Marvel", poster: "captainmarvel.jpg", video: "https://www.youtube.com/embed/Z1BCujX3pw8" },
 
     { title: "Ant-Man", poster: "antman.jpg", video: "https://www.youtube.com/embed/pWdKf3MneyI" },
 
     { title: "Ant-Man and the Wasp", poster: "antman2.jpg", video: "https://www.youtube.com/embed/UUkn-enk2RU" },
 
     { title: "Ant-Man and the Wasp: Quantumania", poster: "antman3.jpg", video: "https://www.youtube.com/embed/ZlNFpri-Y40" },
 
     { title: "Thor: The Dark World", poster: "thor2.jpg", video: "https://www.youtube.com/embed/npvJ9FTgZbM" },
 
     { title: "Thor: Ragnarok", poster: "thor3.jpg", video: "https://www.youtube.com/embed/ue80QwXMRHg" },
 
     { title: "Thor: Love and Thunder", poster: "thor4.jpg", video: "https://www.youtube.com/embed/Go8nTmfrQd8" },
 
     { title: "Doctor Strange", poster: "doctorstrange.jpg", video: "https://www.youtube.com/embed/HSzx-zryEgM" },
 
     { title: "Doctor Strange in the Multiverse of Madness", poster: "doctorstrange2.jpg", video: "https://www.youtube.com/embed/aWzlQ2N6qqg" },
 
     { title: "Avengers: Age of Ultron", poster: "avengerageofultron.jpg", video: "https://www.youtube.com/embed/tmeOjFno6Do" },
 
     { title: "Avengers: Infinity War", poster: "avengerinfinitywar.jpg", video: "https://www.youtube.com/embed/6ZfuNTqbHE8" }

    ];

const container = document.getElementById("movieContainer");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <button onclick="watch('${movie.video}')">▶ Watch</button>
  `;

  container.appendChild(card);
});

function watch(videoUrl) {
  const url = `watch.html?video=${encodeURIComponent(videoUrl)}`;
  window.location.href = url;
}
