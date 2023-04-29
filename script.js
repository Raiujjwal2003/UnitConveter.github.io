

$(document).ready(function() {
	$("#Temprature-btn").click(function() {
	  $("#Temprature").show();
	  $("#length").hide();
	  $("#Volume").hide();
	  $("#Weight").hide();
	  $("#Time").hide();
	  $("#area").hide();
	});
  });
  
$(document).ready(function() {
	$("#Length-btn").click(function() {
	  $("#Temprature").hide();
	  $("#area").hide();
	  $("#Volume").hide();
	  $("#Weight").hide();
	  $("#Time").hide();
	  $("#length").show();
	});
  });
  
$(document).ready(function() {
	$("#Area-btn").click(function() {
	  $("#Temprature").hide();
	  $("#length").hide();
	  $("#Volume").hide();
	  $("#Weight").hide();
	  $("#Time").hide();
	  $("#area").show();
	});
  });
$(document).ready(function() {
	$("#Volume-btn").click(function() {
	  $("#Temprature").hide();
	  $("#length").hide();
	  $("#area").hide();
	  $("#Weight").hide();
	  $("#Time").hide();
	  $("#Volume").show();
	});
  });
  
$(document).ready(function() {
	$("#Weight-btn").click(function() {
	  $("#Temprature").hide();
	  $("#length").hide();
	  $("#area").hide();
	  $("#Volume").hide();
	  $("#Time").hide();
	  $("#Weight").show();

	});
  });
$(document).ready(function() {
	$("#Time-btn").click(function() {
	  $("#Temprature").hide();
	  $("#length").hide();
	  $("#area").hide();
	  $("#Volume").hide();
	  $("#Weight").hide();
	  $("#Time").show();

	});
  });
  


function convert() {
	let input = document.getElementById("input").value;
	let inputUnit = document.getElementById("inputUnit").value;
	let outputUnit = document.getElementById("outputUnit").value;
	let output = document.getElementById("output");
	
	if (inputUnit === "cm" && outputUnit === "m") {
		output.value = input / 100;
	}
	else if (inputUnit === "m" && outputUnit === "cm") {
		output.value = input * 100;
	}
	else if (inputUnit === "m" && outputUnit === "km") {
		output.value = input / 1000;
	}
	else if (inputUnit === "km" && outputUnit === "m") {
		output.value = input * 1000;
	}
	else if (inputUnit === "in" && outputUnit === "cm") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "ft" && outputUnit === "m") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "yd" && outputUnit === "m") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "mi" && outputUnit === "km") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "mi" && outputUnit === "yd") {
		output.value = input * 1760;
	}
	else if (inputUnit === "cm" && outputUnit === "km") {
		output.value = input /  100000;
	}
	else if (inputUnit === "cm" && outputUnit === "in") {
		output.value = input /  2.54;
	}
	else if (inputUnit === "cm" && outputUnit === "ft") {
		output.value = input / 30.48;
	}
	else if (inputUnit === "m" && outputUnit === "in") {
		output.value = input * 39.37;
	}
	else if (inputUnit === "m" && outputUnit === "ft") {
		output.value = input * 3.281;
	}
	else if (inputUnit === "m" && outputUnit === "yd") {
		output.value = input * 1.094;
	}
	else if (inputUnit === "m" && outputUnit === "mi") {
		output.value = input / 1609;
	}
	else if (inputUnit === "km" && outputUnit === "cm") {
		output.value = input *  100000	;
	}
	else if (inputUnit === "km" && outputUnit === "in") {
		output.value = input *  39370	;
	}
	else if (inputUnit === "km" && outputUnit === "ft") {
		output.value = input *   3281	;
	}
	else if (inputUnit === "km" && outputUnit === "yd") {
		output.value = input *   1093.61	;
	}
	else if (inputUnit === "km" && outputUnit === "mi") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "ft" && outputUnit === "cm") {
		output.value = input /   30.48;
	}
	else {
		output.value = input;
	}
}

