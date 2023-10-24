//            Chapter # 45 to 48 (Assignment)
// 1. 
// Show an alert box on click on a link

// Answer- 1

document.getElementById("link").addEventListener("click", function () {
    alert("Show an alert box onClick on a link!");
});

// 2. 
// Display some Mobile images in browser. On click on an image Show the message in alert to user.

// Answer- 2


let mobiles_Names = ["Iphone 13", "Realme 10", "Samsung-Galaxy-A14", "Vivo-2022", "Vivo-v25e", "Vivo-y51"];
let divClas_nams = ["pics-1", "pics-2", "pics-3", "pics-4", "pics-5", "pics-6",];

document.getElementById("pics-1").addEventListener("click", function () {
    alert("Iphone 13");
})

document.getElementById("pics-2").addEventListener("click", function () {
    alert("Realme 10");
})

document.getElementById("pics-3").addEventListener("click", function () {
    alert("Samsung-Galaxy-A14");
})

document.getElementById("pics-4").addEventListener("click", function () {
    alert("Vivo-2022");
})

document.getElementById("pics-5").addEventListener("click", function () {
    alert("Vivo-v25e");
})

document.getElementById("pics-6").addEventListener("click", function () {
    alert("Vivo-y51");
})

// document.getElementById("save").addEventListener("click", dataFunc());

function datafunc() {
    let count = 0;
    let name = document.getElementById("name").value;
    let numbr = document.getElementById("numb").value;

    let todos_listdiv = document.getElementById("taskLi");
    // Append Table
    let tbl = document.getElementById("tbl");

    let tr = document.createElement("tr");

    tbl.appendChild(tr);
    let td = document.createElement("td");

    tr.appendChild(td);
    console.log(tr.childNodes[0]);


    
  

}








/* 
<tr class="tbl_row" >
    <th>Index</th>
    <th>Name</th>
    <th>Marks</th>
    <th></th>
</tr>

<tr class="tbl_row">
    <td  >01</td>
    <td  >Adnan</td>
    <td  > 55</td>
    <td  > <button class="dlt_btn" > Delete</button> </td>
</tr>  */