import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15
  },
  contenedorTexto: {
    flex: 1
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subTitulo: {
    fontSize: 14,
    color: '#666'
  },
  contenedorBotones: {
    flexDirection: 'row'
  },
  boton: {
    marginLeft: 10
  }
});