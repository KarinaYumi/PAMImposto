import React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import Home from './stack'
import Atualizar from '../Screens/Atualizar'
import Historico from "../Screens/Historico";
import Deletar from "../Screens/Deletar"

export default function Router(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator>

            <Drawer.Screen name = 'Início' component ={Home}/>
            <Drawer.Screen name = 'Historico' component ={Historico}/>
            <Drawer.Screen name = 'Atualizar Dados' component ={Atualizar}/>
            <Drawer.Screen name = 'Deletar Dados' component ={Deletar}/>

        </Drawer.Navigator>
    )
}