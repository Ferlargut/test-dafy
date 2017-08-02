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