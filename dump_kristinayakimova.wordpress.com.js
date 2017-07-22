// PhantomJS code

var system = require('system');
var args = system.args;

var page = require('webpage').create();
page.onConsoleMessage = function (msg, lineNum, sourceId) {
     console.log(msg);
};

page.open(args[1], function (status) {
	page.evaluate(function(){
		var imgs = document.getElementsByTagName('img');
		for(i = 0; i < imgs.length; i++){
			if(imgs[i].dataset.origFile){
				console.log("curl " + imgs[i].dataset.origFile + " -o " + i + ".jpg");
			}
    	}
  	});
	phantom.exit();
});
