<div  align="center" >

<h1>
<img alt="BarberPro" src="https://user-images.githubusercontent.com/73250271/223866986-c7bcb91b-1aa6-4a95-acfe-0c8ca6709d61.svg" width="250px" align="center" />
</h1> 

</div>

## :man_technologist: Sobre a aplicação

A aplicação tem como objetivo a criação de um sistema para uma barbearia obtendo assim uma melhor organização e otimização dos atendimentos,além de proporcionar serviços de pacotes garantindo promoções para os clientes

## 🚀 Tecnologias 
Aplicação completa para Barbearia desenvolvida em 2 camadas(Back-end/Front-end).
Esse projeto foi desenvolvido com as seguintes tecnologias:

- **UI/UX**
- Figma

- **Backend**           
  - Express
  - PrismaORM
  - Beekeper
  - PostgreSQL
  - Jwt
  - TypeScript
  - Docker
  - Mocha
  - Chai
  - ESLint
  
- **FrontEnd**
  - NextJs
  - TypeScript
  - ChackaUI
  - Axios
  - Nookies
  - ESLint
  - React-toastify
  - Docker

   
## 💻 Figma


   
## 💻 Preview



## 🛠️ Como instalar

⚠️ **Atenção**: Você precisa ter o docker e o docker-compose instalados em sua máquina para rodar o projeto.

**#Clonar este repositório**

```
git clone git@github.com:BrunaEduarda03/pizzaria-express.git
```


**#Renomeie o arquivo ".env.example" que está na pasta raiz do projeto para ".env"**

### 🐋 Rodando com Docker

⚠️ **Atenção**: Você precisa ter o docker e o docker-compose instalados em sua máquina para rodar o projeto.

**#Rode o seguinte comando para subir o container (Pode demorar alguns minutos ☕)**[](https://emojipedia.org/pt/café/)

    docker compose up

**#Para executar os testes de cobertura do backend, use os seguintes comandos:**

```

docker exec -it backend /bin/sh
yarn run test:coverage

```

### ‍💻 Rodando sem Docker

⚠️ **Atenção**: Você precisa ter o node instalado em sua máquina para rodar o projeto.

### __Back-end__
Na pasta backend, renomeie o arquivo _.env.local-example_ para _.env.local_<br/>
Informe a URL da API na variável __DATABASE_URL__.<br/>
Informe a palavra secreta da API na variável __JWT_SECRET__<br/>
```bash
# Instale as dependências
$ yarn install

# Para iniciar a aplicação na porta 3333
$ yarn dev
```
### __Front-end__
  Na pasta web, informe o IP da aplicação back-end no arquivo _src/services/api.ts_<br/>
```bash
# Instale as dependências
$ yarn install

# Para iniciar a aplicação na porta 3000
$ yarn dev
```


**#Para executar os testes de cobertura do backend, use os seguintes comandos:**

```
npm run test:coverage

```
### :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).


#### :speaking_head:  Dúvidas ou feedbacks sobre o projeto!

E-mail: [**brunaduda37@gmail.com**](mailto:brunaduda37@gmail.com)

Linkedin: [Bruna Eduarda](https://www.linkedin.com/in/bruna-eduarda-a06a1b18b/)

---


Desenvolvido por: [Bruna Eduarda](https://www.linkedin.com/in/bruna-eduarda-a06a1b18b/)
