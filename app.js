let add = document.getElementById("add");
let inputText = document.getElementById("inputText");
let ekle = document.getElementById("ekle");
let clear=document.getElementById("clear");
let son=document.getElementById("son")
let sonuc = document.getElementById("sonuc")

add.addEventListener("click", function () {
  let newli = document.createElement(("li"));

  newli.classList.add("newText")
  console.log(newli);
  ekle.appendChild(newli);
  newli.innerHTML = inputText.value;
  inputText.value = "";
  newli.addEventListener("click", function () {
    newli.style.textDecoration = "line-through"
  })

    newli.addEventListener("dblclick",function(){
    ekle.removeChild(newli)
    let newli2=document.createElement("li")
    son.appendChild(newli2);
    newli2.classList.add("newText2")
    newli2.innerHTML=newli.innerHTML;

    clear.addEventListener("click",function(){
      son.removeChild(newli2);  
      sonuc.innerHTML="Seçimleriniz Silindi!"
      
    })
    sonuc.innerHTML="Seçiminiz Eklendi"
  })
})

// clear.addEventListener("click",function(){
// ekle.removeChild(newli);  
// })