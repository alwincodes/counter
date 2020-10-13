//query selectors
const count = document.querySelector(".count");
const addCount = document.querySelector("#add");
const delCount = document.querySelector("#del");
//event listeners
addCount.addEventListener("click",add);
delCount.addEventListener("click",del);
//functions
function add(){
    let num = count.textContent;
    num++;
    count.innerHTML=num;
}
function del(){
    let num = count.textContent;
    if(num == 0){
       count.innerHTML=0;
    }else{
        num--;
        count.innerHTML=num;
    }
}