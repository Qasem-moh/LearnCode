var myArray = [
  '<img src="https://pbs.twimg.com/profile_images/1369211259929980932/7D52dWCy.jpg" width=250px height=250px alt= "" wi/>',
  '<img src="https://media.threatpost.com/wp-content/uploads/sites/103/2020/02/18155303/barcelona.jpg" width=250px height=250px alt= ""/>',
  '<img src="https://www.goalinn.com/f/13766/137663848/safta-fc-barcelona-original.jpg" width=250px height=250px alt= ""/>',
];



var myArray2 = [
  '<img src="https://i.ibb.co/zGXPSXs/b1.png" width=250px height=250px alt= "" wi/>',
  '<img src="https://i.ibb.co/YLvQKNF/b2.jpg" width=250px height=250px alt= ""/>',
  '<img src="https://i.ibb.co/HN8yYWq/b3.png" width=250px height=250px alt= ""/>',
];

// var randomItem1 = myArray2[Math.floor(Math.random() * myArray2.length)];



var userpopu = prompt("Enter favorite team");

while (userpopu !== "real" && userpopu !== "barch") {
  userpopu = prompt("Enter favorite team");
}

var imgNumnber =prompt( "How many want image?");
for (var i = 1; i <= imgNumnber; i++) {
var randomItem1 = myArray2[Math.floor(Math.random() * myArray2.length)];
var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

  if (userpopu== "real"){
    var image = randomItem1;
  
    document.write(image);
  }else if(userpopu== "barch"){
        var image1 = randomItem;
    document.write(image1);
}}


