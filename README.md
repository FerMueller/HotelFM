# HotelFM

## Objetivo

Objetivo    
Desenvolver uma aplicação para realizar a gestão hóspedes em um hotel. 
Deverá permitir a realização de reservas, check-in e checkout

## Requisitos funcionais

* Armazenar de forma persiste o cadastro de hóspedes (Informações mínimas: 
Nome, documento, telefone); 
* Armazenar de forma persistente as reservas geradas; 
* Deve ser possível localizar hóspedes por: nome, documento e telefone; 
* Localizar hóspedes que ainda estão no hotel; 
* Localizar hóspedes que tem reservas, mas ainda não realizaram o check-in. 
* Permitir ao atendente realizar o check-in; 
* Permitir ao atendente realizar o checkout;

## Tecnologias

PostgreSQL
Backend: JDK 21
Maven
Node.js e NPM
Frontend: Angular 18

## Regras de negócio

* Diárias de segunda à sexta-feira terão um valor fixo de R$ 120,00; 
* Diárias em finais de semana terão um valor fixo de R$ 180,00; 
* Caso o hóspede tenha carro e necessite utilizar as vagas disponíveis no 
estabelecimento, será cobrado uma taxa adicional de R$ 15,00 de segunda à 
sexta-feira e R$ 20,00 nos finais de semana; 
* O horário para a realização do check-in será a partir das 14h00min. Ao tentar 
realizar o procedimento antes do horário prévio, o sistema deverá emitir um 
alerta 
* O horário para a realização do checkout será até as 12h00min. Caso o 
procedimento seja realizado posterior, deverá ser cobrada uma taxa adicional de 
50% do valor da diária (Respeitando a variação para dias úteis e finais de 
semana) 
* Durante o processo de checkout, deverá ser exibido em detalhes o total geral da 
reserva a ser paga; 

## Setup & Running the Application

Step #1 -> Clone the Repository

Step #2 -> Run the command -> npm install 

Step #3 -> Open the terminal -> ng serve

Step #4 -> Start PostgresServer Port: 5432

Step #5 -> Download JDK 21

Step #6 -> Start Backend Port: 8080


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
