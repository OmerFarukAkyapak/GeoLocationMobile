import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { Formik } from 'formik';
import styles from './Home.style'
import SuppButton from '../../components/SuppButton'
import SuppInput from '../../components/SuppInput'

const Home = ({ navigation }) => {

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
            {({ handleChange, handleSubmit, handleLocation, values }) => (
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
                                    onChangeText={handleChange('latitude')}
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
                                onPress={handleLocation}
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