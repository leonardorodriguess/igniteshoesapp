import { OneSignal } from "react-native-onesignal";


export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Leonardo",
    user_email: "leordr.dev@gmail.com"
  });
}