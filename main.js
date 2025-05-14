document.addEventListener('DOMContentLoaded', function(){
let hotdogId = document.getElementById ("hotdogId")
let ahh = document.getElementById ("ahh")
let chenyaoVoice = document.getElementById ("chenyaoVoice")
let createdBy = document.getElementById ("createdBy")
let go = document.getElementById ("go")
let show = document.getElementById ("show")

squirt.pause()
reload.pause()
boom.pause()
alert("Cautious: sexual website not reccomend to open")

go.addEventListener('click', function(){
show.style.display="block"
go.style.display="none"

setTimeout(()=>{
  hotdogId.classList.add("follow")
  console.log("follow")
  createdBy.style.opacity="0";
},6000);

setTimeout(()=>{
  boom.play()
},0001);

setTimeout(()=>{
 reload.play()
},5000);

setTimeout(()=>{
chenyao.style.opacity="1"
chenyaoVoice.play()
setTimeout(()=>{
milk.style.opacity="1"
squirt.play()
setTimeout(()=>{
chenyao2.style.opacity="1"
chenyao.style.opacity="0"
milk.style.opacity="0"
ahh.play()
setTimeout(()=>{
  document.body.style.opacity="0"
},1000);
},1300);
},1300);
},8000);

});

});
