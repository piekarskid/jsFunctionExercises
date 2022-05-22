// 1. Please write a function that shows the usage of closures
let ol = document.createElement("ol")
document.body.append(ol)
const answer = async()=>{
    let arr = [answer2(),answer3(),answer4(),answer5(),answer6(),answer7(),answer8(),answer9()]
for(i=0; i<arr.length; i++){
    let li = document.createElement("li")
    ol.append(li)
    li.textContent =arr[i]
}
}
const mainFun = async()=>{
    await answer2()
    await answer3()
    await answer4()
    await answer5()
    await answer6()
    await answer7()
    await answer8()
    await answer9()
    answer()
}

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34
let answer2 = ()=>{
    arr = new Array 
    arr=[9, 1, 22, -5, 2].reduce((prev,curr)=>prev+curr,0)
   return arr
}
// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
const answer3 = ()=>{
    arr = new Array
    arr = [[2, [4, [44,5,6]], [4,5,6], [[2,4], 4], 5]].flat(3)
    return JSON.stringify(arr)
}
// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]
const answer4 = ()=>{
    let arr = new Array;
    first= ['b', 3, 4, 76, 'c'];
    sec= ['a', 'b', 4, 76, 21, 'e'];
    arr = [...first, ...sec];
    res = [];
    arr.forEach(el=>arr.indexOf(el)!==arr.lastIndexOf(el) ? res.push(el) : null);
   return res = JSON.stringify(Array.from(new Set(res)))
}
// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']
const answer5 = ()=>{
    let first=['b', 3, 4, 76, 'c']
    let sec=['a', 'b', 4, 76, 21, 'e']
    let arr=[...first,...sec]
    let res=[]
    arr.forEach(el=>arr.indexOf(el)===arr.lastIndexOf(el) ? res.push(el) : null)
    return JSON.stringify(res)
}

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]
const  answer6 = ()=>{
  const arr1 = [1,2,3];
  const arr2 = [4,5,6,7];
  let newArry= new Array;
  for(let i=0;i<arr1.length;i++){
      newArry.push([arr1[i], arr2[i]])
     };
  return JSON.stringify(newArry);
  }

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'
const answer7 = () =>{
  return "working on it..."
}

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false
const answer8 = ()=>{
    let obj1 = { a: 'c', c: 'a', d:'m' }
    let obj2 = { c: 'b', a: 'c', d:'m' }
    let testKeysObj1 = Object.keys(obj1)
    let testKeysObj2 = Object.keys(obj2)
    let testValues1 = Object.values(obj1)
    let testValues2 = Object.values(obj2)
    if(testKeysObj1.length!==testKeysObj2.length){
       return false;
    }
      for(let i=0; i<testKeysObj1.length; i++){
          let testKey = testKeysObj1[i]
            if(!testKeysObj2.includes(testKey)){
            return false;
              }
          let testValues = testValues1[i]
           if(!testValues2.includes(testValues)){
             return  false;
           }
      }
     return true;
    }

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }
const answer9 = ()=>{
    let arry = ['color',"size"]; 
    let obj = { color: 'Blue', id: '22', size: 'xl' }; 
    for(let i=0; i<arry.length;i++){
        let del = ''
        del = arry[i]
       delete obj[del]
      }
    return JSON.stringify(obj)
    };
    mainFun()

