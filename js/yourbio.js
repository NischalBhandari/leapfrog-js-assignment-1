var me={
	name:"Nischal Bhandari",
	DateofBirth:'1995/07/03',
	education:[{
		name:"Nepal Don Bosco School",
		date:2010,
	},
	{
		name:"Trinity international College",
		date:2012,
	},
	{
		name:"Kathmandu Engineering College",
		date: 2016,
	}
	]
}
console.log(me.education);
setTimeout(funct,1000);
function funct(){
	var x = me.education;
	document.getElementById("name").textContent= me.name;
	document.getElementById('DOB').textContent=me.DateofBirth;
	console.log(x);
	x.forEach(myFunction);
	starcreator();
	pyramidcreator();
}
function myFunction(item){
	console.log(item.name);
	document.getElementById("Education").textContent += item.name +" "+ "untill" +" " + item.date + "\n";

}

function starcreator(){
	for(var i =0 ; i<5; i++){
		for (var j=5 ; j>i;j--){
		document.getElementById("pyramid").innerText +='*';
		
	}
	document.getElementById("pyramid").innerText +="\n";
	}
}
function pyramidcreator(){
	for (var i=5;i>0;i--){
		for (var j=0 ; j<i;j++){
			document.getElementById("tester").innerText +='*';
		}
		document.getElementById("tester").innerText +='\n';
	}
}