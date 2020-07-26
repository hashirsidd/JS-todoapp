

function addHtml(todo){
  
  var html = "<li><i class='fa fa-angle-right pr-4'></i><div>"+todo+"</div> <div><a onclick='del(this)'><i class='fa fa-trash delete'></i></a></li></div"
  document.getElementById('items').innerHTML += html;
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
  console.log(a.parentElement.innerHTML);
  a.parentElement.parentElement.parentElement.removeChild(a.parentElement.parentElement);
  
}



