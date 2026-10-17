    function pattern7(n) {
        for(let i=0;i<n;i++)
        {
            let star="";
            for(let j=0;j<n-i;j++)
            {
                star+=" ";

            }
            for(let k=0;k<(i*2)+1;k++)
            {
                star+="*";
            }
            for(let j=0;j<n-i;j++)
            {
                star+=" ";

            }
            console.log(star);
        }

    }
    pattern7(3);