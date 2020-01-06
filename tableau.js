
/*var colors = new Array;

for (var i = 0 ; i<12; i++){
	var red = Math.round(Math.random()*255);
	var green = Math.round(Math.random()*255);
	var blue = Math.round(Math.random()*255);
	colors[i] = 'rgb('+red+','+green+','+blue+')';
}
	

	document.write ('<table border = "1">');
	document.write("<tr>");
	for(i=0 ; i<12 ; i++)
	{
		document.write("<td>"+(i+1)+ "</td>");
		document.write("<td style='background-color:"+colors[i]+"'>");
		document.write (months[i]);
		document.write("</td>");
		if ((i+1) % 3==0){
		document.write("</tr><tr>");

		}

	}



document.write("</tr>")
document.write("</table>")

*/



var shoppingList = new Array;

function addItem(item){
	shoppingList.push(item);
}
function displayList(){
	document.write("<h2>Liste de course contient : "+shoppingList.length+"</h2");
	document.write("<ol>");
	for(let i=0; i < shoppingList.length; i++){
		document.write("<li>"+shoppingList[i]+"</li>");
	}
	document.write("</ol>");
	console.log(shoppingList);

}

function removeItem(item){
		var index=shoppingList.indexOf(item);
		if(index == -1){
			window.alert("not found");
			return;
		}
		shoppingList.splice(index,1);
	}
addItem("Pain") ;
addItem("Eau") ;
addItem("Lait") ;
addItem("Tomates") ;
displayList() ;
removeItem('Bannane');
displayList() ;
