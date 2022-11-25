import React from "react";
import { SafeAreaView, View, Text, FlatList,StyleSheet,Dimensions, TextInput} from "react-native";
import data_store from "./data.json"
import Products from "./components/Products";

function App(){
  

  const renderProduct = ({item}) =>  <Products product={item}/>

  return(
    <SafeAreaView style={styles.conteiner}>
      <View>
        <View>
          <Text style ={styles.headerText}>PatikaStore</Text>
        </View>
       
        <FlatList
        ListHeaderComponent={() =>(
          <View style={styles.search}>
          <TextInput style={styles.input} placeholder= 'Ara...'/>
        </View>
        )} 
        numColumns={2}
          data = {data_store}
          renderItem ={renderProduct}
          
        />
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor:"white"
  },
  headerText:{
    fontSize:30,
    fontWeight:'bold',
    color:'red',
    marginLeft:10,
    marginTop:10,
  },
  search:{
    backgroundColor:'#e0e0e0',
    margin:10,
    borderRadius:10,
  },
  input:{
    fontSize: 15,
    marginLeft:10,
  }

})
export default App;