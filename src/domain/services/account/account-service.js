export class AccountService {
  static formater(data) {
    const status = {
      ativado: 'ATIVADO',
      desativado: 'DESATIVADO',
      pendente: 'PENDENTE'
    }

    return {
      idDoCliente: data.id,
        saldo: 5000,
        agencia: 1234,
      status: status.pendente
    }
  }
}