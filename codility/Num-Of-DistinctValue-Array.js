function solution(A){
    let arr=[];
    for(let i=0;i<A.length;i++){
           if( !arr.includes(A[i])){
               arr.push(A[i]);
           }
    }
    let len=arr.length;
    return len;
}
console.log(solution([2,1,1,2,3,1,4]))