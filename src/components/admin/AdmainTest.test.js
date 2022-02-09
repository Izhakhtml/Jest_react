import {Text,GoodMorning,NameAndAge,TagH1,Name,GetEmail} from '../TestText'
// exe 2 TEXT
it("return text",()=>{
    const result = Text();
    expect(result).toEqual("hello world") 
})

/// exe 4 GOOD MORNING
describe("Good Morning test",()=>{
it("return good morning izhak",()=>{
    const result = GoodMorning("izhak");
    expect(result).toEqual("Good Morning izhak")
})
it("return good morning undefined",()=>{
    const result = GoodMorning("shay");
    expect(result).toEqual(`Good Morning shay`)
})
})

/// exe 5 NameAndAge
it("return name and age",()=>{
    const result = NameAndAge("shimon",22);
    expect(result).toEqual(`Good Morning shimon Your age 22`);
})

/// exe 6 TagH1
it("return tag",()=>{
    const result = TagH1()
    expect(result).toEqual(<h1>good night</h1>)
})

/// Name try
it("return value",()=>{
    const result = Name(undefined);
    expect(result).toBeUndefined();
})

/// exe 7 GetEmail 
describe("Get Email test",()=>{
it("return email",()=>{
    const result = GetEmail("izhak@gmail.com");
    expect(result).toEqual(<a href="izhak@gmail.com">izhak@gmail.com</a>)
})
it("return if value equal undefined",()=>{
    const result = GetEmail(true);
    expect(result).toBeTruthy();
})
})