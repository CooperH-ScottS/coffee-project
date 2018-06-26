"use strict";

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function renderCoffee(coffee) {
    var html = '<ul class="coffee">';
    html += '<li class="list-font col-sm-6 col-md-6 col-lg-6"><h2 class="list-font">' + coffee.name + ' <small>';
    html += coffee.roast + '</small></h2></li></ul>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (e === 'all') {
        coffees.forEach(function(coffee) {
            filteredCoffees.push(coffee);
        })
    } else coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// create a new function to actually search through the coffees
function searchCoffees(value) {
    var filteredCoffees = [];
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            filteredCoffees.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    var coffee = {
        id: '',
        name: '',
        roast: ''
    };
    var temp = document.getElementById('add-coffee-name').value;
    coffee.name = formatNewCoffee(temp);
    coffee.id = coffees.length + 1;
    console.log('got id');
    coffee.roast = document.getElementById('add-coffee-roast-select').value;
    coffees.push(coffee);
    arrangeCoffees();
    tbody.innerHTML = renderCoffees(coffees);
}

function arrangeCoffees() {
    coffees.sort(function(a, b){return a.id - b.id});
    coffees.reverse();
}

function formatNewCoffee(input) {
    return input.replace(/\b\w/g, function(letter) {
        return letter.toUpperCase()
    })}

var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');

coffees.reverse();
tbody.innerHTML = renderCoffees(coffees);