var intervals = [];
function randArrow() {
 // if (interval == null){
      var i = window.setInterval(randony, 100);  //const interval = window.setInterval(randArrow, 100)
      intervals.push(i);
  //} else{
  //  clearInterval(interval);
  //  interval = null;
 // }
}
var clearo = () => {document.getElementById("prand").innerHTML = ""};
function randArrowStop(){
  intervals.forEach(clearInterval);
}

randony = () => {
    document.getElementById("prand").innerHTML +=  Math.round(Math.random() * (Math.random() * 134))+ "\n";
 }


function disap() {
    var display = document.getElementById("disa").style.display;
    if (display == 'none'){
        document.getElementById("disa").style.display = 'block';
    } else {
        document.getElementById("disa").style.display = 'none';
    }
}

function changeText() {
    var d = new Date();
    document.getElementById("change").innerHTML = "que tocas?" + ' anio = ' + d.getFullYear();
}

function cleanMessage() {
  document.getElementById("message").innerHTML = "";
}

function handleError(){
  var x, message;
  message = document.getElementById("message");
  message.innerHTML = "";
  x = document.getElementById("input").value;
  try {
    if (x == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "too big";
    if(x < 5) throw "too small";
    else throw "";
  }

  catch(err){
    if(err == ""){
      message.innerHTML = "good one, capo."
    } else {
      message.innerHTML = "Error: " + err + ".";
    }
  }

  finally {
    x.value = "";
  }
}

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

