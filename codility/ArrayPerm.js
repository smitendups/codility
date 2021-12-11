function solution(A){
//     for(let i=0;i<A.length;i++){
//         for(let j=i+1;j<A.length;j++){
//             if(A[i]>A[j]){
//                 temp=A[i];
//                 A[i]=A[j];
//                 A[j]=temp;
//             }
//         }
//     }
//     let isPermutaion=1;
//    for(let x=0;x<A.length;x++){
//        if (A[x] !== x+1){
//           isPermutaion=0;
//           break;
//        }
       
//    }
//     return isPermutaion;
A.sort((a,b)=>a-b)
return A;
}
console.log(solution([6,5,9,3,2,1]))