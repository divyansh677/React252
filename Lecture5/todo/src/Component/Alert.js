export function Alert()
{
    function alert()
    {
        window.alert("SUUUUS YOU CLICKED Me"); //to avoid shadowing 
        // If i will not use window.alert then it wil have shadowing effect and alert function will be callled infinte time // 
    }

    return (<button onClick={alert}> Alert  Me</button>)
}



// Function name and the file name should be same

