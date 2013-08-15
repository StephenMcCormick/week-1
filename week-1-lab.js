var stringtext = "Text and stuff";
			var stringtrue = "true";
			var bool = true;
			var numbertype = 10;
			var myobj = { 'type' : 10, 'obj' : typeof(numbertype) };

			console.log(myobj);

			/* counting from 10 to 0  --  10 to 0 will be displayed */
			for ( var firstnumber = 10 ; firstnumber >= 0 ; firstnumber-- ) {
				console.log(firstnumber);
			}
			
			/* compairing boolean  --  the result will be "boolean is true" */
			if (bool == true){
				console.log("boolean is true");
			}
			else {
				console.log("boolean is false");
			}
			
			/* compairing boolean to string with ==  --  the result will be "boolean and string don't match - round 1" */
			if (bool == stringtrue){
				console.log("boolean and string match - round 1");
			}
			else{
				console.log("boolean and string don't match - round 1");
			}
			
			/* compairing boolean to string with ===  --  the result will be "boolean and string don't match - round 2" */
			if (bool === stringtrue){
				console.log("boolean and string match - round 2");
			}
			else{
				console.log("boolean and string don't match - round 2");
			}
			
			/* compairing string to text  with ==  --  the result will be "they match" */
			if (stringtext == "Text and stuff"){
				console.log("they match");
			}
			else{
				console.log("they don't match");
			}
			
			/* compairing string to text  with ===  --  the result will be "they still match" */
			if (stringtext === "Text and stuff"){
				console.log("they still match");
			}
			else{
				console.log("they don't match");
			}
			
			/* filling a string with a number value */
			stringtext = "10";
			
			/* compairing string to number variable with ==  --  the result will be "string and number match - round 1" */
			if (stringtext == numbertype){
				console.log("string and number match - round 1");
			}
			else {
				console.log("string and number don't match - round 1");
			}
			
			/* compairing string to number variable with ===  --  the result will be "string and number don't match - round 2" */			
			if (stringtext === numbertype){
				console.log("string and number match - round 2");
			}
			else {
				console.log("string and number don't match - round 2");
			}
			
			/* counting from 0 to 10  --  0 to 10 will be displayed */
			for ( var secondnumber = 0 ; secondnumber <= 10 ; secondnumber++) {
				console.log(secondnumber);
			}
