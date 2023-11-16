// 映射方式:使用一个对象把角色和组件一一对应,根据角色key获取角色value
const Admin=()=>{return <div>I am admin</div>}
const User=()=>{return <div>I am a user</div>}
const Default=()=>{return <div> I am default</div>}

    // 定义对应关系
    const ROLES={
        ADMIN:Admin,
        USER:User,
    }
function RenderRole({role}){

    const CurrentCom=ROLES[role]??Default;
    return <CurrentCom/>
}
function App(){
    return (
        <>
        <RenderRole/>
        <RenderRole role={ADMIN}/>
        <RenderRole role={USER}/>
        </>
    )
}