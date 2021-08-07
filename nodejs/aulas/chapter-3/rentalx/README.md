# Cadastro de carro

**Requisitos Funcionais (RF)**
Deve ser possível cadastrar um novo carro.

**Regra de Negócio (RN)**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado com disponibilidade por padrão.
* O usuário responsável pelo cadastro deve ser um usuário administrador.


# Listagem de carros

**Requisitos Funcionais (RF)**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível todos os carros disponíveis pelo nome da categoria.
Deve ser possível todos os carros disponíveis pelo nome da marca.
Deve ser possível todos os carros disponíveis pelo nome do carro.

**Regra de Negócio (RN)**
O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro

**Requisitos Funcionais (RF)**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**Regra de Negócio (RN)**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação existente para um mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de imagens do carro

**Requisitos Funcionais (RF)**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**Requisitos Não Funcionais (RNF)**
Utilizar o multer para upload dos arquivos.

**Regra de Negócio (RN)**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de carro

**Requisitos Funcionais (RF)**
Deve ser possível cadastrar um aluguel.

**Requisitos Não Funcionais (RNF)**

**Regra de Negócio (RN)**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
