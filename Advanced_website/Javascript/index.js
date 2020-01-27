
function singleView(param1, param2, param3)
{
    var primary = document.getElementById(param1);
    var other1 = document.getElementById(param2);
    var other2 = document.getElementById(param3);
    var original;
    switch(param1){
        case "posts":
            original="300px";
            extended="1000px";
            break;
        case "tweets":
            original="auto";
            extend="1000px";
            break;
        case "friends":
            original="50px";
            extended="50px"
            break;
    }
    if(other1.style.display === "block" & other2.style.display === "block"){
      other1.style.display = "none";
      other2.style.display = "none";
      primary.style.width= "75%";
      primary.style.transition = "width 0.2s";
      for (var i=0;i<document.getElementsByName('i-' + param1 ).length;i++){
      document.getElementsByName('i-' + param1)[i].style.height=extended;
       }

  }else{
      other1.style.display = "block";
      other2.style.display = "block";
      primary.style.width= "33.33333%"
      friends.style.transition = "width 0.2s";
      for (var i=0;i<document.getElementsByName('i-' + param1).length;i++){
      document.getElementsByName('i-' + param1)[i].style.height=original;
       }

      
  }
}


var i = 0;
var names = ['jey','jack','josh','julien','juice'];

  var ul = document.createElement('ul');
  document.getElementById('myList').appendChild(ul)
;


names.forEach(function(name){
  var li = document.createElement('li');
  var img = document.createElement('img');
      img.src ="https://robohash.org/" + i;
      img.id = "img"+i;
     ul.appendChild(li);
     li.className="friends";
     li.appendChild(img);  
     li.innerHTML += name;
     li.id = i++;  
     
});

function openForm(param1) {
  document.getElementById(param1 +"_myForm").style.display = "block"; 
  document.getElementById("tweets").style.opacity ="0.1";
  document.getElementById("friends").style.opacity ="0.1"; 
  var x = document.getElementById(param1);
  var z = document.getElementsByName("i-post");    
  for (var i=0;i<z.length;i++){
        if(document.getElementsByName("i-post")[i].id === param1)
            {
            }else{
                document.getElementsByName("i-post")[i].style.opacity="0.1";
            }
      }
   
}

function closeForm(param1) {
  document.getElementById(param1 +"_myForm").style.display = "none";
    document.getElementById("tweets").style.opacity ="1";
  document.getElementById("friends").style.opacity ="1"; 
  var x = document.getElementById(param1);
  var z = document.getElementsByName("i-post");    
  for (var i=0;i<z.length;i++){
        if(document.getElementsByName("i-post")[i].id === param1)
            {
            }else{
                document.getElementsByName("i-post")[i].style.opacity="1";
            }
      }

}

function addComment(param1){
      var x = document.createElement("LI");
      var t = document.createTextNode(document.getElementById(param1 + "_comment").value);
      x.appendChild(t);
      document.getElementById(param1 + "commentlist").appendChild(x);
      closeForm(param1);
}


