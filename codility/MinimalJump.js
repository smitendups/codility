function solution(X,Y,D){

    // let count=0;
    // let sum=X;
    // while(sum<Y){
    //     sum=sum+D;
    //     count++;
    // }
    // return count;

    let totalDistance=Y-X;
    let count=totalDistance/D;
     if(!Number.isInteger(count)){
        let totalcount=Math.floor(count)+1;
        return totalcount;
     }
   else{
    return count;
   }
  

}
console.log(solution(10,120,30))