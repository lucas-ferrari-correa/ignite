const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3333;

app.use(express.json())

const customers = [];

function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers; 

  const customer = customers.find((customer) => {
    return customer.cpf === cpf;
  });

  if (!customer) {
    return response.status(400).json({ erro: "Customer not found" })
  }

  request.customer = customer;

  return next();
}

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some((customer) => {
    return customer.cpf === cpf
  });
  
  if (customerAlreadyExists) {
    return response.status(400).json({
      message: "Customer already exists"
    });
  }

  customers.push({
    id: uuidv4(),
    cpf,
    name,
    statement: []
  });

  return response.status(201).send()
});

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  return response.json(customer.statement);
});

app.listen(port);