import { userAxiosInstence } from "../utils/axious-utils";

const userLogin=(value)=>{
   return userAxiosInstence.post("/login",value,{
    withCredentials:true
})}

const userSignup=(value)=>{
    return userAxiosInstence.post("/register",value,{
        withCredentials:true
    })
}
const userSignupWithGoogle=(value)=>{
    return userAxiosInstence.post("/googleRegister",value,{
        withCredentials:true
    })
}
const userLoginWithGoogle=(value)=>{
    return userAxiosInstence.post("/googlelogin",value,{
        withCredentials:true
    })
}

const isUserAuth=()=>{
    return userAxiosInstence.get("/userAuth",
   { withCredentials:true});
}
const userGetAllPost=()=>{
    return userAxiosInstence.get("getallpost",{withCredentials:true})
}
const userGetCityDetails=()=>{
    return userAxiosInstence.get("/citydetails",{withCredentials:true})
}
const userGetSkillsData=()=>{
    return userAxiosInstence.get("/skilldata",{withCredentials:true})
}


export{
    userLogin,
    isUserAuth,
    userSignup,
    userSignupWithGoogle,
    userLoginWithGoogle,
    userGetAllPost,
    userGetCityDetails,
    userGetSkillsData
}