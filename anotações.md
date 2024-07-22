# Anotações

## Manage Work Flow


* O *manage Work flow* é gerenciado pelo expo go, é que cuida de todas as configurações nativas necessárias para rodar no android e IOS

* Quando se utiliza npx expo install  o expo automatiza as configurações no .código nativo que a API precisa.

* O expo faz isso, pois as vezes configurar nativamente pode ser extenso por consequencia pode ser sucetível a erro


## Bare Work Flow

* Serve para quando encontra limitações e/ou bibliotecas que seja necessária a modificação em código nativo

* Se tem controle total a todos os pacotes do *Expo SDK* e a todos os serviçoes Expo e EAS (Expo Application Service)

* O Bare Workflow são projetos que não usam expo prebuild. Ou seja, são projetos em que as alterações são realizadas diretamente nos projetos nativos, em vez de gerá-los automaticamente

* Nem sempre modificar o projeto nativo manualmente é o mais produtivo. E para automatizar esse processo, podemos utilizar o 

```
  expo prebuild
```

### Criando projeto Bare Work Flow

```
  npx create-expo-app --template
```

- Selecionando o item:

```
  Blank (Bare)
```

- Podendo adicionar o typescript depois


## Expo prebuild

* Gera o código nativo antes de compilar. Baseado nos plugind de configuraçẽos definidos no app.json. O plugin de configuração gera todas as configurações necesárias  no código nativo automaticamete.

> ### Atenção 
>
> * Se for utilizar a código nativo pelo Bare Work Flow, evitar configurar por plugin e vice versa pois um pode sobrepor o outro.



## Development Build

* As compilações de desenvolvimento podem ser criadas com o EAS build ou localmente no computador. 

* Para iniciar uma compilação de desenvolvimento, precisa instar o **expo-dev-client**

* O **expo-dev-client** cria uma versão otimizada do **expo go** para aquela aplicação


## Para mais detalhes link da documentação 

> https://react-native.rocketseat.dev/




