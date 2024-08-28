import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import HobbieseFilmes from "../screens/HobbieseFilmes";
import Filmes from "../screens/Filmes";
import Hobies from "../screens/Hobies";

const Stack = createNativeStackNavigator();
const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HobbieseFilmes" component={HobbieseFilmes} />
      <Stack.Screen name="Filmes" component={Filmes} />
      <Stack.Screen name="Hobies" component={Hobies} />

 
    </Stack.Navigator>
  );
};

export default StackRoutes;

