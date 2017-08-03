var cargarPagina = function () {
    datosClima();
};
var datosClima = function () {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=Mexico&APPID=7d4db2a2badda552e7a541b1f368e702";
    $.getJSON(url ,function (data) {
    console.log(data);
    
});
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var response = JSON.parse(this.response);
            console.log(response);    
			// var squads = JSON.parse(this.response);	
			
		}
		
	}
};

xhr.open("GET", url);

xhr.send();
}

$(document).ready(cargarPagina);