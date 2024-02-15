import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import globalSlice from "./global.slice";
import userSlice from "./userSlice";

const userSlicePersistConfig = {
  key: "userSlice",
  storage
  // transforms: [
  //   encryptTransform({
  //     secretKey: "@AparTure@2050*",
  //     onError(error) {
  //       // Handle the error.
  //       console.log("ERROR IN ENCRYPTION", error);
  //     }
  //   })
  // ]
};



const globalSlicePersistConfig = {
  key: "globalSlice",
  storage
  // transforms: [
  //   encryptTransform({
  //     secretKey: "@AparTure@2050*",
  //     onError(error) {
  //       // Handle the error.
  //       console.log("ERROR IN ENCRYPTION", error);
  //     }
  //   })
  // ]
};

const rootReducer = {
  userSlice: userSlice,
  globalSlice: globalSlice,
};

export default rootReducer;
