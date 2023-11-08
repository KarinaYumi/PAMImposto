import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0B2447',
        alignItems:"center"
      },
    
      titulo:{
        fontSize:80,
        alignSelf:"center",
        textAlign:"center",
        fontWeight:"bold"
      },
      input: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        width: 300,
        borderRadius:"15px",
        marginLeft:5,
        marginBottom: 10,
        borderColor: '#00000'
      },
      card: {
        width:"82%",
        height:"30%",
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
      subtitulo:{
        fontSize:20,
        marginLeft:5,
        marginTop:30,
        marginBottom:10
      },

      imagem:{
        width:"100%"
      }
    });

export default styles;
