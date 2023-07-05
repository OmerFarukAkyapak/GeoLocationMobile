import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StatusBar, Image } from 'react-native'
import axios from 'axios';
import styles from './Login.style'
import Button from '../../components/Button'
import SignInput from '../../components/SignInput'



const Login = ({ navigation }) => {

    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const fetchUserData = async () => {
        //console.log(email, password)
        await axios({
            method: 'post',
            url: "http://10.0.2.2:3031/authenticate",
            data: { email: email, password: password },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.data.token ? (navigation.navigate('Home'), setToken(response.data.token), console.log(response.data.token))
                : console.log('token yok')

        }
        ).catch((error) => {
            console.log(error)
        })



    }

    return (
        <View style={styles.conteiner} >
            <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
            <View style={styles.header_container}>
                <Image style={styles.header_image} source={require('../../assets/images/login.png')} />
                <Text style={styles.header_label}> Tedarikçi - Geo FingerPrint </Text>
            </View>
            <View style={styles.body_container}>
                <Text style={styles.bodyheader_label}> Hesabınıza Giriş Yapınız </Text>
                <SignInput
                    label="Email"
                    placeHolder="Email adresinizi giriniz ..."
                    onChangeText={(e) => { setEmail(e) }}
                />
                <SignInput label="Şifre"
                    placeHolder="Şifrenizi giriniz ..."
                    secureTextEntry={true}
                    onChangeText={(e) => { setPassword(e) }
                    }
                />
                <View style={styles.switch_conteiner}>
                    <Text style={styles.switch_label}> Beni Hatırla </Text>
                    <Switch
                        trackColor={{ true: '#78b9fa', false: '#b3b3b3' }}
                        thumbColor={isEnabled ? '#1976d2' : 'grey'}
                        onValueChange={toggleSwitch}
                        value={isEnabled} />
                </View>
                <Button
                    onPress={fetchUserData}
                    text="Giriş Yap"
                />
            </View>
            <View style={styles.register_container}>
                <Text style={styles.label}> Hesap oluşturmak için</Text>
                <TouchableOpacity>
                    <Text style={styles.register_label}> Kayıt Ol </Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

export default Login