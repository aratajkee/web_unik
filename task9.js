let cat = {
    name:"Debil",
    age:5,
}
let gun = {
    brand:"colt",
    caliber:5.52,
}
let building = {
    height:330,
    apartments:120,
}
let new_obj = Object();
Object.assign(new_obj, cat)
Object.assign(new_obj, gun)
Object.assign(new_obj, building)
for (var key in new_obj) {
    console.log(key)
}
