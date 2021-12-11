function solution(A){
     let max=[];
     let w=0;
     for(let i=0;i<A.length-2;i++){
         for(let j=i+1;j<A.length-1;j++){
             for(let k=i+2;k<A.length;k++){
                 sum=A[i]*A[j]*A[k];
                 max[w]=sum;
                 w++;
             }
         }
     }
     let m=Math.max(...max);
     return m;
}
console.log(solution([-3,1,2,-2,5,6]))