import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    conteiner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    header_label: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    name_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,
        padding: 5,
    },
    button_container: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    adress_container: {
        flexDirection: 'column',
        margin: 5,
        padding: 5,
        alignItems: 'stretch',
    },
    location_container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    description_container: {
        flexDirection: 'column',
        margin: 5,
        padding: 5,
    },
    polygon_container: {
        flexDirection: 'column',
        margin: 5,
        padding: 5,
        alignItems: 'stretch',
    },
    polyinfo_container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});