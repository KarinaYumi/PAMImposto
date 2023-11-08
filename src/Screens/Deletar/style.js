import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0B2447',
        alignItems:"center",
      },
    
      img:{
        width:50
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

      input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        width: 300,
        borderRadius:"15px",
        marginLeft:5,
        marginBottom: 10
      },
      card: {
        width:"82%",
        height:"18%",
        backgroundColor:'#E9AA21', 
        borderRadius:'5px', 
        marginTop:'5%',
        
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