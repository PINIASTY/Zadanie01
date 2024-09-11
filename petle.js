var liczby = "";
for(var i=1;i<=100;i++){
    liczby += i;
    if (i != 100) liczby += ',';
    if(i%10 == 0) liczby += "<br></br>";
}
document.getElementById("wynik").innerHTML = liczby;

var table = "<table>";
for (var i=0;i<=9;i++){
    table +=`<tr><td>${i}</td><td>${i*i}</td></tr>`;
}
table += "</table>";
document.getElementById("wynik").innerHTML += table;

var liczba = 10;

do{
    console.log(liczba);
    liczba++;
} while (liczba <= 0)

liczba = 10;

while (liczba <= 0){
    console.log(liczba);
    liczba++;
}