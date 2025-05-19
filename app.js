
const moviesData = [
    {
        id: 1,
        title: "Homem-Aranha",
        image: "imagens/1hm.jpg",
        description: "Peter Parker é um adolescente tímido que ganha superpoderes...",
        trailer: "https://www.youtube.com/embed/t06RUxPbp_c",
        year: "2002",
        director: "Sam Raimi",
        cast: "Tobey Maguire, Kirsten Dunst, Willem Dafoe",
        actor: "Tobey Maguire" 
    },
    {
        id: 2,
        title: "Homem-Aranha 2",
        image: "imagens/homem aranha 2.jpg",
        description: "Peter tenta equilibrar sua vida pessoal com a de super-herói...",
        trailer: "https://www.youtube.com/embed/1s9Yln0YwCw",
        year: "2004",
        director: "Sam Raimi",
        cast: "Tobey Maguire, Kirsten Dunst, Alfred Molina",
        actor: "Tobey Maguire" 
    },
    {
        id: 3, title: "Homem-Aranha 3",
        image: "imagens/homem aranha 3.jpg",
        description: "Peter enfrenta múltiplos vilões: Homem-Areia, Venom, e o novo Duende Verde (seu ex-amigo Harry). Ele também lida com o simbionte alienígena que muda sua personalidade, tornando-o mais agressivo.",
        trailer: "https://www.youtube.com/embed/e5wUilOeOmg",
        year: "2007",
        director: "Sam Raimi",
        cast: "Tobey Maguire, Kirsten Dunst, James Franco",
        actor:"Tobey Maguire"
    },
    {
        id: 4, title: "O Espetacular Homem-Aranha",
        image: "imagens/o espetacular homem aranha.jpg",
        description: "Peter Parker é um jovem curioso e rebelde que ganha poderes de aranha após visitar o laboratório da Oscorp. Enfrenta o vilão Lagarto (Dr. Curt Connors), um cientista que busca regenerar o próprio braço com DNA de réptil. Começa um romance com Gwen Stacy.",
        trailer: "https://www.youtube.com/embed/-tnxzJ0SSOw",
        year: "2012",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone, Rhys Ifans",
        actor:"Andrew Garfield"
    },
    {
        id: 5, title: "O Espetacular Homem-Aranha 2",
        image: "imagens/o espetacular homem aranha 2.jpg",
        description: "Peter enfrenta Electro, um antigo fã que se transforma em vilão após um acidente, e também Harry Osborn, que vira o novo Duende Verde. O filme tem uma das cenas mais tristes da franquia com a morte de Gwen Stacy.",
        trailer: "https://www.youtube.com/embed/DlM2CWNTQ84",
        year: "2014",
        director: "Marc Webb",
        cast: "Andrew Garfield, Emma Stone, Jamie Foxx",
        actor:"Andrew Garfield",
    },
    {
        id: 6, title: "Homem-Aranha: De Volta ao Lar",
        image: "imagens/images (2).jpg",
        description: "Após sua introdução em Capitão América: Guerra Civil, Peter retorna ao ensino médio e tenta provar seu valor para Tony Stark. Enfrenta o Abutre (pai da sua crush Liz) enquanto tenta ser um herói independente.",
        trailer: "https://www.youtube.com/embed/n9DwoQ7HWvI",
        year: "2017",
        director: "Jon Watts",
        cast: "Tom Holland, Michael Keaton, Robert Downey Jr.",
        actor:"Tom Holland",
    },
    {
        id: 7,
        title: "Homem-Aranha: Longe de Casa",
        image: "imagens/images (3).jpg",
        description: "Após a morte de Tony Stark em Vingadores: Ultimato, Peter tenta tirar férias com os amigos na Europa, mas é recrutado por Nick Fury para enfrentar o vilão Mysterio. O final traz uma revelação chocante sobre sua identidade secreta.",
        trailer: "https://www.youtube.com/embed/DYYtuKyMtY8",
        year: "2019",
        director: "Jon Watts",
        cast: "Tom Holland, Jake Gyllenhaal, Samuel L. Jackson",
        actor:"Tom Holland",
    },
    {
        id: 8,
        title: "Homem-Aranha: Sem Volta para Casa",
        image: "imagens/Homem-Aranha_-_Sem_Volta_Para_Casa.webp",
        description: "Peter pede ajuda ao Doutor Estranho para apagar sua identidade da memória das pessoas, mas o feitiço dá errado e vilões de outros universos começam a surgir: Duende Verde, Dr. Octopus, Electro, entre outros. Os outros dois Homens-Aranha (Tobey e Andrew) aparecem para ajudá-lo.",
        trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
        year: "2021",
        director: "Jon Watts",
        cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
        actor:"Tom Holland",
    },
    {
        id: 9,
        title: "Homem-Aranha: Através do Aranhaverso",
        image: "imagens/images (4).jpg",
        description: "Esssa e uma versao de um novo homem aranha mais jovem e mais inesperiente onde no seu mundo o homem aranha acaba morrendo e ele tem que cuidar não só da sua cidade mas também o multiverso.",
        trailer: "https://www.youtube.com/embed/BbXJ3_AQE_o",
        year: "2023",
        director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
        cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac",

    }, 
    {
        id: 10, 
        title: "Capitão América: Guerra Civil",
        image: "imagens/capitao.jpg",
        description: "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.",
        trailer: "https://www.youtube.com/embed/dKrVegVI0Us",
        year: "2016",
        director: "Anthony Russo, Joe Russo",
        cast: "Chris Evans, Robert Downey Jr., Scarlett Johansson",
        
        
    }
];


