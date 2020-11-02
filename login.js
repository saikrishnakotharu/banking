function othername(){
	var input_accnum = document.getElementById("Accountnumber").value;
	var input_pass = document.getElementById("password").value;
	if(input_accnum == "1234" && input_pass == "5678"){
		document.location.href = "index1.html";
	}
	else alert("invalid account number or password")