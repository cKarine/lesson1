import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserProvider } from "./context/user-context";
import TabNav from "./navigation/TabNav";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </UserProvider>
  );
}
