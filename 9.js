function revrot(str, sz) {
    let u = '';
    
    let r = [];
    let b = [];
    for (let i = 0; i < str.length; i += sz) {
        u = str.slice(i, i + sz);
        b.push(u.split(' '))
    }

    b.map(e => {
        let a = e.join('')
        let f = 0;
        for (let j = 0; j < a.length; j++) {                  
                // console.log(a[j]);
                f += a[j] ** 3;
        }
        // console.log(e.join("").split("").reverse().join(""));
        
        


        
        if (f % 2 === 0) {
            r.push(e.join("").split("").reverse().join(""))
        } else {

            let dd = e.join("").split("").slice(1, sz)  + e.join("").split("").slice(0, 1);
            console.log(dd);
            // console.log(dd.split(' ').join(','));

             r.push(...dd)
            


            // r.push(dd.split(',').join(''))
            //            return e.slice(1)+u[0];
            
        }
        

console.log(r);
        
    })

    console.log(b);
    














        // if (u.length >= sz) {
        //     for (let j = 0; j < u.length; j++) {
        //         // console.log(u[j]);
        //         f += u[j] ** 3;
        //         // console.log(f);
        //     }
        //     // console.log(f);
        //         // console.log(f % 2);
        //         if (f % 2 === 0) {
        //             r.push(u.split("").reverse().join(""));
        //         } else {
        //             r.push(u.slice(1, sz) + u[0])
        //             //    return u.slice(1)+u[0];
                
        //         }
        //     }
           
            
            // r.push(u)
            // } else {
            //     r.push("")
            // }
        // }

    

    
     console.log(b);
}


        // console.log(revrot("1234", 0))   // , "")
        // console.log(revrot("", 0))   //, "")
// console.log(revrot("1234", 5))   //, "")
        console.log(revrot("123456987654", 6));    //"234561876549"
        







// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) 
// of size sz(ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
//  otherwise rotate it to the left by one position.Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"