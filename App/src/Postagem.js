import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icone from '@expo/vector-icons/Feather';

class Postagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            likesCount: 1,
        };
    }

    // Função para altera estado "Like"
    handleLike = () => {
        this.setState(prevState => ({
            liked: !prevState.liked,
            likesCount: prevState.liked ? prevState.likesCount - 1 : prevState.likesCount + 1
        }));
    }
    render() {
        const { liked, likesCount } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={{ margin: 5, alignItems: 'center', flexDirection: 'row', gap: 10}}>
                        <Image source={{uri: this.props.data.fotoPerfil}} style={styles.foto}/>
                        <Text style={styles.titulo}>{this.props.data.titulo}</Text>
                    </View>
                    <Image source={{uri: this.props.data.imagem}} style={styles.imagem}/>
                    <View style={{ margin: 5 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10}}>
                            <TouchableOpacity onPress={this.handleLike}>
                                <Icone 
                                name={liked ? 'heart' : 'heart'}
                                size={30}
                                color={liked ? 'red' : 'black'}/>
                            </TouchableOpacity>
                            <Icone name="message-square" size={30}/>
                            <Icone name="send" size={30}/>
                        </View>
                        <Text style={styles.texto}>{likesCount} Likes</Text>
                        <Text style={styles.texto}>{this.props.data.nome}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: '100%',
        margin: 10
    },
    foto: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#EEE',
        borderWidth: 1
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imagem: {
        width: '100%',
        height: 400
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Postagem;