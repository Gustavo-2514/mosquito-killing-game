# Jogo Mata Mosquito

## Requisitos
Certifique-se de que você possui o Node.js instalado na sua máquina antes de prosseguir.

## Instalação

1 -Clone este repositório para o seu sistema local.

```
git clone https://github.com/Gustavo-2514/mosquito-killing-game
```

2 - Navegue até o diretório raiz do projeto no terminal.

```
cd mosquito-killing-game
```

3 - Execute o seguinte comando para instalar as dependências:

```
npm install
```

4 - Executando o servidor de desenvolvimento

Você pode iniciar o servidor de desenvolvimento para testar o jogo:

```
npm run development
```

O servidor estará disponível em http://localhost:8080.

## Descrição
O webpack esta 100% configurado para lidar com todos os tipos de aquivos, não é nescessario a inclussão de Links e Scripts no Head do HTML da pasta 'src'.
Caso queria rodar a aplicação na pasta de Produção, altere a config do Webpack e troque a pasta **'src'**, por **'public'** :
 
``` devServer: { 
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
```
