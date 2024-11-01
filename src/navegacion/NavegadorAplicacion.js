import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaPrincipal from '../pantallas/PantallaPrincipal';
import PantallaBusqueda from '../pantallas/PantallaBusqueda';
import PantallaDetallePlato from '../pantallas/PantallaDetallePlato';
import { ProovedorMenu } from '../contextos/ContextoMenu';

const Pila = createStackNavigator();

const NavegadorAplicacion = () => {
  return (
    <ProovedorMenu>
      <NavigationContainer>
        <Pila.Navigator initialRouteName="PantallaPrincipal">
          <Pila.Screen 
            name="PantallaPrincipal" 
            component={PantallaPrincipal}
            options={{ title: 'Menú del Hotel' }}
          />
          <Pila.Screen 
            name="PantallaBusqueda" 
            component={PantallaBusqueda}
            options={{ title: 'Buscar Platos' }}
          />
          <Pila.Screen 
            name="PantallaDetallePlato" 
            component={PantallaDetallePlato}
            options={{ title: 'Detalles del Plato' }}
          />
        </Pila.Navigator>
      </NavigationContainer>
    </ProovedorMenu>
  );
};

export default NavegadorAplicacion;