function solution(N,A){
   let arr=[];
   for(let j=0;j<N;j++){
       arr[j]=0;
   }
   for(let i=0;i<A.length;i++){

   
         if(A[i]==N+1){
             
             let max=arr[0];
             for(let k=0;k<arr.length;k++){
                 if(max<arr[k]){
                     max=arr[k];
                 }

             }
             for(let l=0;l<arr.length;l++){
                 arr[l]=max;
             }
            
         }
         else{
            arr[A[i]-1]=arr[A[i]-1]+1;
         }

      console.log(arr)
     
   }
 //  arr.pop();
   return arr;
}
console.log(solution(5,[3,4,4,6,1,4,4]))