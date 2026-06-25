let participants=JSON.parse(localStorage.getItem('participants'))||[];
const list=document.getElementById('list');
function render(){
list.innerHTML='';
participants.forEach(p=>{
list.innerHTML+=`<tr><td>${p.name}</td><td>${p.email}</td><td>${p.workshop}</td></tr>`;
});
}
render();
document.getElementById('regForm').addEventListener('submit',e=>{
e.preventDefault();
const name=nameEl.value=nameEl.value;
});
const nameEl=document.getElementById('name');
const emailEl=document.getElementById('email');
const workshopEl=document.getElementById('workshop');
document.getElementById('regForm').onsubmit=function(e){
e.preventDefault();
const name=nameEl.value.trim(),email=emailEl.value.trim(),workshop=workshopEl.value.trim();
const msg=document.getElementById('message');
if(participants.some(p=>p.email.toLowerCase()===email.toLowerCase())){
msg.style.color='red';msg.textContent='Duplicate entry! Participant already registered.';return;
}
participants.push({name,email,workshop});
localStorage.setItem('participants',JSON.stringify(participants));
render();
msg.style.color='green';msg.textContent='Registration Successful!';
this.reset();
};