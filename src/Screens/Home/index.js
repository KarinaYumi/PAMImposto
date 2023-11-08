import React from 'react';
import { View, Text, SafeAreaView, TextInput, Button, Image} from 'react-native';
import styles from './style';

export default function App() {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
     <View style={styles.card}>
     <Text style={styles.titulo}>TAX PRIME</Text>
     </View>
     <View style={styles.cardForm}>
       <Text style={styles.subtitulo}>Preencha o formulário abaixo para ver seu imposto de renda</Text>
     <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Digite seu Nome"

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Digite seu rendimento"
        keyboardType="numeric"

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Dgite seu CPF"
        keyboardType="numeric"
      />
    </SafeAreaView>
    <Button style={styles.botao}
        title="Enviar dados"
        color="#0B2447"
      />
    </View>
  </View>
   );
  };

