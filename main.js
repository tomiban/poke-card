const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeId = document.querySelector('[data-poke-id]')
const pokeStats = document.querySelector('[data-poke-stats]');


const typeColors = { //diccionario de colores para mapear los tipos
    electric: '#FFEA70',
    normal: '#BO9398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#561D25',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F' 
};

const searchPokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(res => renderPokemon(res)) 
}

const renderPokemon = data => {
    console.log(data)
    const sprite = data.sprites.front_default;
    const {stats, types} = data; //desestructuracion de las propiedades con mismo nombre
    
    pokeName.textContent = data.name;
    pokeId.textContent = `N° ${data.id}`;
    pokeImg.setAttribute('src', sprite);

    setCardColor(types);
    renderPokemonTypes(types);
}

const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name]; // accede a la propiedad type del objeto y lo mecha con el color del diccionario
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default; //agrega color 2 si es que existe sino pone el color x default

    pokeImg.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = '5px 5px';
}


const renderPokemonTypes = types => {
    pokeTypes.innerHTML = ''; //borra el contenido
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}