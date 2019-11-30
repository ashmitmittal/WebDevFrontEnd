for(let i = 0;i<5;i++)
{
    setTimeout(function(){
        console.log(i);
    },1000)
}

//IN THIS CASE IF WE USE VAR THEN THE OUTPUT WILL BE 5 BCZ WHEN SETTIMEOUT RUN THE VALUE OF I WILL BE 5
// BUT WHEN WE USE LET THE OUTPUT WILL BE 0 1 2 3 4 5