# Desafio MovieFlix
Desafio realizado como requisito obrigatório do Bootcamp Spring React da [DevSuperior](https://devsuperior.com.br). Desenvolvimento do back-end EM Java utilizando a metodologia do TDD com os testes escritos utilizando o JUnit5. Desenvolvimento do front-end utilizando Typescript e React (React Router Dom, Context API e Axios).

## Sobre o projeto
O sistema MovieFlix consiste em um banco de filmes, os quais podem ser listados e avaliados pelos usuários. Usuários podem ser visitantes (VISITOR) e membros (MEMBER). Apenas usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, o usuário deve fazer seu login. Apenas usuários logados podem navegar nos filmes. Logo após fazer o login, o usuário vai para a listagem de filmes, que mostra os filmes de forma paginada, ordenados alfabeticamente por título. O usuário pode filtrar os filmes por gênero.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do filme, e também suas avaliações. Se o usuário for MEMBER, ele pode ainda registrar uma avaliação nessa tela.

Um usuário possui nome, email e senha, sendo que o email é seu nome de usuário. Cada filme possui um título, subtítulo, uma imagem, ano de lançamento, sinopse, e um gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

### Layout mobile
![Mobile 1](https://github.com/vanessa-maganhoto/assets/blob/main/cap5-bds-movieflix/versa-mobile-1.png)
![Mobile 2](https://github.com/vanessa-maganhoto/assets/blob/main/cap5-bds-movieflix/versa-mobile-2.png)
![Mobile 3](https://github.com/vanessa-maganhoto/assets/blob/main/cap5-bds-movieflix/versa-mobile-3.png)

### Layout web
![Web 1](https://github.com/vanessa-maganhoto/assets/blob/main/cap5-bds-movieflix/versao-desktop-1.png)

![Web 2](https://github.com/vanessa-maganhoto/assets/blob/main/cap5-bds-movieflix/versao-desktop-2.png)

![Web 2](https://github.com/vanessa-maganhoto/assets/blob/main/cap5-bds-movieflix/versao-desktop-3.png)

### Modelo conceitual
![Modelo Conceitual](https://github.com/vanessa-maganhoto/assets/blob/main/cap5-bds-movieflix/modelo-conceitual.png)

## Tecnologias utilizadas
### Back end
- Java
- Spring Boot
- JUnit5
- JPA / Hibernate
- Maven
### Front end
- HTML / CSS / JS / TypeScript
- ReactJS

### Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

## Como executar o projeto

### Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone git@github.com:vanessa-maganhoto/bds06-desafio-movieFlix.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

### Front end 
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone git@github.com:vanessa-maganhoto/bds06-desafio-movieFlix.git

# entrar na pasta do projeto front end web
cd frontend

# instalar dependências
yarn install

# executar o projeto
yarn start
```

## Autor

Vanessa Matos

https://www.linkedin.com/in/vanessaammatos

