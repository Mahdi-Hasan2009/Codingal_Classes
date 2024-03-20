function main(){
    document.getElementsById("1").innerHTML = document.getElementsById("demo").firstChild.nodeValue;
    document.getElementsById("2").innerHTML = document.getElementsById("demo").childNodes[0].nodeValue;
}