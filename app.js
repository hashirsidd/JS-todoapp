

function addHtml(todo){
  
  var html = "<li class='mb-3'><i class='fa fa-angle-right pr-4'></i><div class='text'>"+todo+"</div> <a onclick='del(this)'><i class='fa fa-trash delete'></i></a></li>"
  document.getElementById('items').innerHTML += html;
}

function doit_onkeypress(event){
  if (event.keyCode == 13 || event.which == 13){
      addTodos();
  }
}
function addTodos() {
  item="";
  
  item = document.getElementById('input-item').value;
  if (item != "") {
    item = item.toLowerCase();
    var f = item[0].toUpperCase();
    var fa = item.slice(1);
    addHtml(f+fa);
    document.getElementById('input-item').value = "";
  }
}

function del(a){
  console.log(a.parentElement.parentElement.innerHTML);
  a.parentElement.parentElement.removeChild(a.parentElement);
  
}



