let request;
let response;
let jsonData;
let obj = {};
let newJson = [];
let table;
let tbody;

// let file = fopen(getScriptPath("./sample.json"), 3);


// async function test() {
//   request = new Request("landing.json");
//   response = await fetch(request);
//   quizData = await response.json();
//   console.log(quizData);
//   add();
  
// }
// test();

const quizData =[
  {
    "coursename" : "My Takeaway",
    "total_ques" : 10,
    "duration"   : 30,
    "course_no"  : 1
  },
  {
        "question": "Which language runs in a web browser?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "javascript",
        "correct": "d"
  },
  {
      "question": "What does CSS stand for?",
      "a": "Central Style Sheets",
      "b": "Cascading Style Sheets",
      "c": "Cascading Simple Sheets",
      "d": "Cars SUVs Sailboats",
      "correct": "b"
  },
  {
        "question": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Hypertext Markdown Language",
        "c": "Hyperloop Machine Language",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "a"
  },

  {
    "coursename" : "2nd course",
    "total_ques" : 20,
    "duration"   : 55,
    "course_no"  : 2
  },
  {
        "question": "Which language runs in a web browser?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "javascript",
        "correct": "d"
  },
  {
      "question": "What does CSS stand for?",
      "a": "Central Style Sheets",
      "b": "Cascading Style Sheets",
      "c": "Cascading Simple Sheets",
      "d": "Cars SUVs Sailboats",
      "correct": "b"
  },
  {
        "question": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Hypertext Markdown Language",
        "c": "Hyperloop Machine Language",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "a"
  },
  
  {
    "coursename" : "3nd course",
    "total_ques" : 15,
    "duration"   : 35,
    "course_no"  : 3
  },
  {
        "question": "Which language runs in a web browser?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "javascript",
        "correct": "d"
  },
  {
      "question": "What does CSS stand for?",
      "a": "Central Style Sheets",
      "b": "Cascading Style Sheets",
      "c": "Cascading Simple Sheets",
      "d": "Cars SUVs Sailboats",
      "correct": "b"
  },
  {
        "question": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Hypertext Markdown Language",
        "c": "Hyperloop Machine Language",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "a"
  },
  {
    "coursename" : "4nd course",
    "total_ques" : 30,
    "duration"   : 35,
    "course_no"  : 4
  },
  {
        "question": "Which language runs in a web browser?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "javascript",
        "correct": "d"
  },
  {
      "question": "What does CSS stand for?",
      "a": "Central Style Sheets",
      "b": "Cascading Style Sheets",
      "c": "Cascading Simple Sheets",
      "d": "Cars SUVs Sailboats",
      "correct": "b"
  },
  {
        "question": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Hypertext Markdown Language",
        "c": "Hyperloop Machine Language",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "a"
  },
  {
    "coursename" : "5nd course",
    "total_ques" : 5,
    "duration"   : 35,
    "course_no"  : 5
  },
  {
        "question": "Which language runs in a web browser?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "javascript",
        "correct": "d"
  },
  {
      "question": "What does CSS stand for?",
      "a": "Central Style Sheets",
      "b": "Cascading Style Sheets",
      "c": "Cascading Simple Sheets",
      "d": "Cars SUVs Sailboats",
      "correct": "b"
  },
  {
        "question": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Hypertext Markdown Language",
        "c": "Hyperloop Machine Language",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "a"
  }

]

dynamic();

function dynamic(){
  quizData.forEach((items,i)=>{
    if (items.coursename != null){
      add(i,items.coursename,items.total_ques,items.duration,items.course_no);
    }
  });
}

function add(course_id,course_name,total_ques,duration,course_no) {

    tablebody = document.getElementById("display-body");
  
    let tr = document.createElement("tr");
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.setAttribute('id',course_id);

   
    const textnode0 = document.createTextNode(course_no);
    const textnode1 = document.createTextNode(course_name);
    const textnode2 = document.createTextNode(total_ques);
    const textnode3 = document.createTextNode((total_ques)*2 + " minutes");
    
    td0.appendChild(textnode0);
    td1.appendChild(textnode1);
    td2.appendChild(textnode2);
    td3.appendChild(textnode3);

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tablebody.appendChild(tr);
   

  document.getElementById(course_id).addEventListener("click", redirectToReport);
 
    // alert(localStorage.getItem("coursename"));
}


function redirectToReport() {

  // localStorage.setItem("id", "FH-112");
//   let isAdmin = localStorage.getItem("id").includes("AD")
//   if(isAdmin){
    location.href = "./graph.html";
//   }else{
    // location.href = "./wel.html";
//   }

//  localStorage.setItem("coursename",quizData[0].coursename);
}