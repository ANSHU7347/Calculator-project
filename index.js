function calculate() {
	var hours = document.getElementById("hours").value;
	var rate = document.getElementById("rate").value;
	var total = hours * rate;
	document.getElementById("result").value = "$" + total.toFixed(2);
}
