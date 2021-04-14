myFunction()
function myFunction() {
 
  var r = confirm("Do You Like Coding");
  if (r == true) {
    userLang()
  } else {
  alert ("thank You For Viste Web Site")
  }
 
}
// userLang()
function userLang(){
var user=prompt("Please Enter fav Language code")

if(user=="python" || user=="Python"||user=="PYTHON"){
  let py='<img src="https://i.stack.imgur.com/qw1XS.png" alt="python">'
  document.write(py)
}else if (user=="js" || user=="javScript"||user=="javscript"){
  let js='<img src="https://www.dataformsjs.com/examples/img/Unofficial_JavaScript_logo_2.svg" alt="python">'
  document.write(js)
}else if (user=="html" || user=="HTML"||user=="Html"){
  let html='<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/195px-HTML5_logo_and_wordmark.svg.png" alt="python">'
  document.write(html)
}
}
 
 