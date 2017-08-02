(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var cargarPagina = function () {
    datosClima();
};
var datosClima = function () {
    var url = "https://api.darksky.net/forecast/09f373036464e6e2fe859e8b8464c7bd/19.4142776,-99.1622213/";
    $.getJSON(url ,function (data) {
    
    
});
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var response = JSON.parse(this.response);
			var pokemons = response.results;
			// var squads = JSON.parse(this.response);	
			 crearPokemons(clima);
		}
		
	}
};

xhr.open("GET", url);

xhr.send();
}

$(document).ready(cargarPagina);
},{}]},{},[1])