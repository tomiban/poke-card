// const pokeCard = document.querySelector('[data-poke-card]');
// const pokeName = document.querySelector('[data-poke-name]');
// const pokeImg = document.querySelector('[data-poke-img-container]');
// const pokeTypes = document.querySelector('[data-poke-types]');
// const pokeId = document.querySelector('data-poke-types')
// const pokeStats = document.querySelector('[data-poke-stats]');

const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');

button.addEventListener('click', e => {
    e.preventDefault();
    traerPokemon(input.value); //trae el pokemon con el valor de lo que escribimos
})

function traerPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`) //Realiza una request a la URL pasada y traer una respuesta
    .then(res => res.json()) //convierta la respuesta en JSON 
    .then(data => { //obtiene el JSON 
        crearPokemon(data);
    }) 
}

function crearPokemon(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);
    pokemonContainer.appendChild(div);
}

traerPokemon();