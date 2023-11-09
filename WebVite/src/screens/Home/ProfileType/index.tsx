//import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import React from 'react';
//import { useNavigation } from '@react-navigation/native';
import '../../../themes/Home/ScreenProfileTypeStyle.css'


export function ScreenProfileType(){

return(
  <>
  <div className='container'>
  <h3 className='mensagem'>Com qual finalidade você está utilizando nosso App?</h3>
  
  <button className='botao'>
   <a href="">
    <h3 className='botaoTexto'>Secretaria</h3>
    </a>
  </button>

  <button className='botao'>
   <a href="">
    <h3 className='botaoTexto'>Professor</h3>
    </a>
  </button>

  <button className='botao'>
   <a href="">
    <h3 className='botaoTexto'>Aluno</h3>
    </a>
  </button>


  <button className='footer'>
   <a href="">
    <h3 className='footerBotao'>Já possui cadastro?</h3>
    </a>
   <a href="">
    <h3 className='footerBotao'>Entre aqui</h3>
    </a>
  </button>
  
  </div>
  </>
)
}


export default ScreenProfileType;