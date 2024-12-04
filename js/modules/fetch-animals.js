import NumbersAnimation from './numbers-animation.js';
export default function createAnimals(url, target) {
  //create the `div` with animals totals
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  //activate the create animal function and append the element created to the DOM
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //animate the numbers of each animal
  function animaAnimalsNumbers() {
    const numbersAnimation = new NumbersAnimation(
      '[data-numero]',
      '.numeros',
      'ativo',
    );
    numbersAnimation.init();
  }
  //get the animals data from a JSON file and create each animal using the createAnimal function
  async function fetchAnimals() {
    try {
      //fetch and waits for the response
      const animalsResponse = await fetch(url);
      //transform the response into a Json
      const animalsJSON = await animalsResponse.json();

      //after the json transformation, activate the functions to fill and animate the numbers
      animalsJSON.forEach((animal) => fillAnimals(animal));
      animaAnimalsNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return fetchAnimals();
}
