
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var gotoHome = function () {

window.open("index.html","_self");

  }


var gotoAbout = function () {

window.open("about.html","_self");

  }

  
  var gotoServices = function () {

window.open("services.html","_self");

  }



var loadArticles = function () { 

var xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = function() {



    if (xhttp.readyState == 4 && xhttp.status == 200) {


        BlogArticle1(xhttp);

    }

};

xhttp.open("GET", "../blog/Feed/article1.xml", true);

xhttp.send();


}

function BlogArticle1(xml) {

var x, xmlDoc, artcileTitle , articleDiv,itemList,listItemLink;

xmlDoc = xml.responseXML;

x = xmlDoc.getElementsByTagName('channel');





itemList = xmlDoc.getElementsByTagName('item');

var numofRows = itemList.length / 3 ;

for (x = 0; x < numofRows ; x++) {

articleDiv = document.createElement("div");

articleDiv.className = "row";

document.getElementById("blog-section").appendChild(articleDiv);


for (y = 0; y < 3 ; y++) {


var rowColumn = document.createElement("div");

rowColumn.className = "col-sm-4";

articleDiv.appendChild(rowColumn);





var articleItem = document.createElement("div");

articleItem.setAttribute("style","width:100%");

articleItem.className = "w3-card-4";



var text = itemList[y].childNodes[1].innerHTML+' - '+itemList[y].childNodes[9].innerHTML.slice(0,-15);


var articleItemTitle = document.createElement("h4");

articleItemTitle.appendChild(document.createTextNode(text));

articleItemTitle.setAttribute("style","padding:20px;");

articleItem.appendChild(articleItemTitle);




var articleImage = document.createElement("img");

articleImage.setAttribute("src","../images/beach.png");

articleImage.setAttribute("style","width:100%");


articleItem.appendChild(articleImage);


articleItem.appendChild(document.createElement("br"));


var articleItemContainer = document.createElement("div");

articleItemContainer.className = "w3-container";


articleItemContainer.setAttribute("style","height:220px;");







articleItemContainer.appendChild(document.createElement("br"));

var articleItemDescription = document.createElement("p");

articleItemDescription.appendChild(document.createTextNode(itemList[y].childNodes[3].innerHTML));

articleItemContainer.appendChild(articleItemDescription);







articleItem.appendChild(articleItemContainer);

rowColumn.appendChild(articleItem);


rowColumn.appendChild(document.createElement("br"));


}






}





}


var init = function () {
   

var xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = function() {



    if (xhttp.readyState == 4 && xhttp.status == 200) {


        recentBlogPost(xhttp);

    }

};

xhttp.open("GET", "../blog/Feed/article1.xml", true);

xhttp.send();



};

init();


function recentBlogPost(xml) {

    var x, y ,  xmlDoc, count, listItem , listItemTitle,listItemDate,listItemLink;
  
    xmlDoc = xml.responseXML;
  
    x = xmlDoc.getElementsByTagName('item');

    if( x.length > 3 ) { count = 3 ; } else {  count = x.length ;} ;




    for (y = 0; y < 3 ; y++) {


        listItem =  document.createElement("li");

        listItemTitle = document.createElement("p");
        
        listItemLink = document.createElement("a");

        listItemLink.setAttribute("href", x[y].childNodes[5].innerHTML)

var text = x[y].childNodes[1].innerHTML+' - '+x[y].childNodes[9].innerHTML.slice(0,-15);
        listItemLink.appendChild(document.createTextNode(text))
        
        listItemTitle.appendChild(listItemLink);

        listItem.appendChild(listItemTitle);

        document.getElementById("recent_blog_posts").appendChild(listItem);



    }
    
    

}




var myIndex = 0;

//carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var slideIndex = null;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

showSlides(1);

function showSlides(n) {


  slideIndex = n;
  
  var i;

 var slides = document.getElementsByClassName("mySlides-free-templates");


  if (n > slides.length) {slideIndex = 1}    

  if (n < 1) {slideIndex = slides.length} ;



  for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none"; 

  }


  slides[slideIndex-1].style.display = "block"; 

}


function showServices(element,n) {
var slides = document.getElementsByClassName("businessservices");



if(element.checked){



  slides[n].style.display = "block"; 


}else{


 slides[n].style.display = "none"; 

}


}





angular.module('consulatancyapp', []).controller('consulatancycontroller', function($scope) {
  
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});

