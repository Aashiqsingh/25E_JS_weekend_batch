let languages = ["hindi","english","bengali","marathi","gujarati","french","tamil"]

//  map : it will return new array with same length

// let ans = languages.map((lang)=>{
//     return lang.toUpperCase()
// })

// console.log(ans);

// let ans = languages.map((lang)=>{
//     return lang.length > 5
// })

// console.log(ans);


// filter : it will return new array with modified data

let ans =languages.filter((lang)=>{
    return lang.length > 5
})

console.log(ans);
