<div  align="center" >

<h1>
<img alt="BarberPro" src="https://user-images.githubusercontent.com/73250271/223866986-c7bcb91b-1aa6-4a95-acfe-0c8ca6709d61.svg" width="250px" align="center" />
</h1> 

</div>

## :man_technologist: Sobre a aplicação

A aplicação tem como objetivo a criação de um sistema para uma barbearia para adquirir uma melhor organização e otimização dos atendimentos,além de proporcionar serviços de planos garantindo promoções para os clientes e proteção de pagamentos com infra-estrutura técnica, de prevenção de fraude bancária via stripe. 

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

- **Serviço de Pagamentos**
  - Stripe

   
## 💻 Figma

### Login/Cadastro de usuários
![Captura de tela de 2023-03-27 09-02-21](https://user-images.githubusercontent.com/73250271/227936321-11f57ece-7f20-449a-998a-c742078a08e5.png)

### Cadastro de Serviços
![Captura de tela de 2023-03-27 09-04-20](https://user-images.githubusercontent.com/73250271/227936765-cf092282-6b74-48a1-98c4-d9e3563bd8b5.png)

### Modelos - Cadastro de Cortes
![3](https://user-images.githubusercontent.com/73250271/227938092-5b622310-694c-4a7b-8c1b-79c3edaa3b23.png)

### Configurações de Perfil
![Captura de tela de 2023-03-27 09-12-40](https://user-images.githubusercontent.com/73250271/227938653-db8712e2-e403-47fd-9923-87fdaf140183.png)

### Configurações de Planos
![Captura de tela de 2023-03-27 09-14-12](https://user-images.githubusercontent.com/73250271/227940371-2d4262f6-6598-47d1-8b3d-7acc779791a0.png)
   
## 💻 Preview



## 🛠️ Como instalar

⚠️ **Atenção**: Você precisa ter o docker e o docker-compose instalados em sua máquina para rodar o projeto.

**#Clonar este repositório**

```
git clone git@github.com:BrunaEduarda03/BarberPro.git
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

⚠️ **Atenção**: Você precisa ter o node v16 ou superior instalado em sua máquina para rodar o projeto.

### __Back-end__
Na pasta backend, renomeie o arquivo _.env.local-example_ para _.env.local_<br/>
Informe a URL da API na variável __DATABASE_URL__.<br/>
Informe a palavra secreta da API na variável __JWT_SECRET__<br/>
```bash
# Instale as dependências
$ yarn install

# Para iniciar a aplicação na porta 3332
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


Desenvolvido por: [Bruna Eduarda Cruz Maciel](https://www.linkedin.com/in/bruna-eduarda-a06a1b18b/)
