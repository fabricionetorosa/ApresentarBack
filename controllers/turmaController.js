
const database = require("../database")

exports.buscarTurma = (req, res) => {

    const turmaDoPostman = req.params.turma;

    const comando = `SELECT * FROM turmas
    WHERE LOWER(NOME) = LOWER('${turmaDoPostman}')`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.buscarTurmaOrdenadas =  (req, res) => {

    const comando = `SELECT * FROM turmas ORDER BY fase`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}


exports.buscarTurmaAproximada = (req, res) => {

    const materiaDoPostman = req.params.materia;

    const comando = `SELECT * FROM turmas
    WHERE LOWER(NOME) LIKE LOWER('%${materiaDoPostman}%')`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.cadastrarTurma = (req, res) => {
    const nomeDoPostman = req.body.nome;
    const faseDoPostman = req.body.fase;
    const cargaDoPostman = req.body.carga;

    const comando = `INSERT INTO turmas (nome,  fase, carga) VALUES
    ($1, $2, $3);`
    const valoresDoComando = [nomeDoPostman, faseDoPostman, cargaDoPostman]
    database.query(comando, valoresDoComando).then(
        () => {
            res.status(200).send({message: "Dado inserido com sucesso"})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}


exports.excluirTurma = (req, res) => {
    const idDoPostman = req.params.id;
    const comando = `DELETE FROM turmas WHERE id = $1;`
    const valoresDoComando = [idDoPostman]
    database.query(comando, valoresDoComando).then(
        () => {
            res.status(200).send({message: "Dado excluído com sucesso"})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro"})
        }
    )
}