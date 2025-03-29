import { View, Text, Modal, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = ({visible}) => {
  return (
    <Modal transparent visible={visible}>
         <View style={styles.mainView}>
           
           <View style={styles.loaderView}>
                 <ActivityIndicator/>
           </View>

         </View>
        

    </Modal>
    
    
    // <View>
    //   <Text>Loader</Text>
    // </View>
  )
}

export default Loader

const styles = StyleSheet.create({

  mainView:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center'

  },

  loaderView:{
    width:80,
    height:80,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:-40,
    borderRadius:10
  }


})