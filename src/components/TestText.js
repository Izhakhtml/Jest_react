export const Text =()=>{
return "hello world"    
}
export const GoodMorning=(name)=>{
return `Good Morning ${name}`  
}
export const Name=(name)=>{
return name
}
export const NameAndAge=(name,age)=>{
if(age > 18)return `Good Morning ${name} Your age ${age}`;
return false
}
export const TagH1=()=>{
return <h1>good night</h1>    
}
export const GetEmail=(email)=>{
return (<a href={email}>{email}</a>)
}