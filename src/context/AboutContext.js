import { createContext } from "react";

export const AboutContext = createContext();
function AboutContextProvider({children}){
const about= {
    name:"abu abdulrahaman",
    hobbies:["listening to music", "reading"],
    bio:"i am a passionate young man who desires commuunity growth"
}
return(
    <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
)
}

export default AboutContextProvider