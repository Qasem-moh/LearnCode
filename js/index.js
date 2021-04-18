var user = prompt("Do You Like Coding");

while (user !== "yes") {
  alert("Good Luck");
  break;
}

whatLang();
function whatLang() {
  var ask1 = prompt("Do You have any knowledge in coding?");
  return ask1;
}

continueUser("java");
function continueUser(lang) {
  var userjava = prompt("Do you like coding" + " " + lang);
  while (userjava === "yes") {
    alert("welcome in coding" + " " + lang);
    var pimg =
      '<img src="https://e3arabi.com/wp-content/uploads/2021/03/Java-Debugging-Tips-1280x720-1.jpg" alt="java"';
    
    document.write(pimg);
    break;
  }
}
//**** */
continueUser("python");
function continueUser(lang1) {
  var userpython = prompt("Do you like coding" + " " + lang1);
  while (userpython === "yes") {
    alert("welcome in coding" + " " + lang1);
    var pimg1 =
      '<img src="https://quarch.com/wp-content/uploads/2019/07/python-logo-with-larger-white-border_0.jpg" alt="java"';

    document.write(pimg1);
    break;
  }
}
