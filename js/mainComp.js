function computer(AllElements){
    var foundBox = false;
    var emptyArr = [];
    var random;

    for(var i = 0 ; i < AllElements.length ; i++){
        if(!(AllElements[i].classList.contains("circleBox") || AllElements[i].classList.contains("xBox"))){
            emptyArr.push(AllElements[i]);
          
        }
    }
    console.log(emptyArr);

    while(!foundBox){
        random = Math.floor(Math.random() * (emptyArr.length - 1));
        if(!(emptyArr[random].classList.contains("circleBox") || emptyArr[random].classList.contains("xBox"))) {
            foundBox=true;
            emptyArr[random].classList.toggle("circleBox");
            emptyArr[random].removeEventListener("click",AddactionOfEvent);
        }
    }
   // return emptyArr[random];
}

