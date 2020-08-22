function newItem() {
    var item = document.getElementById("input").value;
  
    if(item==""){
      alert("Please enter something")
    }

    else{
      let ul = document.getElementById("list");
    
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("- " + item)); 
      ul.appendChild(li);  
      
      document.getElementById("input").value = "";   
      
      li.onclick = removeItem; // remove Items when the li is clicked
    }
   
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    console.log("enter clicked!");
    newItem();
  }
};

function removeItem(e) {
  e.target.remove()
}