
function waitingFn(timeInMs){
const futureTime = Date.now() + timeInMs;
while(futureTime > Date.now()){
}

}


waitingFn(3000);
