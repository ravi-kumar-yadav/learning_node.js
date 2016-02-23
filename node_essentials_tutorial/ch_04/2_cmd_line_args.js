function fetch_option(opt){
	var index = process.argv.indexOf(opt);

	return (index>-1) ? process.argv[index+1] : null;
}

var name = fetch_option("--name");
var company = fetch_option("--company");

if (!name || !company){
	console.log("Name or Company is empty");
} else {
	console.log(`Hi ${name}!!! You are working in a great company ${company}`);
}

