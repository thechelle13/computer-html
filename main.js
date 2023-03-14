
// You have been given some starter code. It's an object representing an Apple Macbook Pro computer. You need to define a function that takes that object as input (needs a parameter), and outputs (returns) the following HTML representation of that computer.

/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */

// const computers = {
// 	id: 1,
// 	manufacturer: "Apple",
// 	make: "Macbook",
// 	model: "Pro",
// 	specs: {
// 		memory: 32,
// 		hardDrive: "500 GB",
// 		processor: 2.4
// 	}
// }
const computers = [
	{
		id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
	}
]

const computerHTML = () => {
	let computerHTMLstring = ""

	for (const computer of computers){
		computerHTMLstring += `\t<section id="computer--1">\n`;
		computerHTMLstring += `\t<h1>${computer.manufacturer} ${computer.make}</h1>\n`;
		computerHTMLstring += `\t<div>${`Model:`}${computer.model}</div>\n`
		computerHTMLstring += `\t<div>${`Memory:`}${computer.specs.memory}</div>\n`
		computerHTMLstring += `\t<div>${`Hard Drive Space:`}${computer.specs.hardDrive}</div>\n`
		computerHTMLstring += `\t<div>${`Processor speed:`}${computer.specs.processor}</div>\n`
		computerHTMLstring += `</section>`


	} return computerHTMLstring;
}
         

console.log(computerHTML())