function convert_temp() {
	let input = document.getElementById("temp_input").value;
	let inputUnit = document.getElementById("temp_inputUnit").value;
	let outputUnit = document.getElementById("temp_outputUnit").value;
	let output = document.getElementById("temp_output");
	
	if (inputUnit === "cel" && outputUnit === "kel") {
		let inp = Number(input);
		output.value = (inp + 273.15);
	}
	else if (inputUnit === "cel" && outputUnit === "f") {
		output.value = (input * 9/5)+32 ;
	}
	else if (inputUnit === "kel" && outputUnit === "cel") {
		output.value = input - 273.15;
	}
	else if (inputUnit === "kel" && outputUnit === "f") {
		output.value = (input-273)*9/5 + 32; 
	}
	else if (inputUnit === "f" && outputUnit === "cel") {
		output.value = (input-32) * 5/9; 
	}
	else if (inputUnit === "f" && outputUnit === "kel") {
		output.value = (input - 32)* 5/9 + 273.15;
	}
	
	else {
		output.value = input;
	}
}

function convert_area() {
	let input = document.getElementById("input_area").value;
	let inputUnit = document.getElementById("inputUnit_area").value;
	let outputUnit = document.getElementById("outputUnit_area").value;
	let output = document.getElementById("output_area");
	
	if (inputUnit === "sqm" && outputUnit === "sqkm") {
		output.value = input / 1000000;
	}
	else if (inputUnit === "sqm" && outputUnit === "sqcm") {
		output.value = input * 10000;
	}
	else if (inputUnit === "sqm" && outputUnit === "sqmm") {
		output.value = input *1000000;
	}
	else if (inputUnit === "sqm" && outputUnit === "sqmicm") {
		output.value = input * 1000000000000;
	}
	else if (inputUnit === "sqm" && outputUnit === "hec") {
		output.value = input / 10000;
	}
	else if (inputUnit === "sqm" && outputUnit === "sqmile") {
		output.value = input * 3.861E-7;
	}

	else if (inputUnit === "sqm" && outputUnit === "sqyd") {
		output.value = input * 1.1959900463;
	}
	else if (inputUnit === "sqm" && outputUnit === "sqft") {
		output.value = input * 10.763910417;
	}
	else if (inputUnit === "sqm" && outputUnit === "sqin") {
		output.value = input /  100000;
	}
	else if (inputUnit === "sqm" && outputUnit === "acre") {
		output.value = input *   0.0002471054;
	}
	else if (inputUnit === "sqkm" && outputUnit === "sqm") {
		output.value = input / 0.0002471054;
	}
	else if (inputUnit === "sqkm" && outputUnit === "sqcm") {
		output.value = input * 10000000000;
	}
	else if (inputUnit === "sqkm" && outputUnit === "sqmm") {
		output.value = input * 1000000000000;
	}
	else if (inputUnit === "sqkm" && outputUnit === "sqmicm") {
		output.value = input * 1000000000000000000;
	}
	else if (inputUnit === "sqkm" && outputUnit === "hec") {
		output.value = input * 100;
	}
	else if (inputUnit === "sqkm" && outputUnit === "sqmile") {
		output.value = input *  0.3861018768;
	}
	else if (inputUnit === "sqkm" && outputUnit === "sqyd") {
		output.value = input *  1195990.0463	;
	}
	else if (inputUnit === "sqkm" && outputUnit === "sqft") {
		output.value = input *  10763910.417	;
	}
	else if (inputUnit === "sqkm" && outputUnit === "sqin") {
		output.value = input *   1550003100	;
	}
	else if (inputUnit === "sqkm" && outputUnit === "acre") {
		output.value = input *   247.10538147	;
	}

	else if (inputUnit === "sqcm" && outputUnit === "sqm") {
		output.value = input * 0.0001;
	}
	else if (inputUnit === "sqcm" && outputUnit === "sqkm") {
		output.value = input * 1.E-10;
	}
	else if (inputUnit === "sqcm" && outputUnit === "sqmm") {
		output.value = input * 100   ;
	}
	else if (inputUnit === "sqcm" && outputUnit === "sqmicm") {
		output.value = input * 100000000  ;
	}
	else if (inputUnit === "sqcm" && outputUnit === "hec") {
		output.value = input * 1.E-8;
	}
	else if (inputUnit === "sqcm" && outputUnit === "sqmile") {
		output.value = input *  3.861018768E-11;
	}
	else if (inputUnit === "sqcm" && outputUnit === "sqyd") {
		output.value = input *  0.000119599	;
	}
	else if (inputUnit === "sqcm" && outputUnit === "sqft") {
		output.value = input *  0.001076391	;
	}
	else if (inputUnit === "sqcm" && outputUnit === "sqin") {
		output.value = input *    0.15500031	;
	}
	else if (inputUnit === "sqcm" && outputUnit === "acre") {
		output.value = input *   2.471053814E-8	;
	}
	
	else if (inputUnit === "sqmm" && outputUnit === "sqm") {
		output.value = input * 0.000001;
	}
	else if (inputUnit === "sqmm" && outputUnit === "sqkm") {
		output.value = input * 1.E-12 ;
	}
	else if (inputUnit === "sqmm" && outputUnit === "sqcm") {
		output.value = input * 0.01   ;
	}
	else if (inputUnit === "sqmm" && outputUnit === "sqmicm") {
		output.value = input * 1000000   ;
	}
	else if (inputUnit === "sqmm" && outputUnit === "hec") {
		output.value = input * 9.999999999E-11;
	}
	else if (inputUnit === "sqmm" && outputUnit === "sqmile") {
		output.value = input *  3.861018768E-13;
	}
	else if (inputUnit === "sqmm" && outputUnit === "sqyd") {
		output.value = input *  0.000001196;
	}
	else if (inputUnit === "sqmm" && outputUnit === "sqft") {
		output.value = input *  0.0000107639	;
	}
	else if (inputUnit === "sqmm" && outputUnit === "sqin") {
		output.value = input *    0.0015500031	;
	}
	else if (inputUnit === "sqmm" && outputUnit === "acre") {
		output.value = input *  2.471053814E-10;
	}


	else if (inputUnit === "sqmicm" && outputUnit === "sqm") {
		output.value = input * 1.E-12 ;
	}
	else if (inputUnit === "sqmicm" && outputUnit === "sqkm") {
		output.value = input * 1.E-18 ;
	}
	else if (inputUnit === "sqmicm" && outputUnit === "sqcm") {
		output.value = input * 9.999999999E-9   ;
	}
	else if (inputUnit === "sqmicm" && outputUnit === "sqmm") {
		output.value = input * 0.000001   ;
	}
	else if (inputUnit === "sqmicm" && outputUnit === "hec") {
		output.value = input * 1.E-16;
	}
	else if (inputUnit === "sqmicm" && outputUnit === "sqmile") {
		output.value = input *  3.861018768E-19;
	}
	else if (inputUnit === "sqmicm" && outputUnit === "sqyd") {
		output.value = input *  1.195990046E-12;
	}
	else if (inputUnit === "sqmicm" && outputUnit === "sqft") {
		output.value = input * 1.076391041E-11	;
	}
	else if (inputUnit === "sqmicm" && outputUnit === "sqin") {
		output.value = input *   1.5500031E-9	;
	}
	else if (inputUnit === "sqmicm" && outputUnit === "acre") {
		output.value = input *  2.471053814E-16 ;
	}

	else if (inputUnit === "hec" && outputUnit === "sqm") {
		output.value = input * 10000  ;
	}
	else if (inputUnit === "hec" && outputUnit === "sqkm") {
		output.value = input * 0.01 ;
	}
	else if (inputUnit === "hec" && outputUnit === "sqcm") {
		output.value = input *100000000   ;
	}
	else if (inputUnit === "hec" && outputUnit === "sqmm") {
		output.value = input *  10000000000    ;
	}
	else if (inputUnit === "hec" && outputUnit === "sqmicm") {
		output.value = input * 10000000000000000  ;
	}
	else if (inputUnit === "hec" && outputUnit === "sqmile") {
		output.value = input *  0.0038610188;
	}
	else if (inputUnit === "hec" && outputUnit === "sqyd") {
		output.value = input *  11959.900463;
	}
	else if (inputUnit === "hec" && outputUnit === "sqft") {
		output.value = input * 107639.10417	;
	}
	else if (inputUnit === "hec" && outputUnit === "sqin") {
		output.value = input *   15500031	;
	}
	else if (inputUnit === "hec" && outputUnit === "acre") {
		output.value = input *  2.4710538147 ;
	}
	
	else if (inputUnit === "sqmile" && outputUnit === "sqm") {
		output.value = input * 2589990   ;
	}
	else if (inputUnit === "sqmile" && outputUnit === "sqkm") {
		output.value = input *  2.58999 ;
	}
	else if (inputUnit === "sqmile" && outputUnit === "sqcm") {
		output.value = input *25899900000    ;
	}
	else if (inputUnit === "sqmile" && outputUnit === "sqmm") {
		output.value = input *  2589990000000 	    ;
	}
	else if (inputUnit === "sqmile" && outputUnit === "sqmicm") {
		output.value = input * 2589990000000000000   ;
	}
	else if (inputUnit === "sqmile" && outputUnit === "hec") {
		output.value = input *  258.999 ;
	}
	else if (inputUnit === "sqmile" && outputUnit === "sqyd") {
		output.value = input *  3097602.26;
	}
	else if (inputUnit === "sqmile" && outputUnit === "sqft") {
		output.value = input * 27878420.34	;
	}
	else if (inputUnit === "sqmile" && outputUnit === "sqin") {
		output.value = input *   4014492529 	;
	}
	else if (inputUnit === "sqmile" && outputUnit === "acre") {
		output.value = input *  640.00046695 ;
	}
	
	else if (inputUnit === "sqyd" && outputUnit === "sqm") {
		output.value = input * 0.83612736   ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqkm") {
		output.value = input *  8.3612736E-7 ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqcm") {
		output.value = input *8361.2736     ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmm") {
		output.value = input *  836127.36  	    ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmicm") {
		output.value = input * 836127360000    ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "hec") {
		output.value = input *  0.0000836127;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmile") {
		output.value = input *   3.228303429E-7;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqft") {
		output.value = input * 9 	;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqin") {
		output.value = input *   1296   	;
	}
	else if (inputUnit === "sqyd" && outputUnit === "acre") {
		output.value = input *  0.0002066116 ;
	}
	
	else if (inputUnit === "sqyd" && outputUnit === "sqm") {
		output.value = input * 0.83612736   ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqkm") {
		output.value = input *  8.3612736E-7 ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqcm") {
		output.value = input *8361.2736     ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmm") {
		output.value = input *  836127.36  	    ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmicm") {
		output.value = input * 836127360000    ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "hec") {
		output.value = input *  0.0000836127;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmile") {
		output.value = input *   3.228303429E-7;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqft") {
		output.value = input * 9 	;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqin") {
		output.value = input *   1296   	;
	}
	else if (inputUnit === "sqyd" && outputUnit === "acre") {
		output.value = input *  0.0002066116 ;
	}
	
	else if (inputUnit === "sqyd" && outputUnit === "sqm") {
		output.value = input * 0.83612736   ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqkm") {
		output.value = input *  8.3612736E-7 ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqcm") {
		output.value = input *8361.2736     ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmm") {
		output.value = input *  836127.36  	    ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmicm") {
		output.value = input * 836127360000    ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "hec") {
		output.value = input *  0.0000836127;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmile") {
		output.value = input *   3.228303429E-7;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqft") {
		output.value = input * 9 	;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqin") {
		output.value = input *   1296   	;
	}
	else if (inputUnit === "sqyd" && outputUnit === "acre") {
		output.value = input *  0.0002066116 ;
	}
	
	else if (inputUnit === "sqyd" && outputUnit === "sqm") {
		output.value = input * 0.83612736   ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqkm") {
		output.value = input *  8.3612736E-7 ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqcm") {
		output.value = input *8361.2736     ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmm") {
		output.value = input *  836127.36  	    ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmicm") {
		output.value = input * 836127360000    ;
	}
	else if (inputUnit === "sqyd" && outputUnit === "hec") {
		output.value = input *  0.0000836127;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqmile") {
		output.value = input *   3.228303429E-7;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqft") {
		output.value = input * 9 	;
	}
	else if (inputUnit === "sqyd" && outputUnit === "sqin") {
		output.value = input *   1296   	;
	}
	else if (inputUnit === "sqyd" && outputUnit === "acre") {
		output.value = input *  0.0002066116 ;
	}
	
	
	else {
		output.value = input;
	}
}

