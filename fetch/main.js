const myRequest = new Request('https://jsonplaceholder.typicode.com/users');

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

const myPokeRequest = new Request('https://pokeapi.co/api/v2/pokemon/210');

fetch(myPokeRequest)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
