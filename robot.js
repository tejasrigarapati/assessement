let imgDisp = [
  {
    image: "https://picsum.photos/id/237/200/300",
    id: 0,
  },
  { image: "https://picsum.photos/seed/picsum/200/300", id: 1 },
  { image: "https://picsum.photos/200/300?grayscale", id: 2 },
  { image: "https://picsum.photos/200/300/", id: 3 },
  {
    image: "https://picsum.photos/200/300.jpg",
    id: 4,
  },
];
let imgSelc;

let msg = "";
let checkbox = document.getElementById("check");

imgDisp.forEach((value, index) => {
  msg =
    msg +
    `
    <div>
    <img onclick="sendIdFun(${index})"  src=${value.image} alt="Image 1" height="70px" width="70px" class="tile img1">
    </div>
    
           `;
});
container.innerHTML = msg;

function selectedFun() {
    if(checkbox.checked){
        if (imgSelc == imgDisp[0].id ) {
            console.log(imgSelc);
            verify.innerHTML = "You are verifed";
          } else {
            verify.innerHTML = " selected different image";
          }
    }
    else{
        verify.innerHTML = "checkBox is not selected";
    }
  
}
function sendIdFun(id) {
  imgSelc = id;
}



 
