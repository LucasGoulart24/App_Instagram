import { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Icones from '@expo/vector-icons/Feather';
import Postagem from './src/Postagem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          titulo: 'Bruna Carvalho',
          fotoPerfil: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-mulher-bonita-com-vestido-vermelho_23-2149553603.jpg',
          imagem: 'https://blog4.mfrural.com.br/wp-content/uploads/2022/07/rosas-caracteristicas.jpg',
          nome: 'Bruna Carvalho'
        },
        {
          id: '2',
          titulo: 'Daniel Sampaio',
          fotoPerfil: 'https://www.undb.edu.br/hubfs/programador2.jpg',
          imagem: 'https://cursoprofi.com.br/wp-content/uploads/2024/04/20160510115025610.jpg',
          nome: 'Daniel Sampaio'
        },
        {
          id: '3',
          titulo: 'Carolina Mendonça',
          fotoPerfil: 'https://img.freepik.com/fotos-gratis/mulher-de-tiro-medio-trabalhando-como-medica_23-2150379198.jpg',
          imagem: 'https://cdn.prod.website-files.com/662966ec5822f0e07e040c6c/66314c5da26268728e2f7aa9_medicina.jpg',
          nome: 'Carolina Mendonça'
        },
      ]
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.titulo}>Instagram</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10 }}>
            <Icones name='heart' size={30}/>
            <Icones name='message-square' size={30}/>
          </View>
        </View>
        <View style={styles.banner2}>
          <Image source={require('./Img/imagem.jpg')} style={styles.foto}/>
          <Image source={require('./Img/imagem2.jpg')} style={styles.foto}/>
          <Image source={require('./Img/imagem3.jpg')} style={styles.foto}/>
          <Image source={require('./Img/imagem4.jpg')} style={styles.foto}/>
          <Image source={require('./Img/imagem5.jpg')} style={styles.foto}/>
        </View>
        <FlatList 
        showsVerticalScrollIndicator={true}
        data={this.state.feed}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <Postagem data={item}></Postagem>}>
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  banner2: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  foto: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1
  }
});

export default App
