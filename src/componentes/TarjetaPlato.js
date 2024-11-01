import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { estilos } from '../estilos/EstilosTarjetaPlato';
import Icon from 'react-native-vector-icons/Ionicons';

const TarjetaPlato = ({ plato, onPress, onAgregar, onEliminar }) => {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress}>
      <Image 
        source={{ uri: plato.imagen }} 
        style={estilos.imagen} 
      />
      <View style={estilos.contenedorTexto}>
        <Text style={estilos.titulo}>{plato.titulo}</Text>
        <Text style={estilos.subTitulo}>
          ${plato.precio} | Health Score: {plato.puntuacionSalud}
        </Text>
        <View style={estilos.contenedorBotones}>
          {onAgregar && (
            <TouchableOpacity onPress={onAgregar} style={estilos.boton}>
              <Icon name="add-circle" size={24} color="green" />
            </TouchableOpacity>
          )}
          {onEliminar && (
            <TouchableOpacity onPress={onEliminar} style={estilos.boton}>
              <Icon name="trash" size={24} color="red" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TarjetaPlato;