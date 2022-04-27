
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
document.querySelector('.monkey').classList.add('monkey');

app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome, Karibu 😊");
  await delay(700);
  createText("Starting the server ■■■■■■■■■■■□□□ ");
  await delay(1500);
  createText("You can run several commands:");

  createCode("about me", "A short Intro to who am I and what I do.");
  createCode("all", "See all commands.");
  createCode("social -a", "All my social networks.");

  await delay(500);
  new_line();
}


function new_line(){

  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# guest";
  span1.textContent = " in";
  span2.textContent = " ~/abraham-nzau";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();

}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){

  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);

    createCode("projects", "My github page with my projects. Follow me there 😊");
    createCode("about me", "Who am I and what do I do.");
    createCode("social -a", "My Social Networks.");
    createCode("contact me", "How you can get in touch with me");
    createCode("resume", "To get a copy of my Updated Resume.");
    createCode("clear", "Clean the terminal.");
    createCode("hello", "To see my pet Monkey, he guards the Site. He doesn't Bite :)");

  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/A13UNZAU' target='_blank'><i class='fab fa-github white'></i> github.com/A13UNZAU</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("As a Tech Enthusiast, I often find myself asking, \"To what end is the pursuit of knowledge if not for the betterment of mankind.\" I'm a firm believer that all information and data the current technology has made available means nothing if it remains inaccessible to those who need it most.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/A13UNZAU' target='_blank'><i class='fab fa-github white'></i> github.com/A13UNZAU</a>")
    createText("<a href='https://www.linkedin.com/in/abraham-nzau-1a8554106/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/abraham-nzau</a>")
    // createText("<a href='https://www.instagram.com/heber_leonard/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/heber_leonard</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  else if(value === "about"){
    trueValue(value);
    createText("Didn't you mean: about me?")
  }

  else if(value === "contact me"){
    trueValue(value);
    createText("<i class='fa fa-envelope-open white'></i> Mail: abrahamnzau@gmail.com")
    createText("<i class='fab fa-skype white'></i> Skype: abrahamnzau</a>")
  }

  else if(value === "resume"){
    trueValue(value);
    window.open("resume/resume.zip");
  }

  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }

  else if(value === "hello"){
    document.querySelector('.monkey').classList.add('show');
    await delay(7000);
    document.querySelector('.monkey').classList.remove('show');
  }

  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function close_monkey(){
  document.querySelector('.monkey').classList.add('monkey');
}

function trueValue(value){

  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){

  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");

  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();