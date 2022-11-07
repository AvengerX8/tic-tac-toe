import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Espaços das casas ==============================================================================
  um = "";
  dois = "";
  tres = "";
  quatro = "";
  cinco = "";
  seis = "";
  sete = "";
  oito = "";
  nove = "";
  winner = '';

  //Jogador ========================================================================================
  jogadorAtual ='X';
  placarX = 0;
  placarO = 0;

  //Trocar jogador =================================================================================
  private inverter(){
    if(this.jogadorAtual == 'X'){
      this.jogadorAtual = 'O';
    } else {
      this.jogadorAtual = 'X';
    }
  }

  //Verifica se alguém ganhou ======================================================================
  private ganhou(jogador : string) : boolean{

    // Analisando a primeira linha
    if(this.um == jogador && this.dois == jogador && this.tres == jogador){
      return true;
    }

    // Analisando a segunda linha
    if(this.quatro == jogador && this.cinco == jogador && this.seis == jogador){
      return true;
    }

    // Analisando a terceira linha
    if(this.sete == jogador && this.oito == jogador && this.nove == jogador){
      return true;
    }

    // Analisando a quarta linha
    if(this.um == jogador && this.quatro == jogador && this.sete == jogador){
      return true;
    }
    
    // Analisando a quinta linha
    if(this.dois == jogador && this.cinco == jogador && this.oito == jogador){
      return true;
    }

    // Analisando a sexta linha
    if(this.tres == jogador && this.seis == jogador && this.nove == jogador){
      return true;
    } 

    // Analisando a sétima linha
    if(this.um == jogador && this.cinco == jogador && this.nove == jogador){
      return true;
    }

    // Analisando a oitava linha
    if(this.tres == jogador && this.cinco == jogador && this.sete == jogador){
      return true;
    }    

    return false;
  }

  // Anuncia o vencedor ======================================================================
  private vencedor() : boolean{
    if(this.ganhou(this.jogadorAtual)){
      this.winner = this.jogadorAtual;
      if(this.jogadorAtual=='X'){
        this.placarX++;
      }else{
        this.placarO++;
      }
      return true;
    }   

    return false;
  }

  // Inverter jogadores ======================================================================
  botao1(){
    if(this.um != ''){
      return;
    }
    //Se houver um vencedor, retorna a execução da função.
    if(this.winner!=''){
      return;
    }

    this.um = this.jogadorAtual;
    if (!this.vencedor()){
      this.inverter(); 
    }
  }
  botao2(){
    if(this.dois != ''){
      return;
    }

    if(this.winner!=''){
      return;
    }

    this.dois = this.jogadorAtual;
    if (!this.vencedor()){
      this.inverter(); 
    }
  }
  botao3(){
    if(this.tres != ''){
      return;
    }

    if(this.winner!=''){
      return;
    }

    this.tres = this.jogadorAtual;
    if (!this.vencedor()){
      this.inverter(); 
    }
  }
  botao4(){
    if(this.quatro != ''){
      return;
    }

    if(this.winner!=''){
      return;
    }

    this.quatro = this.jogadorAtual;
    if (!this.vencedor()){
      this.inverter(); 
    }
  }
  botao5(){
    if(this.cinco != ''){
      return;
    }

    if(this.winner!=''){
      return;
    }

    this.cinco = this.jogadorAtual;
    if (!this.vencedor()){
      this.inverter(); 
    }
  }
  botao6(){
    if(this.seis != ''){
      return;
    }

    if(this.winner!=''){
      return;
    }

    this.seis = this.jogadorAtual;
    if (!this.vencedor()){
      this.inverter(); 
    }
  }
  botao7(){
    if(this.sete != ''){
      return;
    }

    if(this.winner!=''){
      return;
    }

    this.sete = this.jogadorAtual;
    if (!this.vencedor()){
      this.inverter(); 
    }
  }
  botao8(){
    if(this.oito != ''){
      return;
    }

    if(this.winner!=''){
      return;
    }

    this.oito = this.jogadorAtual;
    if (!this.vencedor()){
      this.inverter(); 
    }
  }
  botao9(){
    if(this.nove != ''){
      return;
    }

    if(this.winner!=''){
      return;
    }

    this.nove = this.jogadorAtual;
    if (!this.vencedor()){
      this.inverter(); 
    }
  }

  // Reiniciar Jogo ====================================================================== 
  limpar(){
    this.um = "";
    this.dois = "";
    this.tres = "";
    this.quatro = "";
    this.cinco = "";
    this.seis = "";
    this.sete = "";
    this.oito = "";
    this.nove = "";

    this.jogadorAtual ='X';
    this.winner = "";
  }

}
