/*
1. Crie uma classe Carro com as seguintes propriedades:
● Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
● Potência - número de cavalos de potência do carro;
● Velocidade Máxima - qual a maior velocidade que o carro pode alcançar;
● Aceleração - o tempo em segundos que o carro leva para ir de 0 a 100 km/h

2. Adicione na classe carro um método que recebe como parâmetro uma distância em
metros e calcula o tempo em segundos para percorrer essa distância. Use a
seguinte fórmula para o cálculo: resultado = distância / (Velocidade Máxima /
Aceleração). A função deve retornar esse resultado.

3. Crie alguns objetos da classe Carro e adicione-os em um array

4. Crie uma classe Corrida com as seguintes propriedades:
● Nome - nome do local da corrida;
● Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
● Distância - o total em metros da corrida;
● Vencedor - qual a equipe que ganhou a corrida;

5. Adicione na classe Corrida um método que verifica qual foi o carro que completou a
corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o
nome da equipe que fez o menor tempo na propriedade “Vencedor”.

6. Adicione na classe Corrida um método que exibe na tela quem é o vencedor da
corrida.

7. Crie um objeto da classe Corrida e chame seus métodos.
*/

class Carro {
    nomes = []
    potencias = []
    velocidadesMaximas = []
    aceleracoes = []
    distanciasEmMetros = 500

    tempoParaPercorrerDistancia(distanciaEmMetros){
        let tempoEmSegundos = distanciaEmMetros / (this.velocidadesMaximas / this.aceleracoes)
    }
}

let carroCorrida = new Carro()

carroCorrida.nomes[0] = "Ferrari"
carroCorrida.potencias[0] = 640
carroCorrida.velocidadesMaximas[0] = 370
carroCorrida.aceleracoes[0] = 2.9

carroCorrida.nomes[1] = "Mercedes"
carroCorrida.potencias[1] = 565
carroCorrida.velocidadesMaximas[1] = 350
carroCorrida.aceleracoes[1] = 3.4

carroCorrida.nomes[2] = "McLaren"
carroCorrida.potencias[2] = 710
carroCorrida.velocidadesMaximas[2] = 400
carroCorrida.aceleracoes[2] = 2.3
