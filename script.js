class ContaBancaria {
    constructor(titular, numeroConta) {
        this.titular = titular;
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            alert(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            alert("O valor para depósito deve ser positivo.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            alert(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
        } else if (valor > this.saldo) {
            alert("Saldo insuficiente para realizar o saque.");
        } else {
            alert("O valor para saque deve ser positivo.");
        }
    }

    consultarSaldo() {
        alert(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
}

const contas = [];

function criarConta(titular, numeroConta) {
    const conta = new ContaBancaria(titular, numeroConta);
    contas.push(conta);
    alert(`Conta criada para ${titular} com número: ${numeroConta}`);
}

function depositar(numeroConta, valor) {
    const conta = contas.find(c => c.numeroConta === numeroConta);
    if (conta) {
        conta.depositar(valor);
    } else {
        alert("Conta não encontrada.");
    }
}

function sacar(numeroConta, valor) {
    const conta = contas.find(c => c.numeroConta === numeroConta);
    if (conta) {
        conta.sacar(valor);
    } else {
        alert("Conta não encontrada.");
    }
}

function consultarSaldo(numeroConta) {
    const conta = contas.find(c => c.numeroConta === numeroConta);
    if (conta) {
        conta.consultarSaldo();
    } else {
        alert("Conta não encontrada.");
    }
}

function listarContas() {
    if (contas.length === 0) {
        alert("Não há contas cadastradas.");
    } else {
        let lista = "Contas cadastradas:\n";
        contas.forEach(conta => {
            lista += `Titular: ${conta.titular}, Número da conta: ${conta.numeroConta}, Saldo: R$${conta.saldo.toFixed(2)}\n`;
        });
        alert(lista);
    }
}

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "--- Sistema Bancário ---\n" +
            "1. Criar nova conta\n" +
            "2. Depositar\n" +
            "3. Sacar\n" +
            "4. Consultar saldo\n" +
            "5. Listar todas as contas\n" +
            "6. Sair\n" +
            "Escolha uma opção:"
        );

        switch (opcao) {
            case '1':
                const titular = prompt("Digite o nome do titular: ");
                const numeroConta = prompt("Digite o número da conta: ");
                criarConta(titular, numeroConta);
                break;
            case '2':
                const numeroContaDep = prompt("Digite o número da conta para depósito: ");
                const valorDep = parseFloat(prompt("Digite o valor do depósito: "));
                depositar(numeroContaDep, valorDep);
                break;
            case '3':
                const numeroContaSac = prompt("Digite o número da conta para saque: ");
                const valorSac = parseFloat(prompt("Digite o valor do saque: "));
                sacar(numeroContaSac, valorSac);
                break;
            case '4':
                const numeroContaSaldo = prompt("Digite o número da conta para consultar saldo: ");
                consultarSaldo(numeroContaSaldo);
                break;
            case '5':
                listarContas();
                break;
            case '6':
                alert("Saindo do sistema...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
                break;
        }
    } while (opcao !== '6');
}