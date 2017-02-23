window.onload = function(){
	Main();
};
function Main()
{
	obj = {"id": 100, "name": "木村"};
	root = d3.select("body").insert("div",":first-child");

	root.append("div")
	.selectAll("p")
		.data(function(d){return d3.keys(obj)})
		.enter()
		.append("p")
		.text(function(d){return d;});

	root.append("div")
	.selectAll("p")
		.data(function(d){return d3.values(obj)})
		.enter()
		.append("p")
		.text(function(d){return d;});
}
