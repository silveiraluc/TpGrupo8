var monthElement = document.getElementById("currentMonth");
var months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
var currentMonth = new Date().getMonth();
monthElement.textContent = months[currentMonth];