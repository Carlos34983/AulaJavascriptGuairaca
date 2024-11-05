document.addEventListener("DOMContentLoaded", () => {
    const characterList = document.getElementById("character-list");
  
    async function fetchCharacters() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character?page=19");
        const data = await response.json();
        
        data.results.forEach(character => {

          const card = document.createElement("div");
          card.classList.add("character-card");
  
          const img = document.createElement("img");
          img.src = character.image;
          img.alt = character.name;

          const name = document.createElement("h2");
          name.textContent = character.name;

          const status = document.createElement("p");
          status.textContent = `Status: ${character.status}`;
  
          const species = document.createElement("p");
          species.textContent = `Espécie: ${character.species}`;
          
          if (character.type) {
            const type = document.createElement("p");
            type.textContent = `Tipo: ${character.type}`;
            card.appendChild(type);
          }
 
          const origin = document.createElement("p");
          origin.textContent = `Origem: ${character.origin.name}`;
  
          const location = document.createElement("p");
          location.textContent = `Localização: ${character.location.name}`;
  
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(status);
          card.appendChild(species);
          card.appendChild(origin);
          card.appendChild(location);

          characterList.appendChild(card);
        });
      } catch (error) {
        console.error("Erro ao obter os dados dos personagens:", error);
      }
    }
  
    fetchCharacters();
  });
  