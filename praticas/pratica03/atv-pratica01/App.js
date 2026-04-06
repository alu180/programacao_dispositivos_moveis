import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DespesasRecentes from './screens/DespesasRecentes';
import TodasDespesas from './screens/TodasDespesas';
import GerenciarDespesa from './screens/GerenciarDespesa';
import { Ionicons } from '@expo/vector-icons';
import{useNavigation} from '@react-navigation/native';
import IconButton from './components/IconButton';


export default function App() {

  const tab = createBottomTabNavigator();

  function BotoonTabScreen(){
    const navigation = useNavigation();
    
    return(
      <tab.Navigator
      screenOptions={( {navigation} ) => ({ headerRight: ()=><IconButton icon="add" size={24} onPress={() => {
        navigation.navigate('Gerenciar Despesa')
      }} /> }) }>

        <tab.Screen name="DespesasRecentes" component={DespesasRecentes} 
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="hourglass" 
          size={size} color={color} />),
          tabBarLabel: 'Recentes',
          title: 'Despesas Recentes',
          tabBarLabelStyle: { fontSize: 12 }}}
          />
        <tab.Screen name="TodasDespesas" component={TodasDespesas} 
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="wallet-outline" 
          size={size} color={color} />),
          tabBarLabel: 'Todas',
          title: 'Todas as Despesas',
          tabBarLabelStyle: { fontSize: 12 }}}
          />

      </tab.Navigator>
    );
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Despesas" component={BotoonTabScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="Gerenciar Despesa" component={GerenciarDespesa} />

      </Stack.Navigator>
    </NavigationContainer>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
