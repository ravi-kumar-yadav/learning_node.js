process.stdout.write("Hello");
process.stdout.write("World \n\n\n This is good.");

var ques = [	"what's your name",
    		"what's your hobby",
		"what's your prog language" ];

var ans = [];

function ask(index){
	process.stdout.write(`\n\n${ques[index]}`);
	process.stdout.write("  >  ");
}


// adding an event listner
process.stdin.on('data', function(data) {
	// process.stdout.write("\n" + data.toString().trim() + '\n');
  ans.push(data.toString().trim());

  if (ans.length < ques.length){
    ask(ans.length);
  } else {
    process.exit(0);
  }
});


// add an event listner  that fires just before process exits
process.on('exit', function(){
  process.stdout.write("\n\n");
  process.stdout.write(`Hi! ${ans[0]}, you like ${ans[1]}, finish ${ans[2]} later`);
  process.stdout.write("\n\n");
});

ask(0);
