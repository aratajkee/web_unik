function copyArr(old_array){
    const new_arr = old_array;
    for (let i = 1; i < new_arr.length; i++) {

        new_arr[i] = new_arr[i-1] * i;
    }
    return new_arr
}

const new_arr = copyArr([1,0,0,0,0,0])
console.log(new_arr)