document.write("95.to replace all numbers with a specified number in an array of integers."+"<br>");
function test95(arr,o,n){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==o){
            arr[i]=n;
        }
    }
    return arr;
}
document.write("The array :[1,2,4,5,4] ,replace number:5 , changing number:4 , Ans : "+test95([1,2,4,5,4],4,5)+"<br><br>");