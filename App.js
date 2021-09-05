import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import { identifier } from '@babel/types';

export default function App(){
  const[error,setError] = useState('');
  const[detalles,setDetalles] = useState('');
  const [numbers, setNumbers] = useState({
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
  })
  const [results,setResults] = useState({
    higherNumber: 0,
    lowerNumber: 0,
  })

  const solve = () =>{
    const {number1,number2,number3,number4} = numbers;
    const {higherNumber,lowerNumber} = results;
    
    //Verificando que no queden cuadros vacios
    if(!number1){ 
      setError('Digite su primer número');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    }else if(!number2){
      setError('Digite su segundo número');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    } else if(!number3){
      setError('Digite su tercer número');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    } else if(!number4){
      setError('Digite su cuarto número');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    }
    
    //Verificando que no haya numeros negativos
    if(number1<0)
    {
      setError('Su primer número es negativo');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    } else if(number2<0){
      setError('Su segundo número es negativo');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    } else if(number3<0){
      setError('Su tercer número es negativo');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    } else if(number4<0){
      setError('Su cuarto número es negativo');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    }
    
    //Verificando que no haya ceros
    if(number1==0)
    {
      setError('Su primer número es cero');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    } else if(number2==0){
      setError('Su segundo número es cero');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    } else if(number3==0){
      setError('Su tercer número es cero');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    } else if(number4==0){
      setError('Su cuarto número es cero');
      setTimeout(() =>{
        setError(null);
      },4000);
      return;
    }

    let highNumb = 0;
    let lowNumb = 0;
    //Calulando el numero mayor y numero menor
    highNumb = Math.max(number1,number2,number3,number4);
    lowNumb = Math.min(number1,number2,number3,number4);

    //Realizando los pasos extras
    if(lowNumb>10){
      setDetalles('El Número Menor es mayor a 10! Se le suma 10 al Número Mayor');
      setTimeout(() =>{
        setDetalles(null);
      },4000);
      highNumb=highNumb+10;
    }
    if(highNumb<50){
      setDetalles('El Número Mayor es menor a 50! Se le resta 5 al Número Menor');
      setTimeout(() =>{
        setDetalles(null);
      },4000);
      lowNumb=lowNumb-5;
    }

    setResults({...results, higherNumber: highNumb, lowerNumber: lowNumb});
  }
  

  return(
    <>
      <View style={styles.container}>
      <ImageBackground source={require('./src/Imgs/Background.jpg')} resizeMode="cover" style={styles.backgroundImage}>
        <SafeAreaView style={styles.boxHeader}>
          <View>
            <Text style={styles.title}>El Juego de los 4 Números</Text>
          </View>
        </SafeAreaView>
        {detalles ? (
          <View>
            <Text style={styles.Detalles}>{detalles}</Text>
          </View>
        ): null}
        {error ? (
          <View>
            <Text style={styles.Errores}>{error}</Text>
          </View>
        ): null}
        <View>
          <Form numbers={numbers} setNumbers={setNumbers} />
        </View>
        <View>
          <View style={styles.respuestasBox}>
          <Text style={styles.titleNumerosIngresados}>Números ingresados</Text>
            <View style={styles.numerosIngresados}>
              <Text style={styles.numerosIngresadosIndv}>{numbers.number1}</Text>
              <Text style={styles.numerosIngresadosIndv}>{numbers.number2}</Text>
              <Text style={styles.numerosIngresadosIndv}>{numbers.number3}</Text>
              <Text style={styles.numerosIngresadosIndv}>{numbers.number4}</Text>
            </View>
            <View style ={styles.numerosGanadores}>
              <View style ={styles.numeroMayorBox}>
                <Text style={styles.numeroMayorText}>El número mayor es: </Text>
                <Text>{results.higherNumber}</Text>
              </View>
              <View style={styles.numeroMenorBox}>
                <Text style={styles.numeroMenorText}>El número menor es: </Text>
                <Text>{results.lowerNumber}</Text>
              </View>
            </View>
          </View>
        </View>
        <Footer solve={solve}/>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  backgroundImage:{
    flex:1,
    justifyContent: 'center',
  },
  boxHeader:{
    borderBottomRightRadius: 10,
    borderBottomLeftRadius:10,
    backgroundColor: '#03BDD7',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
    flexDirection:'row',
    bottom:0,
  },
  title:{
    fontSize: 25,
    letterSpacing:1,
    fontWeight:'bold',
    color:'#000',
  },
  respuestasBox:{
    padding:2,
    backgroundColor:'#fff',
    height: 150,
    marginTop:20,
    alignItems:'center',
  },
  numerosIngresados:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginVertical:5,
  },
  numerosIngresadosIndv:{
    marginHorizontal:10,
    fontSize: 18,
  },
  Errores:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#BD1F1F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    marginVertical:2,
    alignItems:'center',
    height:40,
    
  },
  Detalles:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#FFC300',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    marginVertical: 2,
    alignItems:'center',
    height:40,
  },
  numeroMayorBox:
  {
    flexDirection:'row',
    marginHorizontal: 8,
    marginVertical:10,
    alignItems:'center',
  },
  numeroMayorText:{
    color:'#1EB643',
    fontSize: 15,
    fontWeight:'bold',
  },
  numeroMenorBox:
  {
    flexDirection:'row',
    marginHorizontal: 8,
    marginVertical:10,
  },
  numeroMenorText:{
    color:'#C62121',
    fontSize: 15,
    fontWeight:'bold',
  },
  titleNumerosIngresados:{
    color:'#1E30B6',
    paddingTop:10,
    letterSpacing:1,
    fontWeight:'bold',
    fontSize: 20,
  }
});