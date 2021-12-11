function solution(A,B,K){
    let count=0;
    if(A<=B){
        for(let i=A;i<=B;i++){
            if(i%K==0){
                count++;
            }
        }
        return count;
    }
    else {
        return "A must be smaller than B";
    }
    
}
console.log(solution(6,11,2))