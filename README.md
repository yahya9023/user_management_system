# express setup
1. using express generator
2. with pug view engine (hbs, jade, ...)
  - make dynamic pages #{user.name}
  - composition
    . divide the view into components
    . easy of maintenance
3. sequelize with mysql2
  - sequelize is an ORM. OBJECT RELATION MAPPING
  - mysql2 is an adapter for MYSQL DATABASE
  - sequelize-cli . command line interface
4. create users & departments models & its association

# definitions
- Middleware : is a piece software that run between request & response
  request -> middleware -> response
- Ternary operator
  const data = condition ? 'true data' : 'false data'
  <=>
  let data
  if(condition)
    data = 'true data'
  else 
    data = 'false data'
  example: 
  const adult = user.age >= 18 ? true : false
- filter
  ````js
  const positiveNumbers = [1,2,-2,7,6,-8,-10].filter( number => number > 0 )
  console.log(positiveNumbers) //=> (4) [1, 2, 7, 6] 
  ```
# steps
1. `npm init -y`
2. install express-generator
  - `npm i express-generator -g` only one time
  - `express --view=pug --git .`
3. `yarn add sequelize mysql2`
3. `yarn add sequelize-cli -D`
4. `npx sequelize init`
5. `npx sequelize db:create` => create db , get name from config/config.json
6. `npx sequelize model:create --name User --attributes firstName:string`
7. `npx sequelize model:create --name Departement --attributes name:string`
8. `px sequelize db:migrate`
9. `npx sequelize db:migrate:undo:all`
10. `npx sequelize seed:create --name User`
11. `yarn add -D hoaxer` > a package to generate fake data
12. `npx sequelize db:seed:all`