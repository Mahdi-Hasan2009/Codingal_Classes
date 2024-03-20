function main(){
    document.getElementById("1").innerHTML = document.getElementById("demo").firstChild.nodeValue;
    document.getElementById("2").innerHTML = document.getElementById("demo").childNodes[0].nodeValue;
}