const buttons = document.querySelectorAll("button")
const task = document.querySelector(".tasks")
const buttonsContener = document.querySelector(".buttonsContener")
const tasksContener = document.querySelector(".tasksContener")


ol = document.createElement("ol")
document.body.append(ol)
const task1 = async()=>{
    let taskArr = [task2(),task3(),task4(),task5(),task6(),task8(),task9()]
for(i=0; i<taskArr.length; i++){
    let li = document.createElement("li")
    ol.append(li)
    li.style.color="white"
    li.textContent =taskArr[i]
}
}
const asyncFun = async()=>{
    await task2()
    await task3()
    await task4()
    await task5()
    await task6()
    await task7()
    await task8()
    await task9()
    // task1()
}


const task2 = ()=>{
let arr = new Array;
     arr=[9, 1, 22, -5, 2].reduce((prev,curr)=>prev+curr,0);
    return arr
}

const task3 = ()=>{
 let arr = new Array;
 arr = [[2, [4, [44,5,6]], [4,5,6], [[2,4], 4], 5]].flat(3);
 return JSON.stringify(arr)
}

const task4 = ()=>{
    let arr = new Array;
    let first= ['b', 3, 4, 76, 'c'];
    let sec= ['a', 'b', 4, 76, 21, 'e'];
    arr = [...first, ...sec];
    let res = [];
    arr.forEach(el=>arr.indexOf(el)!==arr.lastIndexOf(el) ? res.push(el) : null);
   return res =JSON.stringify(Array.from(new Set(res)))
}

const task5 = ()=>{
    let first=['b', 3, 4, 76, 'c'];
    let sec=['a', 'b', 4, 76, 21, 'e'];
    let arr=[...first,...sec];
    let res=[];
    arr.forEach(el=>arr.indexOf(el)===arr.lastIndexOf(el) ? res.push(el) : null);
    return JSON.stringify(res);
}

const  task6 = ()=>{
    const arr1 = [1,2,3];
    const arr2 = [4,5,6,7];
    let newArry= new Array;
    for(let i=0;i<arr1.length;i++){
        newArry.push([arr1[i], arr2[i]])
       };
    return JSON.stringify(newArry);
    }

const task7 = () =>{
    return "working on it..."
}

const task8 = ()=>{
    let obj1 = { a: 'c', c: 'a', d:'m' };
    let obj2 = { c: 'b', a: 'c', d:'m' };
    let testKeysObj1 = Object.keys(obj1);
    let testKeysObj2 = Object.keys(obj2);
    let testValues1 = Object.values(obj1);
    let testValues2 = Object.values(obj2);
    if(testKeysObj1.length!==testKeysObj2.length){
       return false;
    };
      for(let i=0; i<testKeysObj1.length; i++){
          let testKey = testKeysObj1[i]
            if(!testKeysObj2.includes(testKey)){
            return false;
              };
          let testValues = testValues1[i]
           if(!testValues2.includes(testValues)){
             return  false;
           };
      }
     return true;
    }

const task9 = ()=>{
let arry = ['color',"size"]; 
let obj = { color: 'Blue', id: '22', size: 'xl' }; 
for(let i=0; i<arry.length;i++){
    let del = ''
    del = arry[i]
   delete obj[del]
  }
return JSON.stringify(obj)
};

// let arr1 = ['a', 'b', 'c', 'd']
// let obj1 = { a: { b: { c: { d: '23' } } } }
// const task7 = (obj1)=>{
//     let newArryFromObj = {}
//     for(const ob in obj1){
//     const t = task7(obj1[ob])
//         for(const deep in t){
//     newArryFromObj[deep] = t[deep]
//         }
//    }
//    return newArryFromObj
// }
// console.log(task7(obj1))



asyncFun()
let questions = new Array
let showAll = ()=>{
    let taskArr = [task2(),task3(),task4(),task5(),task6(),task7(),task8(),task9()]
    let x = ''
     for(let i=0,num=2;i<taskArr.length;i++,num++){
         x+=("TASK"+num+":"+taskArr[i]+"."+"\n\r")
         }
    return x  
}
    questions = [
        {
        id:"id-1",
        question:"Please write a function that shows the usage of closures",
        result:showAll(),
        answer:task1 
        },
        {
         id:"id-2",
         question:"Please write a function that returns a sum of array items example input [9, 1, 22, 0, 2]",
         result: task2(),
         answer:task2
        },
        {
        id:"id-3",
        question:"Please write a recursive function that flattens a list of items example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]",
        result:task3(),
        answer:task3
        },
        {
        id:"id-4",
        question:"Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter), example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']",
        result:task4(),
        answer:task4
        },
        {
        id:"id-5",
        question:"Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter) example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']",
        result:task5(),
        answer:task5
        },
        {
        id:"id-6",
        question:"Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped. example input [1,2,3], [4,5,6,7]",
        result:task6(),
        answer:task6
        },
        {
        id:"id-7",
        question:"Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined. example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }",
        result:task7(),
        answer:task7
        },
        {
        id:"id-8",
        question:"Please write compare function which compares 2 objects for equality. example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false",
        result:task8(),
        answer:task8
        },
        {
        id:"id-9",
        question:"Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list. example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }",
        result:task9(),
        answer:task9
        },
        {
        getValue: function(){
            return this.id, this.question, this.result, this.answer
        }
        }
        ]
        
let quest = document.createElement("h3")
let h3Ele =  document.createElement("code")
let comment = document.createElement('h3')
let answerComent = document.createElement("h2")
let code = document.createElement("code")
const showTasks = (e) =>{
    ele=e.target
    for(butt of buttons){
        if(ele){
            ele.classList.add("show")
            butt.classList.add('hide')
        }
        if(ele.textContent === "zamknij"){
            ele.classList.remove("show")
            butt.classList.remove("hide")
        }
     }
        let current = questions.filter(item=>item.id === ele.id)
            task.classList.toggle("show")
            task.append(quest, answerComent, code, comment, h3Ele)
            quest.textContent = current[0].question
            answerComent.textContent = "ANSWER (dynamic added from closures.js):"
            code.textContent = current[0].answer
            comment.textContent = "Result (dynamic added from closures.js):"
            h3Ele.textContent = current[0].result
        
        
    ele.value == ele.textContent ? ele.textContent = "zamknij" : ele.textContent = ele.value
}

buttonsContener.addEventListener("click", showTasks)
