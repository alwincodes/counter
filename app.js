//query selectors
const count = document.querySelector(".count");
const addCount = document.querySelector("#add");
const delCount = document.querySelector("#del");
const body = document.querySelector("body")
//event listeners
addCount.addEventListener("click",add);
delCount.addEventListener("click",del);
//functions
function colour(num){
    if(num % 2 == 0){
         body.classList.add("even");
    }
    else{
        body.classList.remove("even");
    }
}
function add(){
    let num = count.textContent;
    num++;
    count.innerHTML=num;
    colour(num);
}
function del(){
    let num = count.textContent;
    if(num == 0){
       count.innerHTML=0;
    }else{
        num--;
        count.innerHTML=num;
    }
    colour(num);
}