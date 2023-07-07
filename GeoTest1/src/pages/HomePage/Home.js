import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, PermissionsAndroid } from 'react-native';
import { Formik } from 'formik';
import styles from './Home.style';
import SuppButton from '../../components/SuppButton';
import SuppInput from '../../components/SuppInput';
import Geolocation from 'react-native-geolocation-service';

const Home = ({ navigation }) => {

    //state hold location
    const [location, setLocation] = useState({ latitude: '', longitude: '' });

    //get location function
    const getLocation = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Konum İzni',
                    message: 'Konumunuza erişmek için izin vermeniz gerekmektedir.',
                    buttonPositive: 'Tamam',
                    buttonNegative: 'İptal',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(
                    position => {
                        const { location } = position.coords;
                        console.log('Konum alındı:', position.coords);
                        setLocation({ location });
                    },
                    error => {
                        console.log('Konum alınamadı:', error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            } else {
                console.log('Konum izni reddedildi');
            }
        } catch (error) {
            console.log('Konum izni alınamıyor:', error);
        }
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                address: '',
                latitude: '',
                longitude: '',
                city: '',
                town: '',
                village: '',
                milktype: '',
                email: '',
                telno: '',
                not: '',
            }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleSubmit, setFieldValue, values }) => (


                <View style={styles.conteiner}>
                    <ScrollView>
                        <Text style={styles.header_label}> Tedarikçi Veri Girişi </Text>
                        <View style={styles.name_container}>
                            <SuppInput
                                label='Ad'
                                placeHolder='Adınız ...'
                                onChangeText={handleChange('firstName')}
                                value={values.firstName}
                            />
                            <SuppInput
                                label='Soy Ad'
                                placeHolder='Soy Adınız ...'
                                onChangeText={handleChange('lastName')}
                                value={values.lastName}
                            />
                        </View>
                        <View style={styles.adress_container}>
                            <SuppInput
                                label='Adres'
                                placeHolder='Adresiniz ...'
                                onChangeText={handleChange('address')}
                                value={values.address}
                            />
                            <View style={styles.location_container}>
                                <SuppInput
                                    label='Enlem'
                                    placeHolder='Enlem Giriniz ...'
                                    onChangeText={text => setLatitude(text)}
                                    value={values.latitude}
                                />
                                <SuppInput
                                    label='Boylam '
                                    placeHolder='Boylam Giriniz ...'
                                    onChangeText={handleChange('longitude')}
                                    value={values.longitude}
                                />

                            </View>
                            <SuppButton
                                onPress={getLocation}
                                text="Konum Al"
                            />
                        </View>
                        <View style={styles.polygon_container}>
                            <View style={styles.polyinfo_container}>
                                <SuppInput
                                    label='Şehir'
                                    placeHolder='Şehir Seçiniz ...'
                                    onChangeText={handleChange('city')}
                                    value={values.city}

                                />
                                <SuppInput
                                    label='İlçe'
                                    placeHolder='İlçe Seçiniz ...'
                                    onChangeText={handleChange('town')}
                                    value={values.town}
                                />
                                <SuppInput
                                    label='Köy'
                                    placeHolder='Köy Seçiniz ...'
                                    onChangeText={handleChange('village')}
                                    value={values.village}
                                />
                            </View>
                            <SuppInput
                                label='Süt Tipi'
                                placeHolder='Süt Tipi Seçiniz ...'
                                onChangeText={handleChange('milktype')}
                                value={values.milktype}
                            />
                        </View>
                        <View style={styles.description_container}>
                            <SuppInput
                                label='Email'
                                placeHolder='Email Adresiniz ...'
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                            <SuppInput
                                label='Telefon'
                                placeHolder='Telefon Numaranız ...'
                                onChangeText={handleChange('telno')}
                                value={values.telno}
                            />
                            <SuppInput
                                label='Not'
                                placeHolder='Notunuz ...'
                                onChangeText={handleChange('not')}
                                value={values.not}
                            />
                        </View>
                        <View style={styles.button_container}>
                            <SuppButton
                                onPress={handleSubmit}
                                text="Kaydet"
                            />
                            <SuppButton
                                onPress={() => navigation.goBack()}
                                text="Çıkış"
                            />
                        </View>
                    </ScrollView>
                </View>
            )}
        </Formik>

    )
}

export default Home