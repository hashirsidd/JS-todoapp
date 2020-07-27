
function addHtml(todo) {
  var html = '<li class="mb-3"> <a onclick="done(this)" id="linkdone"><i id="square" class="fa fa-square-o pr-4"></i><div id="val" class="text">' + todo + '</div></a> <a onclick="del(this)" class="del"><i class="fa fa-trash delete"></i></a> </li> ';
  document.getElementById('items').innerHTML = html + document.getElementById('items').innerHTML;
}
function done(a) {
  a.setAttribute('onclick', 'undo(this)');
  var i = a.firstChild;
  i.classList.replace('fa-square-o', 'fa-check-square-o');
  var div = a.childNodes[1];
  div.classList.add('line');
}
function undo(a) {
  a.setAttribute('onclick', 'done(this)');
  var i = a.firstChild;
  i.classList.replace('fa-check-square-o', 'fa-square-o');
  var div = a.childNodes[1];
  div.classList.remove('line');
}
function doit_onkeypress(event) {
  if (event.keyCode == 13 || event.which == 13) {
    addTodos();
  }
}
function addTodos() {
  item = "";

  item = document.getElementById('input-item').value;
  if (item != "") {
    item = item.toLowerCase();
    var f = item[0].toUpperCase();
    var fa = item.slice(1);
    addHtml(f + fa);
    document.getElementById('input-item').value = "";
  }
}

function del(a) {
  console.log(a.parentElement.parentElement.innerHTML);
  a.parentElement.parentElement.removeChild(a.parentElement);

}



