
function classificaAluno(nota1) {
    const notaCorrigida = arredondar(nota1);
    if (notaCorrigida < 40) {
        console.log(`Aluno foi reprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Aluno foi aprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota1) {
    if (nota1 < 38) {
        return nota1
    } else if (nota1 % 5 >= 3 ) {
        return nota1 = nota1 + (5 - (nota1 % 5))
    } else {
        return nota1 = nota1 - (nota1 % 5)
    }
}

classificaAluno(29);
classificaAluno(38);
classificaAluno(84);
classificaAluno();