// for volume

function convert_volume() {
	let input = document.getElementById("input_volume").value;
	let inputUnit = document.getElementById("inputUnit_volume").value;
	let outputUnit = document.getElementById("outputUnit_volume").value;
	let output = document.getElementById("output_volume");
	

	 if (inputUnit === "cubm" && outputUnit === "cubkm") {
		output.value = input * 1e-9 ;
	}
	else if (inputUnit === "cubm" && outputUnit === "cubcm") {
		output.value = input * 1000000;
	}
	else if (inputUnit === "cubm" && outputUnit === "cubmm") {
		output.value = input * 1e+9;
	}
	else if (inputUnit === "cubm" && outputUnit === "lit") {
		output.value = input * 1000;
	}
	else if (inputUnit === "cubm" && outputUnit === "mlit") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "cubkm" && outputUnit === "cubm") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "cubkm" && outputUnit === "cubcm") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "cubkm" && outputUnit === "cubmm") {
		output.value = input * 1760;
	}
	else if (inputUnit === "cubkm" && outputUnit === "lit") {
		output.value = input /  100000;
	}
	else if (inputUnit === "cubkm" && outputUnit === "mlit") {
		output.value = input /  2.54;
	}
	else if (inputUnit === "cubcm" && outputUnit === "cubm") {
		output.value = input / 30.48;
	}
	else if (inputUnit === "cubcm" && outputUnit === "cubkm") {
		output.value = input * 39.37;
	}
	else if (inputUnit === "cubcm" && outputUnit === "cubmm") {
		output.value = input * 3.281;
	}
	else if (inputUnit === "cubcm" && outputUnit === "lit") {
		output.value = input * 1.094;
	}
	else if (inputUnit === "cubcm" && outputUnit === "mlit") {
		output.value = input / 1609;
	}
	else if (inputUnit === "cubmm" && outputUnit === "cubm") {
		output.value = input *  100000	;
	}
	else if (inputUnit === "cubmm" && outputUnit === "cubkm") {
		output.value = input *  39370	;
	}
	else if (inputUnit === "cubmm" && outputUnit === "cubcm") {
		output.value = input *   3281	;
	}
	else if (inputUnit === "cubmm" && outputUnit === "lit") {
		output.value = input *   1093.61	;
	}
	else if (inputUnit === "cubmm" && outputUnit === "mlit") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "lit" && outputUnit === "cubm") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "lit" && outputUnit === "cubkm") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "lit" && outputUnit === "cubcm") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "lit" && outputUnit === "cubmm") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "lit" && outputUnit === "mlit") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "mlit" && outputUnit === "cubm") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "mlit" && outputUnit === "cubkm") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "mlit" && outputUnit === "cubcm") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "mlit" && outputUnit === "cubmm") {
		output.value = input /   1.609	;
	}
	else if (inputUnit === "mlit" && outputUnit === "lit") {
		output.value = input /   1.609	;
	}

	else {
		output.value = input;
	}
}

