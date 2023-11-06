let emails = [
  {
    id:1,
    from: "beetlejuice@gmail.com",
    msg: "Hi Subramanian,Here are some of the latest opportunities matching your preferences. Apply now!",
    fav:false,
    deleted:false
  },
  {
    id:2,
    from: "richardtheretard@gmail.com",
    msg: "College students can taste placement success with this course!",
    fav:false,
    deleted:false
  },
  {
    id:3,
    from: "dumbass@email.com",
    msg: "“software engineer”: ADSMN - HTML CSS JS - Frontend Developer and more",
    fav:false,
    deleted:false

  },
  {
    id:4,
    from: "noone@gmail.com",
    msg: "Invitation to participate in the first pilot of Central Bank Digital Currency - Retail (Digital Rupee - e₹) / SBI CBDC",
    fav:false,
    deleted:false

  },
  {
    id:5,
    from: "bb12372@gmail.com",
    msg: "Reminder: Verify your email to continue to Proton",
    fav:false,
    deleted:false

  },
  {
    id:6,
    from: "wakali@gmail.com",
    msg: "Get Tech Placed | Join the 20X Programming Bundle",
    fav:false,
    deleted:false

  },
  {
    id:7,
    from: "captainalex@email.com",
    msg: "Subramanian, new internships in DataSkience OPC, Hooman Digital LLP & more",
    fav:false,
    deleted:false

  },
  {
    id:8,
    from: "jamaalbee@rediff.com",
    msg: "Subramanian, new internships in DataSkience OPC, Hooman Digital LLP & more",
    fav:false,
    deleted:false

  },
  {
    id:9,
    from: "niggatron@gmail.com",
    msg: "Wanna know how 'typography' affects the human mind? 🤯 Register to know more!",
    fav:false,
    deleted:false

  },
];
const clickedEmail = {};
const visitedEmails = [];
let favouriteEmails =[];
let deleteEmails = []
let navBtns = "";
let selectedEmail;
let val = null
const left = document.getElementById("left");
const right = document.getElementById("right");
const fromDiv = document.getElementById("from");
const emailBodyText = document.getElementById("emailbody");
const clickedIds = []

clickedNav();


function clickedNav() {
  const navs = document.querySelectorAll(".nav-box");
  navs.forEach((k) => {
    k.addEventListener("click", clickedNavFn);
  });
}
function clickedNavFn() {
  if(val!=null){
    val.classList.remove("clicked-pink")
  }
  val = this;
  navBtns = val.innerText;
  
  left.innerHTML = "";
  checkNavBtns();
  val.classList.add("clicked-pink")
}
function checkNavBtns() {
  switch (navBtns) {
    case "Inbox": {
      inbox();
      break;
    }
    case "Favourites": {
      favourites();
      break;
    }
    default: {
      break;
    }
  }
}
function inbox() {
  emails.map((k) => {
    const emailBox = document.createElement("div");
    const emailFrom = document.createElement("div");
    const emailBody = document.createElement("div");
    const emailFav = document.createElement("i")
    const deleteEmail = document.createElement("i")
    const msg = (k.msg.length>40)?k.msg.slice(0,40)+"...":k.msg
    deleteEmail.id = "delete-email"
    emailFav.id = "email-fav"
    deleteEmail.classList.add("bi")
    deleteEmail.classList.add("bi-trash-fill")
    emailFav.classList.add("bi")
    emailFav.classList.add("bi-star-fill")
      emailBox.classList.add("email-box");
      emailFrom.classList.add("email-from");
      emailBody.classList.add("email-body");
      emailFrom.innerText = k.from;
      emailBody.innerText = msg;
      emailBox.appendChild(emailFav)
      emailBox.appendChild(emailFrom);
      emailBox.appendChild(emailBody);
      emailBox.appendChild(deleteEmail)
      left.appendChild(emailBox);
      emailBox.addEventListener("click", () => rightfn(k, emailBox));
      emailFav.addEventListener("click",()=>addToFav(k,emailFav))
      deleteEmail.addEventListener("click",()=>deletedEmail(k,emailBox))
      
  });
}
function deletedEmail(k,e){
    e.style.display = "none"
    k.deleted = true
    deleteEmails = emails.filter(k=>{
        return k.deleted
    })
    console.log(deleteEmails)
}

function addToFav(k,e){

    if(e.classList.contains("red")){
        e.classList.remove("red")
       
    }else{
        e.classList.add("red")
    }

    if(clickedIds.indexOf(k.id)>=0){
        clickedIds.pop(k.id)
        console.log(clickedIds)
        
    }else{
        clickedIds.push(k.id)
        console.log(clickedIds.indexOf(k.id))
        console.log(clickedIds)
    }
    favouriteEmails = emails.filter(mk=>{
     return clickedIds.includes(mk.id)
        
    })
    console.log(favouriteEmails)

    
   
}
function rightfn(k, e) {
  visitedEmails.push(k);
  fromDiv.innerText = k.from;
  emailBodyText.innerText = k.msg;
  e.classList.add("darkgray");
}

function favourites() {
  if (navBtns === "Favourites") {
    favouriteEmails.map((k) => {
      const emailBox = document.createElement("div");
      const emailFrom = document.createElement("div");
      const emailBody = document.createElement("div");
      emailBox.classList.add("email-box");
      emailFrom.classList.add("email-from");
      emailBody.classList.add("email-body");
      emailFrom.innerText = k.from;
      emailBody.innerText = k.msg;
      emailBox.appendChild(emailFrom)
      emailBox.appendChild(emailBody)
      left.appendChild(emailBox);
      emailBox.addEventListener("click", () => rightfn(k, emailBox));
    });
  }
}
