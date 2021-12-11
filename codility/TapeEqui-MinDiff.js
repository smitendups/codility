function solution(A){
    let sum=0;
    for(let i=0;i<A.length;i++){
        sum= sum+A[i];
    }
     let sumTillCurrentIndex=A[0];
     let minDifference=Math.abs(A[0]-(sum-A[0])-A[0]);
     sum=sum-A[0];
     for(let p=2;p<=A.length;p++){
         sumTillCurrentIndex =sumTillCurrentIndex+ A[p-1];
         sum=sum-A[p-1];
         if(minDifference > Math.abs(sum-sumTillCurrentIndex)){
             minDifference=Math.abs(sum-sumTillCurrentIndex);
         }
     }
     return minDifference;

}
console.log(solution([3,1,2,4,3]))
