
import { ref, reactive } from "vue";

export function onLogin() {
  const obj = reactive({
    username: "",
    password: "",
  });

  function sendData() {
    try{

      // if (obj.username.length!=0 && obj.password.length!=0) {
        
        // const res = await fetch("https://dummyjson.com/auth/login", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(loginData),
        // });
        // const data = await res.json();
        // localStorage.setItem("token", data.token);

        // router.push({ name: "admin-main" });


        obj.username = "";
        obj.password = "";
      // }
      
    } catch(error) {
      console.log(error);
    }
  }
  return {
    obj,
    sendData,
  }
}