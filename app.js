//Autor do codigo: mgzhnSad
//Github do autor: https://github.com/mgzhnSad

function main(){
    document.getElementById("adcbtn").addEventListener("click", function(){
        var lista = document.getElementById("lista");
        var tx = document.getElementById("inpt").value;
        var li = document.createElement("li");
        li.textContent = tx;
        lista.appendChild(li);
    });
    document.getElementById("rmbtn").addEventListener("click", function(){
        var element = document.getElementById("lista").childNodes;
        document.getElementById("lista").removeChild(element[0]);
    });
  };
  
  window.addEventListener("load", main);