// foe weidth 

function convert_weight() {
	let input = document.getElementById("input_weight").value;
	let inputUnit = document.getElementById("inputUnit_weight").value;
	let outputUnit = document.getElementById("outputUnit_weight").value;
	let output = document.getElementById("output_weight");
	

	 if (inputUnit === "kg" && outputUnit === "gm") {
		output.value = input * 0;
	}
	else if (inputUnit === "kg" && outputUnit === "miligm") {
		output.value = input * 1000;
	}
	else if (inputUnit === "kg" && outputUnit === "mt") {
		output.value = input / 1000;
	}
	else if (inputUnit === "kg" && outputUnit === "lt") {
		output.value = input * 1000;
	}
	else if (inputUnit === "kg" && outputUnit === "st") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "kg" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "kg" && outputUnit === "oun") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "kg" && outputUnit === "car") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "kg" && outputUnit === "amu") {
		output.value = input * 1760;
	}
   else	if (inputUnit === "gm" && outputUnit === "kg") {
		output.value = input / 100;
	}
	else if (inputUnit === "gm" && outputUnit === "miligm") {
		output.value = input * 100;
	}
	else if (inputUnit === "gm" && outputUnit === "mt") {
		output.value = input / 1000;
	}
	else if (inputUnit === "gm" && outputUnit === "lt") {
		output.value = input * 1000;
	}
	else if (inputUnit === "gm" && outputUnit === "st") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "gm" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "gm" && outputUnit === "oun") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "gm" && outputUnit === "car") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "gm" && outputUnit === "amu") {
		output.value = input * 1760;
	}
	 else if (inputUnit === "miligm" && outputUnit === "gm") {
		output.value = input / 100;
	}
	else if (inputUnit === "miligm" && outputUnit === "kg") {
		output.value = input * 100;
	}
	else if (inputUnit === "miligm" && outputUnit === "mt") {
		output.value = input / 1000;
	}
	else if (inputUnit === "miligm" && outputUnit === "lt") {
		output.value = input * 1000;
	}
	else if (inputUnit === "miligm" && outputUnit === "st") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "miligm" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "miligm" && outputUnit === "oun") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "miligm" && outputUnit === "car") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "miligm" && outputUnit === "amu") {
		output.value = input * 1760;
	}

	else if (inputUnit === "mt" && outputUnit === "gm") {
		output.value = input / 100;
	}
	else if (inputUnit === "mt" && outputUnit === "miligm") {
		output.value = input * 100;
	}
	else if (inputUnit === "mt" && outputUnit === "kg") {
		output.value = input / 1000;
	}
	else if (inputUnit === "mt" && outputUnit === "lt") {
		output.value = input * 1000;
	}
	else if (inputUnit === "mt" && outputUnit === "st") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "mt" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "mt" && outputUnit === "oun") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "mt" && outputUnit === "car") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "mt" && outputUnit === "amu") {
		output.value = input * 222;
	}

	else if (inputUnit === "lt" && outputUnit === "gm") {
		output.value = input / 100;
	}
	else if (inputUnit === "lt" && outputUnit === "miligm") {
		output.value = input * 100;
	}
	else if (inputUnit === "lt" && outputUnit === "mt") {
		output.value = input / 1000;
	}
	else if (inputUnit === "lt" && outputUnit === "kg") {
		output.value = input * 1000;
	}
	else if (inputUnit === "lt" && outputUnit === "st") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "lt" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "lt" && outputUnit === "oun") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "lt" && outputUnit === "car") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "lt" && outputUnit === "amu") {
		output.value = input * 1760;
	}

	else if (inputUnit === "st" && outputUnit === "gm") {
		output.value = input / 100;
	}
	else if (inputUnit === "st" && outputUnit === "miligm") {
		output.value = input * 100;
	}
	else if (inputUnit === "st" && outputUnit === "mt") {
		output.value = input / 1000;
	}
	else if (inputUnit === "st" && outputUnit === "lt") {
		output.value = input * 1000;
	}
	else if (inputUnit === "st" && outputUnit === "kg") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "st" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "st" && outputUnit === "oun") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "st" && outputUnit === "car") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "st" && outputUnit === "amu") {
		output.value = input * 1760;
	}

	
	else if (inputUnit === "p" && outputUnit === "gm") {
		output.value = input / 100;
	}
	else if (inputUnit === "p" && outputUnit === "miligm") {
		output.value = input * 100;
	}
	else if (inputUnit === "p" && outputUnit === "mt") {
		output.value = input / 1000;
	}
	else if (inputUnit === "p" && outputUnit === "lt") {
		output.value = input * 1000;
	}
	else if (inputUnit === "p" && outputUnit === "st") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "p" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "p" && outputUnit === "oun") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "p" && outputUnit === "car") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "p" && outputUnit === "amu") {
		output.value = input * 1760;
	}

	else if (inputUnit === "oun" && outputUnit === "gm") {
		output.value = input / 100;
	}
	else if (inputUnit === "oun" && outputUnit === "miligm") {
		output.value = input * 100;
	}
	else if (inputUnit === "oun" && outputUnit === "mt") {
		output.value = input / 1000;
	}
	else if (inputUnit === "oun" && outputUnit === "lt") {
		output.value = input * 1000;
	}
	else if (inputUnit === "oun" && outputUnit === "st") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "oun" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "oun" && outputUnit === "kg") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "oun" && outputUnit === "car") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "oun" && outputUnit === "amu") {
		output.value = input * 1760;
	}

	
	else if (inputUnit === "car" && outputUnit === "gm") {
		output.value = input / 100;
	}
	else if (inputUnit === "car" && outputUnit === "miligm") {
		output.value = input * 100;
	}
	else if (inputUnit === "car" && outputUnit === "mt") {
		output.value = input / 1000;
	}
	else if (inputUnit === "car" && outputUnit === "lt") {
		output.value = input * 1000;
	}
	else if (inputUnit === "car" && outputUnit === "st") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "car" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "car" && outputUnit === "oun") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "car" && outputUnit === "kg") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "car" && outputUnit === "amu") {
		output.value = input * 1760;
	}

	
	else if (inputUnit === "amu" && outputUnit === "gm") {
		output.value = input / 100;
	}
	else if (inputUnit === "amu" && outputUnit === "miligm") {
		output.value = input * 100;
	}
	else if (inputUnit === "amu" && outputUnit === "mt") {
		output.value = input / 1000;
	}
	else if (inputUnit === "amu" && outputUnit === "lt") {
		output.value = input * 1000;
	}
	else if (inputUnit === "amu" && outputUnit === "st") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "amu" && outputUnit === "p") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "amu" && outputUnit === "oun") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "amu" && outputUnit === "car") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "amu" && outputUnit === "kg") {
		output.value = input * 1760;
	}

	else {
		output.value = input*10;
	}
}