window.filterMovies = function (actor) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = ''; // Limpa o container

 
    const moviesToShow = actor === 'all'
        ? moviesData
        : moviesData.filter(movie => movie.actor === actor);

  
    moviesToShow.forEach(movie => {
        const isFavorite = localStorage.getItem(`favorite_${movie.id}`) === 'true';

        moviesContainer.innerHTML += `
            <div class="col">
                <div class="movie-card">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                            onclick="toggleFavorite(event, ${movie.id})">⭐</button>
                    <img src="${movie.image}" class="movie-img" alt="${movie.title}" 
                         onclick="redirectToDetails(${movie.id})">
                    <p class="movie-title">${movie.title}</p>
                </div>
            </div>
        `;
    });
}


function loadMovies() {
    filterMovies('all'); 
}


window.toggleFavorite = function (event, movieId) {
    event.stopPropagation();

    const button = event.target;
    button.classList.toggle('active');

    const isFavorite = button.classList.contains('active');
    localStorage.setItem(`favorite_${movieId}`, isFavorite);

    const movie = moviesData.find(m => m.id === movieId);
    alert(isFavorite ? `Adicionado aos favoritos: ${movie.title}` :
        `Removido dos favoritos: ${movie.title}`);
}


window.redirectToDetails = function (movieId) {
    window.location.href = `detalhes.html?id=${movieId}`;
}

let currentDestaqueIndex = 0;


function loadDestaque() {
    const movie = moviesData[currentDestaqueIndex];
    
    document.getElementById('destaque-imagem').src = movie.image;
    document.getElementById('destaque-titulo').textContent = movie.title;
    document.getElementById('destaque-descricao').textContent = movie.description;
    document.getElementById('destaque-ano').textContent = movie.year;
    document.getElementById('destaque-elenco').textContent = movie.cast;
    document.getElementById('destaque-botao').onclick = function() {
        redirectToDetails(movie.id);
    };
}


window.moverDestaque = function(direction) {
    
    currentDestaqueIndex += direction;
    
    
    if (currentDestaqueIndex < 0) {
        currentDestaqueIndex = moviesData.length - 1;
    } else if (currentDestaqueIndex >= moviesData.length) {
        currentDestaqueIndex = 0;
    }
    
    
    loadDestaque();
}


function loadMovies() {
    loadDestaque(); 
    filterMovies('all'); 
    document.querySelectorAll('.movie-img, #destaque-imagem').forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });

}


document.addEventListener('DOMContentLoaded', loadMovies);