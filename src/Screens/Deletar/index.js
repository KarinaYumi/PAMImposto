import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

export default function App() {

  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.titulo}> Deletar</Text>
            <Text style={styles.subtitulo}>
            Dados
            </Text>
        </View>

        <View style={styles.cardForm}>
            <Text>
            Dados
            </Text>
        </View>
        <Image style={styles.img} source = {require('../../img/iconePAM.png')}/>
  </View>
   );
  };