// function convert_weight() {
// 	let input = document.getElementById("input_width").value;
// 	let inputUnit = document.getElementById("inputUnit_width").value;
// 	let outputUnit = document.getElementById("outputUnit_width").value;
// 	let output = document.getElementById("output_width");
	
// 	if (inputUnit === "kg" && outputUnit === "gm") {
// 		output.value = input * 10;
// 	}




   

// 	else {
// 		output.value = input;
// 	}
// }

function convert_time() {
	let input = document.getElementById("input_time").value;
	let inputUnit = document.getElementById("inputUnit_time").value;
	let outputUnit = document.getElementById("outputUnit_time").value;
	let output = document.getElementById("output_time");
	
	if (inputUnit === "sec" && outputUnit === "milsec") {
		output.value = input / 100;
	}
	else if (inputUnit === "sec" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "sec" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "sec" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "sec" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "sec" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "sec" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "sec" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "sec" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "sec" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "milsec" && outputUnit === "sec") {
		output.value = input / 100;
	}
	else if (inputUnit === "milsec" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "milsec" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "milsec" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "milsec" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "milsec" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "milsec" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "milsec" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "milsec" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "milsec" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "micsec" && outputUnit === "milsec") {
		output.value = input / 100;
	}
	else if (inputUnit === "micsec" && outputUnit === "sec") {
		output.value = input * 100;
	}
	else if (inputUnit === "micsec" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "micsec" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "micsec" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "micsec" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "micsec" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "micsec" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "micsec" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "micsec" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "nansec" && outputUnit === "milsec") {
		output.value = input / 100;
	}
	else if (inputUnit === "nansec" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "nansec" && outputUnit === "sec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "nansec" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "nansec" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "nansec" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "nansec" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "nansec" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "nansec" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "nansec" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "picsec" && outputUnit === "milsec") {
		output.value = input / 100;
	}
	else if (inputUnit === "picsec" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "picsec" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "picsec" && outputUnit === "sec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "picsec" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "picsec" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "picsec" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "picsec" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "picsec" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "picsec" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "min" && outputUnit === "milsec") {
		output.value = input / 100;
	}
	else if (inputUnit === "min" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "min" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "min" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "min" && outputUnit === "sec") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "min" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "min" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "min" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "min" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "min" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "hr" && outputUnit === "milsec") {
		output.value = input / 100;
	}
	else if (inputUnit === "hr" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "hr" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "hr" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "hr" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "hr" && outputUnit === "sec") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "hr" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "hr" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "hr" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "hr" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "dy" && outputUnit === "milsec") {
		output.value = input / 100;
	}
	else if (inputUnit === "dy" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "dy" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "dy" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "dy" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "dy" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "dy" && outputUnit === "sec") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "dy" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "dy" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "dy" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "wk" && outputUnit === "milsec") {
		output.value = input / 100;
	}
	else if (inputUnit === "wk" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "wk" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "wk" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "wk" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "wk" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "wk" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "wk" && outputUnit === "sec") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "wk" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "wk" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "mt" && outputUnit === "milsec") {
		output.value = input / 100;
	}
	else if (inputUnit === "mt" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "mt" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "mt" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "mt" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "mt" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "mt" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "mt" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "mt" && outputUnit === "sec") {
		output.value = input * 1760;
	}
	else if (inputUnit === "mt" && outputUnit === "yr") {
		output.value = input /  100000;
	}
	
	else if (inputUnit === "yr" && outputUnit === "milyr") {
		output.value = input / 100;
	}
	else if (inputUnit === "yr" && outputUnit === "micsec") {
		output.value = input * 100;
	}
	else if (inputUnit === "yr" && outputUnit === "nansec") {
		output.value = input / 1000;
	}
	else if (inputUnit === "yr" && outputUnit === "picsec") {
		output.value = input * 1000;
	}
	else if (inputUnit === "yr" && outputUnit === "min") {
		output.value = input * 2.54;
	}
	else if (inputUnit === "yr" && outputUnit === "hr") {
		output.value = input * 0.3048;
	}
	else if (inputUnit === "yr" && outputUnit === "dy") {
		output.value = input * 0.9144;
	}
	else if (inputUnit === "yr" && outputUnit === "wk") {
		output.value = input * 1.60934;
	}
	else if (inputUnit === "yr" && outputUnit === "mt") {
		output.value = input * 1760;
	}
	else if (inputUnit === "yr" && outputUnit === "sec") {
		output.value = input /  100000;
	}

	
	else {
		output.value = input;
	}
}



// document.querySelector("#Temprature-btn").addEventListener("click", function(){
// 		document.querySelector("#Temprature").style.display="";
// 		document.querySelector("#length").style.display="none";

// })

