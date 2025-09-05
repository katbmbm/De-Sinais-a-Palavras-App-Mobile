import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      /* Container */
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Image style={styles.imagemLogo} source={require('./assets/logo.jpg')}/>
            
          {/* Text Box Header */}
          <View style={styles.textBoxHeader}>
            <Text style={styles.textHeader}>DE SINAIS A PALAVRAS</Text>
          </View>

        </View>

        {/* Text Box Body*/}
        <View style={styles.textBoxBody}>

          {/* Text */}
          <Text style={styles.textFirstFrase}>{'\t'}Como usar o aplicativo:</Text>
          <Text style={styles.textSecondFrase}>{'\t'}Em uma boa iluminação, aponte a câmera para as mãos e faça os sinais desejados.</Text>
          <Text style={styles.textSecondFrase}>{'\t'}As traduções aparecerão abaixo da imagem.</Text>
        

        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.pillButton} onPress={() => console.log('Button pressed!')}>
          <Text style={styles.buttonText}>INICIAR</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'top',
    justifyContent: 'top',
    paddingTop: 40,
    paddingBottom:90,
    borderColor: '#e9e9e9ff',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  header: {
    backgroundColor: '#ffffffff',
    height: 90,
    top: 11,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  textBoxHeader: {
    backgroundColor: '#034D92',
    margin: 10,
    marginTop: 15,
    height: 55,
    left: '16.5%',
    right: 0,
    position: 'absolute',
    borderRadius: 10,
  },
  textHeader: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
    paddingTop: 16,
    fontWeight: 'bold',
    letterSpacing: 0.9,
  },
  imagemLogo: {
    width: 84,
    height: 84,
    borderRadius: 42,
    left: 11,
    right: 0,
    position: 'absolute',
    zIndex: 1000,
  },
  textBoxBody: {
    top: 220,
    left: 20,
    right: 20,
    position: 'absolute',
    height: 600,
  },
  textFirstFrase: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: '3%',
    paddingBottom: 12
  },
  textSecondFrase: {
    paddingLeft: '3%',
    paddingRight: '5%',
    fontSize: 18,
    paddingBottom: 8,
    textAlign: 'justify',
    lineHeight: 25
  },
  pillButton: {
    backgroundColor: '#000000', // Black color
    borderRadius: 21, // Half of the button's height to create pill shape
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 42,
    textAlign: 'center',
    bottom: 120,
    alignSelf: 'center',
    position: 'absolute',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
