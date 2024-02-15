
import { useEffect, useState } from "react";


function useOnlineStatus() {
  const _Window =  window 
  const [online, setOnline] = useState(true);



  useEffect(() => {
    if ( _Window?.navigator?.onLine !== undefined) {
      const onlineHandler = () => alert("You are online");
      const offlineHandler = () => alert("You are offline");

      window.addEventListener("online", onlineHandler);
      window.addEventListener("offline", offlineHandler);

      setOnline(_Window.navigator.onLine);

      return () => {
        window.removeEventListener("online", onlineHandler);
        window.removeEventListener("offline", offlineHandler);
      };
    }
  }, [_Window]);

  return online;
}


export default useOnlineStatus;
