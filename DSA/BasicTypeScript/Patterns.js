//pattern1 
function num(number) {
    for (let i = 0; i < number; i++) {
        let star = "";
        for (let j = 0; j < number; j++) {
            star += "*";
        }
        console.log(star);
    }
}
num(5);
//pattern2
function num(number) {
    for (let i = 0; i < number; i++) {
        let star = "";
        for (let j = 0; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }
}
num(5);

// pattern3
function num(number) {
    for (let i = 1; i <= number; i++) {
        let star = "";
        for (let j = 1; j<= i; j++) {
            star = star + i;
        }
        console.log(star);
    }
}
num(5);

// pattern4
function num(number) {
    for (let i = 1; i <= number; i++) {
        let star = "";
        for (let j = 1; j <=i; j++) {
            star = star + i; 
        }
        console.log(star);
    }      
} 
    num(6);


    // pattern5
        let num=5;
    for(let i=0;i<num;i++){
    let star=""
    for(let j=0;j<num-i+1;j++){
        star+="*";   
}
console.log(star);
    }


    // pattern6

        function pattern7(n) 
    {
        for(let i=0;i<n;i++)
        {
            let star="";
            for(let j=0;j<n-i-1;j++)
            {
                star +=" ";
            }
            for(let k=0;k<(i*2)+1;k++)
            {
                star+="*";
            }
            for(let j=0;j<n-i-1;j++)
            {
                star +=" ";
            }
            console.log(star);
        }
    }
pattern7(5);






