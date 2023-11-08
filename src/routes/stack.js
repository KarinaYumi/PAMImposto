import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Screens/Home';
import Historico from '../Screens/Historico';

export default function Routes(){
    
    const stack = createStackNavigator();

    return(
        
            <stack.Navigator>

                <stack.Screen name ='Início' component = {Home} options ={
                   {
                            headerShown:false
                    }
                } />
                <stack.Screen name ='Historico' component = {Home}/>
                <stack.Screen name ='Atualizar Dados' component = {Home}/>

            </stack.Navigator>
    );
}