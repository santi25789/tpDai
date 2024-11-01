import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  contenedorCarga: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagen: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  },
  contenedorTexto: {
    padding: 16
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  informacionAdicional: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8
  }
});