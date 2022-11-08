// function addNewComment(newComment) {
//     if (newComment === "") {
//         console.log()
//     } else {
        
//     }
// }

// function myFunction() {
//     var carName = "Volvo";
//     console.log(carName);
// }

// carName();
// console.log(carName);

// let newComment = {name: 'Hello T3H'};

// function addNewComment(newComment) {
//     newComment.name = 'Hello React'
// }

// addNewComment(newComment);
// console.log(newComment.name);
const ages = [3, 5, 44, 7, 33, 33, 17, 90, 8, 12, 3, 24, 120, 7, 100];
    
const ranges = [
    [7,15],
    [4,40],
    [11,125]
];

let count = 0;
let count1 = 0;
let count2 = 0;
let arr = [];
let arr1 = [];
let arr2 = [];
let arrTong = [];
    for(let i=0;i<ages.length;i++){
      if(ages[i]>=ranges[0][0] && ages[i]<=ranges[0][1]){
        arr.push(ages[i]);
        count ++;
        
      }
      if(ages[i]>=ranges[1][0] && ages[i]<=ranges[1][1]){
        arr1.push(ages[i]);
        count1 ++;
        
      }
      if(ages[i]>=ranges[2][0] && ages[i]<=ranges[2][1]){
        arr2.push(ages[i]);
        count2 ++;
        
      } //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
    }
    arrTong.push(arr,arr1,arr2)
    console.log(arr);
    console.log( " xuat hien " + count +  " lan");
    console.log(arr1);
    console.log( " xuat hien " + count1 +  " lan");
    console.log(arr2);
    console.log( " xuat hien " + count2 +  " lan");
    console.log();

// let arr = ages.map(myFunction);

// function myFunction(){
//       return ages[i]>=ranges[0][0] && ages[i]<=ranges[0][1];
// }
// console.log(arr);