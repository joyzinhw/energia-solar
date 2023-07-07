function calcular() {
	var sentencaSelect = document.getElementById("sentenca");
	var sentencaValue = sentencaSelect.value;
	var valorInput = document.getElementById("valor").value;
	var valorInteiro = parseInt(valorInput);

	var resultadoTable = document.getElementById("resultado");
	var newRow = resultadoTable.insertRow(-1);

	var sentencaCell = newRow.insertCell(0);
	var calculo1Cell = newRow.insertCell(1);
	var calculo2Cell = newRow.insertCell(2);

	if (sentencaValue === "1") {
		sentencaCell.innerHTML = "575w";
		calculo1Cell.innerHTML = (90 * valorInteiro);
		calculo2Cell.innerHTML = (575 * valorInteiro / 1000);
	
	} else if (sentencaValue === "2") {
		sentencaCell.innerHTML = "550w";
		calculo1Cell.innerHTML = (85 * valorInteiro);
		calculo2Cell.innerHTML = (550 * valorInteiro / 1000);
	
	} else if (sentencaValue === "3") {
		sentencaCell.innerHTML = "450w";
		calculo1Cell.innerHTML = (70 * valorInteiro);
		calculo2Cell.innerHTML = (450 * valorInteiro / 1000);
	}
}

var regioes = [
	{ nome: "Sul", estados: ["4,20  "] },
	{ nome: "Norte", estados: ["4,55"] },
	{ nome: "Centro-Oeste", estados: ["5,25"] },
	{ nome: "Sudeste", estados: ["4,55"] },
	{ nome: "Nordeste", estados: ["5,60"] }
];

var regioesTable = document.getElementById("regioesTable");

for (var i = 0; i < regioes.length; i++) {
	var regiao = regioes[i];

	var newRow = regioesTable.insertRow(-1);

	var regiaoCell = newRow.insertCell(0);
	regiaoCell.innerHTML = regiao.nome;

	var estadosCell = newRow.insertCell(1);
	estadosCell.innerHTML = regiao.estados.join(", ");
}