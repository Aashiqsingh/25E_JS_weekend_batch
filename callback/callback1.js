function demo(){
    console.log("demo function call....");
    
}



function test(x){
    // console.log(x);
    x()
    
}

// test(2)
// test("ram")
// test(true);
// test(12.44)

test(demo)