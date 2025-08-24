let languages = ["hindi","english","bengali","marathi","gujarati","french","tamil"]


// let ans = languages.filter((lang)=>{
//     return lang != "english"
// })

// console.log(ans);


// const deleteLang = (langName)=>{

//     let ans = languages.filter((lang)=>{
//         return lang != langName
//     })

//     return ans;
// }

// let x = deleteLang("marathi")
// console.log(x);



// const deleteLang = (langName)=>{

//     return languages.filter((lang)=>{
//         return lang != langName
//     })    
// }

// let x = deleteLang("tamil")
// console.log(x);



// const deleteLang = (langName)=>{

//     return languages.filter((lang)=> lang != langName)    
// }

// let x = deleteLang("french")
// console.log(x);


const deleteLang = (langName)=> languages.filter((lang)=> lang != langName)    
let x = deleteLang("bengali")
console.log(x);
