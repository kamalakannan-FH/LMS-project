let request;
let response;
let jsonData;
let userDetail;
let table = document.getElementById("display");

let tbody;
let stat;
async function test() {
    request = new Request("./user.json");
    response = await fetch(request);
    jsonData = await response.json();
    // console.log(jsonData);

    localStorage.setItem("userDetails",JSON.stringify(jsonData) );
    userDetail=JSON.parse(localStorage.getItem("userDetails"));
    // console.log("hello",userDetail);

    create();
    // console.log("last");
    localStorage.setItem("userDetails",JSON.stringify(userDetail) );
  }
  test();
  function create(){
    tbody = document.createElement("tbody");
    userDetail.forEach(function (data, i) {
        // console.log("data, i", data, i);
        add(data, i);
      });
  } 

  function add(data,i){
    let tr = document.createElement("tr");
    for (let [key, item] of Object.entries(data)) {
        // console.log(i,item);
        var td = document.createElement("td");
        if(key==="name"){
          // let anchor=document.createElement("a");
          // anchor.href="report.html";
          // anchor.innerHTML=item;
          // td.appendChild(anchor);
          td.innerHTML=item;
          td.onclick=function(){
            console.log(this.innerHTML);
            let newName=this.innerHTML;
            if(localStorage.getItem("indivi-name")==null){
              localStorage.setItem("indivi-name","");
            }
            localStorage.setItem("indivi-name",newName);

            location.href="report.html"
          }

        }
        else if(key==="status"){
          if(data.score>=80){
            userDetail[i][key]="Pass";
          }
          else{
            userDetail[i][key]="Fail"
          }
          td.innerHTML = userDetail[i][key];
          // console.log("user",userDetail);

        }
        else if(key==="time"){
          if(item===1)
            item=item+" min";
          else
            item=item+" mins"
          td.innerHTML = item;
        }
        else if(key==="score"){
          item=item+" %"
          td.innerHTML = item;
        }
        else{
          td.innerHTML = item;
        }
        // td.id = key + data.id;
        tr.appendChild(td);
      }
      // console.log("user",userDetail);
      tbody.appendChild(tr);
      table.appendChild(tbody);
  }


  var input, find, tr, td;
  input = document.getElementById("myInput");
  tr = table.getElementsByTagName("tr");
  function search() {
    let txtValue;
    find = input.value.toUpperCase();

    for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        console.log("textvalue",txtValue)

        if (txtValue.toUpperCase().indexOf(find) > -1) {
          console.log("found")
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

function filter(obj){
  let txtValue;
  console.log(obj.value);
  for(let i=0;i<tr.length;i++){
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      console.log(txtValue)
      if(obj.value.toLowerCase()!=="all"){
        console.log("inside")
        if (txtValue.toUpperCase().indexOf(obj.value.toUpperCase()) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
      else{
        tr[i].style.display="";
      }
      
    }
  }
}  