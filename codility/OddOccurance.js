function solution(){
    let arr=[1,102,3,99];
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    console.log(max);
}
solution()