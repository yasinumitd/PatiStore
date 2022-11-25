import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    conteiner:{
        backgroundColor:"#e0e0e0",
        margin:10,
        borderRadius:10,
        padding:10,
        width: Dimensions.get('window').width/2.2,
    },
    image:{
        height : Dimensions.get("window").height/4,
        
        borderRadius: 10,
    
    },
    product_name:{
        fontSize: 18,
        marginTop:5,
        fontWeight:'bold',
        color:'black  '
    },
    price:{
        marginTop:5,
        fontSize: 15,
        fontWeight:'bold',
        color: 'grey'
        
    },
    body:{
        padding:10,
    },
    stockText:{
        color:'red',
        marginTop:5,
        fontSize:15,
        fontWeight:'bold'
    }
})