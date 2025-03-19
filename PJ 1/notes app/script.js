const notesContainer=document.querySelector(".notes-container")
const createBtn=document.querySelector(".btn");
let notes =document.querySelector(".input-box");

function updateStorage(){
  localStorage.setItem('notes',notesContainer.innerHTML);
}

function loadNotes(){
  const savedNotes=localStorage.getItem('notes');
  if(savedNotes){
    notesContainer.innerHTML=savedNotes;
  }
}

createBtn.addEventListener('click' ,()=>{
  let inputBox=document.createElement('p');
  let img=document.createElement("img");
  inputBox.className='input-box';
  inputBox.setAttribute("contenteditable",'true');
  img.src='images/delete.png';
  notesContainer.appendChild(inputBox).appendChild(img);


  inputBox.addEventListener('input',()=>{
    updateStorage();
  })
  //event input is hellpfull for the contenteditable elment whenreve we input anythinhg is saved
})


notesContainer.addEventListener('click',function(e){
  if(e.target.tagName ==="IMG"){
    e.target.parentElement.remove();
    updateStorage();
  // }else if(e.target.tagName==='P'){
  //   notes=document.querySelectorAll(".input-box");
  //   notes.forEach(note => {
  //       note.onkeyup=function(){
  //         updateStorage();
  //       }
  //   });
  // } these code can be done by other addeventlistner,,
}})

loadNotes();