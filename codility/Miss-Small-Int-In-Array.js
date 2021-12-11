function solution(A){
    let smallInt;
    for(let i=0;i<A.length;i++){
         if(A[i]<0){
             smallInt=1;
         }
         else{
            smallInt=2;
         }
    }
    if(smallInt==1){
        return 1;
    }
    else{
        for(let j=0;j<=A.length;j++){
            if ( !A.includes(j+1) ){
                smallInt=j+1;
                break;
            }
        }
        return smallInt;
    }
}
console.log(solution([-1,-3,1,2,6]))