// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.
const minimumSwaps = arr => {
    let swaps = 0, index = 0, temp = 0;
     for(let i = 0; i < arr.length-1; i++){
         while(arr[i] != i+1){
             index = arr[i];
             temp = arr[index -1];
             arr[i]= temp;
             arr[index - 1]= index;
             swaps++
         }
     }
   return swaps;
   }
   
   console.log(minimumSwaps([1,3,5,2,4,6,7])) 