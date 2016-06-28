var tl = new TimelineLite(); 
tl.staggerFrom(".topics", 3, {
  css:{transform:"scale(0)",top:"60%",left:"50%"},ease:Elastic.easeOut
}, 0.3);


var js = document.getElementById("js");
var sass = document.getElementById("sass");
var php = document.getElementById("php");
var css3 = document.getElementById("css3");
var hmtl5 = document.getElementById("html5");
var topics = document.getElementsByClassName("topics");
// var meta = document.getElementsByName("theme-color");


js.addEventListener("mouseover",jsretina,false);
js.addEventListener("touchstart",jsretina,false);
html5.addEventListener("mouseover",html5retina,false);
html5.addEventListener("touchstart",html5retina,false);
sass.addEventListener("mouseover",sassretina,false);
sass.addEventListener("touchstart",sassretina,false);
php.addEventListener("mouseover",phpretina,false);
php.addEventListener("touchstart",phpretina,false);
css3.addEventListener("mouseover",css3retina,false);
css3.addEventListener("touchstart",css3retina,false);

js.addEventListener("click",function() {
	document.querySelector('meta[name="theme-color"]').setAttribute("content", "#F7DF1E");

});
css3.addEventListener("click",function() {
	document.querySelector('meta[name="theme-color"]').setAttribute("content", "#33A9DC");

});
sass.addEventListener("click",function() {
	document.querySelector('meta[name="theme-color"]').setAttribute("content", "#CD6799");

});
php.addEventListener("click",function() {
	document.querySelector('meta[name="theme-color"]').setAttribute("content", "#6082BB");

});
html5.addEventListener("click",function() {
	document.querySelector('meta[name="theme-color"]').setAttribute("content", "#F16529");

});

function jsretina(event) {
	TweenMax.to("#retina", 0.2, {left:"51%",top:"59.5%"});
}

function html5retina(event) {
	TweenMax.to("#retina", 0.2, {left:"49%",top:"59.5%"});
}

function css3retina(event) {
	TweenMax.to("#retina", 0.2, {left:"49%",top:"60.5%"});
}

function phpretina(event) {
	TweenMax.to("#retina", 0.2, {left:"51%",top:"60.5%"});
}

function sassretina(event) {
	TweenMax.to("#retina", 0.2, {left:"50%",top:"59%"});
}


for(var i=0; i< topics.length; i++){
	topics[i].addEventListener("mouseout",retinaout);
	// topics[i].addEventListener("touchend",retinaout);
}
function retinaout(event) {
		TweenMax.to("#retina", 0.2, {left:"50%",top:"60%"});	
}

// document.addEventListener("load",function() {

// 	document.getElementById("logocontainer").style.height = window.innerHeight;
// 	document.getElementById("logocontainer").style.width = window.innerWidth;
// });

css3.addEventListener("click",function() {
	TweenMax.to("#html5,#php,#retina,#sanky,#js,#sass", 0.5, {left:"75px",top:"75px",width:"150px"});
	document.getElementById("logo").innerHTML = '<img class="topics" id="csshead" src="img/css3.svg">';
	TweenMax.to("#csshead", 0.5, {left:"75px",top:"75px",width:"150px",onComplete:function() {
		document.getElementById("nav").innerHTML = '<img id="cssbg" src="img/cssbg.svg">';
		TweenMax.to("#cssbg", 3, {scaleX:"125"});

	}});
});
html5.addEventListener("click",function() {
	TweenMax.to("#css3,#php,#retina,#sanky,#js,#sass", 0.5, {left:"75px",top:"75px",width:"150px"});
	document.getElementById("logo").innerHTML = '<img class="topics" id="html5head" src="img/html5.svg">';
	TweenMax.to("#html5head", 0.5, {left:"75px",top:"75px",width:"150px",onComplete:function() {
		document.getElementById("nav").innerHTML = '<img id="htmlbg" src="img/htmlbg.svg">';
		TweenMax.to("#htmlbg", 3, {scaleX:"125"});

	}});
});
sass.addEventListener("click",function() {
	TweenMax.to("#css3,#php,#retina,#sanky,#js,#html5", 0.5, {left:"75px",top:"75px",width:"150px"});
	document.getElementById("logo").innerHTML = '<img class="topics" id="sasshead" src="img/sass.svg">';
	TweenMax.to("#sasshead", 0.5, {left:"75px",top:"75px",width:"150px",onComplete:function() {
		document.getElementById("nav").innerHTML = '<img id="sassbg" src="img/sassbg.svg">';
		TweenMax.to("#sassbg", 3, {scaleX:"125"});

	}});
});
js.addEventListener("click",function() {
	TweenMax.to("#css3,#php,#retina,#sanky,#html5,#sass", 0.5, {left:"75px",top:"75px",width:"150px"});
	document.getElementById("logo").innerHTML = '<img class="topics" id="jshead" src="img/js.svg">';
	TweenMax.to("#jshead", 0.5, {left:"75px",top:"75px",width:"150px",onComplete:function() {
		document.getElementById("nav").innerHTML = '<img id="jsbg" src="img/jsbg.svg">';
		TweenMax.to("#jsbg", 3, {scaleX:"125"});

	}});
});
php.addEventListener("click",function() {
	TweenMax.to("#css3,#html5,#retina,#sanky,#js,#sass", 0.5, {left:"75px",top:"75px",width:"150px"});
	document.getElementById("logo").innerHTML = '<img class="topics" id="phphead" src="img/php.svg">';
	TweenMax.to("#phphead", 0.5, {left:"75px",top:"75px",width:"150px",onComplete:function() {
		document.getElementById("nav").innerHTML = '<img id="phpbg" src="img/phpbg.svg">';
		TweenMax.to("#phpbg", 3, {scaleX:"125"});

	}});
});