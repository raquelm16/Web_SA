import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export function ScreenCodPassword() {

    const navigation = useNavigation();

    const [Senha, setSenha] = useState('');

    function ScreenNewPassword() {
        navigation.navigate('ScreenNewPassword')
    }

    function ScreenLogin() {
        navigation.navigate('ScreenLogin')
    }

    return (

        <>
            <View style={styles.container}>
                <Text style={styles.mensagem}>Digite o código que {'\n'}enviamos para você!</Text>


                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    placeholder="Código"
                    secureTextEntry={false}
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={ScreenNewPassword}
                >
                    <Text style={styles.textBotao}>Próximo</Text>
                </TouchableOpacity>

                <Text
                    style={styles.cancel}
                    onPress={ScreenLogin}
                >Cancelar</Text>
            </View>

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    perfil: {
        textAlign: 'center',
        fontWeight: 'bold'
    },

    mensagem: {
        fontSize: 18,
        color: '#939e97',
        marginTop: '20%',
        textAlign: 'center'
    },

    input: {
        marginTop: '15%',
        padding: '4%',
        width: 350,
        backgroundColor: '#ebebeb',
        color: '#7d7d7d',
        fontSize: 16,
        borderRadius: 10,
    },

    botao: {
        marginTop: 80,
        marginBottom: 70,
        width: 230,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00589F',
        borderRadius: 150,
    },

    textBotao: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },

    cancel: {
        fontSize: 17,
        color: '#00589F',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

})
