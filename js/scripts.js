
var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};


var elMainList = document.querySelector('.js-main-list');
var elHeaderForm = document.querySelector('.site-header__form');
var elHeaderInput = document.querySelector('.site-header__input');
var elHeaderLink = document.querySelectorAll('.site-header__nav-link');
var elHeaderItem = document.querySelectorAll('.site-header__nav-item');

var elModalTitle =document.querySelector('.js-pokemon__title');
var elModalTexet =document.querySelector('.js-pokemon__text');
var elModalList =document.querySelector('.js-pokemon__img-list');



var elTemplate = document.querySelector('.main-template').content;
var elFragment = document.createDocumentFragment();

var animals = pokemons.filter(function(pokemon){
  return pokemon
});

animals.forEach(function(animal){
  var animalTemplate = elTemplate.cloneNode(true);

  var elPassessList = animalTemplate.querySelector('.main__item-passess');
  $_('.js-name',animalTemplate).textContent = animal.name;
  $_('.js-mian-img',animalTemplate).src = animal.img;
  $_('.js-pokemo-height',animalTemplate).textContent = animal.height;
  $_('.js-pokemon-weight',animalTemplate).textContent = animal.weight;
  var elTypeFragment = document.createDocumentFragment();

  animal.type.forEach(function(type){
    var typeItem = document.createElement('li');
    typeItem.classList.add('span-passess');

    typeItem.textContent = type;

    elTypeFragment.appendChild(typeItem);
  });

  elFragment.appendChild(animalTemplate)
  elPassessList.appendChild(elTypeFragment);
});
elMainList.appendChild(elFragment)


elHeaderForm.addEventListener('input',function(evt){
  evt.preventDefault();

  elMainList.innerHTML = ''
  var pokemonName = new RegExp(elHeaderInput.value , 'gi');

  var filteredPokemon= pokemons.filter(function(pokemon){
    return pokemon.name.toString().match(pokemonName)

  });

  var elTypeFragment = document.createDocumentFragment();

  filteredPokemon.forEach(function(pokemon){
    var searchTemplate = elTemplate.cloneNode(true);

    $_('.js-name',searchTemplate).textContent = pokemon.name;
    $_('.js-mian-img',searchTemplate).src = pokemon.img;
    $_('.js-pokemo-height',searchTemplate).textContent = pokemon.height;
    $_('.js-pokemon-weight',searchTemplate).textContent = pokemon.weight;

    elTypeFragment.appendChild(searchTemplate);
  });
  elMainList.appendChild(elTypeFragment);
});


//////////////////
// typesList.addEventListener('click', evt => {

//   if (evt.target.matches(a)) {
//       var clickFiltered = pokemons.filter(pokemon => pokemon.type.includes(evt.target.dataset.type) || evt.target.dataset.type === "all");

//       makeVisible(clickFiltered);
//       // localStorage.setItem(activeType, evt.target.dataset.type)
//   }
// });
////////////////////



elHeaderItem.addEventListener('click', function(evt){
      if (evt.target.matches(a)){
        var pokemonLink = pokemons.filter(function(pokemon){
          return pokemon.type.includes(evt.target.dataset.type)
        });

      };

      elMainList.innerHTML = '';

      var  elTypeFragment = document.createDocumentFragment();
      pokemonLink.forEach(function(pokemon){

        var searchTemplate = elTemplate.cloneNode(true);

        var elPassessList = searchTemplate.querySelector('.main__item-passess');
        $_('.js-name',searchTemplate).textContent = pokemon.name;
        $_('.js-mian-img',searchTemplate).src = pokemon.img;
        $_('.js-pokemo-height',searchTemplate).textContent = pokemon.height;
        $_('.js-pokemon-weight',searchTemplate).textContent = pokemon.weight;



        elTypeFragment.appendChild(searchTemplate);

      });

      elMainList.appendChild(elTypeFragment);
  //  console.log(elTypeFragment)
    });




    // var linkFragment = document.createDocumentFragment();
    // pokemon.type.forEach(function(type){
    //   var typeItem = document.createElement('li');
    //   typeItem.classList.add('span-passess');

    //   typeItem.textContent = type;

    //   linkFragment.appendChild(typeItem);
    // });   elPassessList.appendChild(linkFragment);