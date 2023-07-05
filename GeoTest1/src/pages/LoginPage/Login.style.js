import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
        padding: 5,
    },
    header_label: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header_image: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    body_container: {
        margin: 20,
        padding: 5,
        paddingVertical: "3%",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 1,
        elevation: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    bodyheader_label: {
        color: '#545454',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5,
    },
    switch_label: {
        fontSize: 12,
        fontWeight: 'bold',
        margin: 5,
    },
    switch_conteiner: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 5,
    },
    register_container: {
        margin: 10,
        marginBottom: 20,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    register_label: {
        color: '#1976d2',
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        margin: 5,
    },
});