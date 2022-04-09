test();
async function test() {
    let request = new Request("graph.json");
    let response = await fetch(request);
    let data = await response.json();
    totalUsers(data);
  }

  function totalUsers(data){
    var user = document.getElementById("total_users");
    var div1 = document.createElement("div");
    div1.innerHTML= data.length;
    user.appendChild(div1);
    passed(data);
  }

  function passed(data){
    var pass_count =0;
    var fail_count =0;
    data.forEach( (items) => {
      if (Number(items.score) > 81 ){
        pass_count= pass_count+1;
      }
      else if (Number(items.score) <= 80)
        fail_count =fail_count +1;
    });
   
    var pass =document.getElementById("passid");
    var div2= document.createElement("div");
    div2.innerHTML= pass_count;
    pass.appendChild(div2);
    failed(data,fail_count);
    piechart(pass_count,fail_count,data);
  }

  function failed(data,fail_count){
    var fail= document.getElementById("failid");
    var div3 = document.createElement("div");
    div3.innerHTML= fail_count;
    fail.appendChild(div3);
  }

  function piechart(P,F,data){

  var xValues = ["Passed", "Failed" , "Incomplete"];
  var incomplete= data.length - (P+F);
  var yValues = [P,F,incomplete];
  var zValues =[P,F,incomplete,""];
  var barColors = ["green","red","#2b5797"];
 
  new Chart("myChart1", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: zValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "sample title"
      }
    }
  });


  new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Sample title"
    }
  }
  });

 
}
