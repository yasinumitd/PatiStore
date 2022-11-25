import React from "react";
import { View,Text,Image } from "react-native";
import styles from "./Products.style"


const Products = ({product})=>{

    
    function stock(){
        if(product.inStock){
            return null
        }else{
            return "STOKTA YOK"
        }
    }
    return(
        <View style={styles.conteiner}>
            <Image style={styles.image} source={{uri: product.imgURL}}/>
            <View style={styles.body}>
                <Text style={styles.product_name}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.stockText}>{stock()}</Text>
            </View>
        </View>
    )
    
}

export default Products;