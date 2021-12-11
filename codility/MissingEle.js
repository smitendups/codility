function solution(A){
    let missing=A[0] ^ 1;
    for(let i=1;i<A.length;i++){
        missing=missing ^ A[i] ^ (i+1);
    }
    return missing ^ (A.length+1);
}
console.log(solution([2,3,4,5,6]));