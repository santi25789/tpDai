import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useMenu } from '../contextos/ContextoMenu';
import TarjetaPlato from '../componentes/TarjetaPlato';
import BotonAccion from '../componentes/BotonAccion';
import { useNavigation } from '@react-navigation/native';
import { estilos } from '../estilos/EstilosPantallaPrincipal';

const PantallaPrincipal = () => {
  const { 
    platosMenu, 
    precioTotal, 
    puntuacionSaludPromedio,
    eliminarPlatoDelMenu 
  } = useMenu();
  const navegacion = useNavigation();

  const irAPantallaBusqueda = () => {
    navegacion.navigate('PantallaBusqueda');
  };

  const irAPantallaDetalle = (plato) => {
    navegacion.navigate('PantallaDetallePlato', { plato });
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Menú del Hotel</Text>
      
      {/* Resumen del Menú */}
      <View style={estilos.resumen}>
        <Text>Precio Total: ${precioTotal.toFixed(2)}</Text>
        <Text>Health Score Promedio: {puntuacionSaludPromedio.toFixed(2)}</Text>
      </View>

      {/* Lista de Platos */}
      <FlatList
        data={platosMenu}
        keyExtractor={(plato) => plato.id.toString()}
        renderItem={({ item }) => (
          <TarjetaPlato 
            plato={item}
            onPress={() => irAPantallaDetalle(item)}
            onEliminar={() => eliminarPlatoDelMenu(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={estilos.textoVacio}>
            No hay platos en el menú. ¡Agrega algunos!
          </Text>
        }
      />

      {/* Botón para Buscar Platos */}
      <BotonAccion 
        titulo="Buscar Platos" 
        onPress={irAPantallaBusqueda}
      />
    </View>
  );
};

export default PantallaPrincipal;