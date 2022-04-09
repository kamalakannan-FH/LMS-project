test();
async function test() {
    let request = new Request("report.json");
    let response = await fetch(request);
    let data = await response.json();
    passed(data);
  }

  function passed(data){
    var correct;
    var wrong;
    var answered;
    var que;
      var user_nam = document.getElementById('user_name');
      var div_tag = document.createElement('div');
      div_tag.innerHTML= localStorage.getItem('indivi-name');
      user_nam.append(div_tag);
    data.forEach( (items) => {
      if (items.name == localStorage.getItem("indivi-name")){
        correct= items.correct_ans;
        wrong= items.wrong_ans;
        answered= items.no_of_attempt_que;
        que= items.total_que;
      } 
    });

    var user = document.getElementById("total_users");
    var div1 = document.createElement("div");
    div1.innerHTML= que;
    user.appendChild(div1);
    
    var pass =document.getElementById("passid");
    var div2= document.createElement("div");
    div2.innerHTML=correct;
    pass.appendChild(div2);

    var fail= document.getElementById("failid");
    var div3 = document.createElement("div");
    div3.innerHTML= wrong;
    fail.appendChild(div3);
    console.log(que,correct,wrong);
    var unanswered = que-answered;
    piechart(que,correct,wrong,answered,unanswered);
  }

 

  function piechart(ques,corr,wrng,ans,unans){

    var xValues = ["Total ques","Correct","Wrong","Answered","Unanswered"];
    var yValues = [ques,corr,wrng,ans,unans];
    var zValues =[ques,corr,wrng,ans,unans,""];
    var barColors = ["green","red","#2b5797","pink","yellow"];
    
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
          text: "Sample title"
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