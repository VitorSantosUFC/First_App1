const express = require('express')
const routes = express.Router()
const sapatos = []

routes.get('/api', (req, res) => {
    res.json({ mensagem: "Essa é minha primeira API" })
})

routes.post('/cadastrar', (req, res) => {
    const { id, marca, tamanho, cor } = req.body
    console.log(`salvando no banco de dados as informações ${id} ${marca} ${tamanho} ${cor}`)
    sapatos.push(req.body)
    res.json(req.body)
})

routes.get('/sapatos', (req, res) => {
    res.send(sapatos)
})

routes.put('/sapatos/alterar/:id', (req, res) => {
    let validacao = false
    let idx = 0
    const { id: alterar } = req.params
    const { marca, tamanho, cor} = req.body
    console.log(alterar)
    for (let index = 0; index < sapatos.length; index++) {
        const { id } = sapatos[index];
        console.log(sapatos[index])
        if (id == alterar) {
            validacao = true
            idx = index
        }
    }

    if (validacao == true) {
        sapatos[idx].marca = marca
        sapatos[idx].tamanho = tamanho
        sapatos[idx].cor = cor
        res.send(sapatos[idx])
    }
    else {
        res.json({
            mensagem:"Sapato não encontrado"
        })
    }
})

routes.delete('/sapatos/deletar/:id',(req,res) => {
  let validacao = false
  let idx = 0
  
    const { id: deletar } = req.params
    for (let index = 0; index < sapatos.length; index++) {
        const { id } = sapatos[index];
        console.log(sapatos[index])
        if (id == deletar) {
            validacao = true
            idx = index
        }
    }
    if (validacao == true) {
     delete sapatos[idx]
     res.json({
        mensagem:"Sapato deletado com sucesso"
    })
    }
    else {
        res.json({
            mensagem:"Sapato não encontrado"
        })
    }
})

module.exports = routes