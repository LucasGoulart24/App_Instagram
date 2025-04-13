import React, { Component } from 'react';
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
          titulo: 'Julia Oliveira',
          fotoPerfil: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-mulher-bonita-com-vestido-vermelho_23-2149553603.jpg',
          imagem: 'https://blog4.mfrural.com.br/wp-content/uploads/2022/07/rosas-caracteristicas.jpg',
          nome: 'Julia Oliveira'
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
          <Image source={require('./Img/imagem.jpg')} style={styles.foto}/>
          <Image source={require('./Img/imagem.jpg')} style={styles.foto}/>
          <Image source={require('./Img/imagem.jpg')} style={styles.foto}/>
          <Image source={require('./Img/imagem.jpg')} style={styles.foto}/>
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
