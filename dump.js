// PhantomJS code

var page = require('webpage').create();
page.onConsoleMessage = function (msg, lineNum, sourceId) {
     console.log(msg);
};
var url = 'https://vk.com/upechen?z=album-91753830_216660234';
page.open(url, function (status) {
  page.evaluate(function(){
    var divs = document.getElementsByClassName('photos_row');
    for(i = 0; i < divs.length; i++){
      var text = divs[i].children[0].attributes[1].value;
      var start = text.indexOf("{");
      text = text.substring(start+1);
      start = text.indexOf("{")
      var end = text.indexOf("}");
      var obj = JSON.parse(text.substring(start, end+1));
      var base = obj.base;
      var w = obj.w_ + '';
      var comma = w.indexOf(","); 
      console.log("curl -O " + obj.base + w.substring(0, comma) + ".jpg");
    }
  });
  phantom.exit();
});
