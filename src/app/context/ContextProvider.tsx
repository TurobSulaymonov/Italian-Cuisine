import { ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../hooks/useGlobal";

const ContextProvider: React.FC<{children: ReactNode}> = ( {children}) => {
   const cookies = new Cookies();
   if(!cookies .get("accessToken")) localStorage.removeItem("memberData");
 
   const [authMember, setAuthMember] = useState<Member | null>(
    localStorage.getItem("memberData")
    ? JSON.parse(localStorage.getItem("memberData") as string)
    : null
   );
    
      const [orderBuilder, setOrderBuilder] = useState<Date>(new Date());

   console.log("===Verify===")
   return (
    <GlobalContext.Provider value={{authMember, setAuthMember, orderBuilder, setOrderBuilder}}>
      {children}
    </GlobalContext.Provider>
   );
};

export default ContextProvider;