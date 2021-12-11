function solution(A,K){
    for(let i=0;i<K;i++){
        let temp=A[0];
        {
           for(let j=0;j<A.length;j++) {

               if(j==A.length-1){
                   A[0]=temp;
               }
                 else{
                    let x=A[j+1];
                    A[j+1]=temp;
                    temp=x;
                 }
                    
           }
        }
    }
    return A;
}
console.log(solution([1,2,3,4],4))