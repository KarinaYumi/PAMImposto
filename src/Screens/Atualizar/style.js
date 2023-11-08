import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0B2447',
        alignItems:"center",
      },

      card: {
        width:"82%",
        height:"18%",
        backgroundColor:'#E9AA21', 
        borderRadius:'5px', 
        marginTop:'5%',
        
      },
    
      titulo:{
        fontSize:60,
        alignSelf:"center",
        textAlign:"center",
        fontWeight:"bold"
      },

      subtitulo:{
        fontSize:40,
        marginLeft:5,
        alignSelf: "center",
        textAlign:"center",
        fontWeight:"bold"
      },

      cardForm: { 
        alignItems:"center",
        width:"90%",
        height:"50%",
        backgroundColor:'#FFFFFF', 
        borderRadius:'5px', 
        marginTop:'15%',
        textAlign:"center",
      },
  });

export default styles;