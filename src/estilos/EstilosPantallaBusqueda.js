import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  textoVacio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888'
  },
  contenedorCarga: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});