function Members(){
    const Groupmembers=['abebe','kebede','lema ','abebe','lema','kebede','abebe',]
    return(
        <div>
            <h1>Group members</h1>
            <ul>
                {Groupmembers.map((member ,index)=>(
                    <li id="demo" Key={index}>{member}</li>
                ))}
            </ul>
        </div>
    )
}
export default Members;