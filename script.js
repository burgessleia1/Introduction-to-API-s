const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;

    for (let i = 0; i < business.length; i++) {
      
      let card = document.createElement("section");
      card.className = "card";

      
      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;
      card.appendChild(h2);

      
      let image = document.createElement("img");
      image.setAttribute("src", business[i].imageurl);
      image.setAttribute("alt", `${business[i].name} logo`);
      card.appendChild(image);

      
      let address = document.createElement("p");
      address.textContent = business[i].address;
      card.appendChild(address);

     
      let description = document.createElement("p");
      description.textContent = business[i].description;
      card.appendChild(description);

      document.querySelector("div.cards").appendChild(card);
    }
  })
  .catch(error => console.error("Error loading businesses:", error));
=> console.error("Error fetching API:", error));
