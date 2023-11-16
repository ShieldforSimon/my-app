import react, { useEffect, useState } from "react";

// const request=new Request("https://google.com", {
//   method: "GET",
//   headers:new Headers{
//     "Content-Type": "application/json" }
// })
export function useRequestData() {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(async () => {
      setLoading(true);
      try {
        let response = await fetch("www.baidu.com");
        let res = await response.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        console.log("结束");
      }
    }, 5000);
  }, []);
  return loading;
}
