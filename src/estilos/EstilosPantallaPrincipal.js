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
  resumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  textoVacio: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#888'
  }
});