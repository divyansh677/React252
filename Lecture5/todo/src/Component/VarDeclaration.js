function VarDeclaration()
{
    function handleChange()
    {
        var s = {
            backgroundColor:"green",
            color:"yellow",
        }
        return s;
    }
    var name = "Divyansh Masand";
    var style = {
        backgroundColor: "Red",
        padding: "2px",
        color :"white",
    }

    
    return <h1 style={{...style}} onClick={handleChange}>{name}</h1>
}

export default VarDeclaration;