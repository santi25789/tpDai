import React, { useState } from 'react';
import { estilos } from '../estilos/EstilosPantallaBusqueda';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useBusqueda } from '../hooks/useBusqueda';
import { useMenu } from '../contextos/ContextoMenu';
import BarraBusqueda from '../componentes/BarraBusqueda';
import TarjetaPlato from '../componentes/TarjetaPlato';

const PantallaBusqueda = () => {
  const { 
    resultadosBusqueda, 
    cargando, 
    buscarPlatos 
  } = useBusqueda();
  const { agregarPlatoAlMenu } = useMenu();
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const manejarBusqueda = (texto) => {
    setTerminoBusqueda(texto);
    buscarPlatos(texto);
  };

  const handleAgregarPlato = (plato) => {
    const agregado = agregarPlatoAlMenu({
      id: plato.id,
      titulo: plato.titulo,
      imagen: plato.imagen,
      precio: plato.precio,
      puntuacionSalud: plato.puntuacionSalud,
      vegano: plato.vegano
    });

    if (agregado) {
      // Opcional: mostrar mensaje de éxito
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Buscar Platos</Text>
      
      <BarraBusqueda
        valor={terminoBusqueda}
        onCambio={manejarBusqueda}
        placeholder="Buscar recetas..."
      />

      {cargando && <Text>Cargando...</Text>}

      {resultadosBusqueda.length === 0 && terminoBusqueda.length >= 3 && (
        <Text style={estilos.textoVacio}>No se encontraron resultados</Text>
      )}

      <FlatList
        data={resultadosBusqueda}
        keyExtractor={(plato) => plato.id.toString()}
        renderItem={({ item }) => (
          <TarjetaPlato 
            plato={item}
            onPress={() => {/* Ir a detalle */}}
            onAgregar={() => handleAgregarPlato(item)}
          />
        )}
      />
    </View>
  );
};
export default PantallaBusqueda;