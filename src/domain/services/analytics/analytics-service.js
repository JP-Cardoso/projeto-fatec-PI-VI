import axios from "axios";
import { CreateAccountUseCase } from "../../useCases/account/create.js";
import { AccountRepository } from "../../repository/account/account-repository.js";

export class AnalyticService {

  #url = "http://localhost:5000/predict";

  static formatDataEndTransformBuffer(data) {
    const jsonData = JSON.stringify(data);
    const buffer = Buffer.from(jsonData);
    return buffer;
  }

  static formatData(data) {
    return {
      idConta: data.idDaConta,
      genero: data.genero,
      carro_proprio: data.carro_proprio,
      casa_propria: data.casa_propria,
      filhos: data.filhos,
      tipo_de_renda: data.tipo_de_renda,
      grau_de_escolaridade: data.grau_de_escolaridade,
      estado_civil: data.estado_civil,
      tipo_de_moradia: data.tipo_de_moradia,
      celular: data.celular,
      telefone_trabalho: data.telefone_trabalho,
      telefone: data.telefone,
      email: data.email,
      membros_da_familia: data.membros_da_familia,
      faixa_etaria: data.faixa_etaria,
      renda_anual: data.renda_anual,
      tempo_emprego: data.tempo_emprego,
      tempo_registro_dados: data.tempo_registro_dados
    }
  }

  async predict(items) {
    const reqOptions = {
      url: "http://localhost:5000/predict",
      method: "POST",
      headers: { "Accept": "*/*", "Content-Type": "application/json" },
      data: items,
    };

    try {
      const response = await axios.request(reqOptions);
      const result = response.data;
      const createAccountRepository = new AccountRepository();
      const account = new CreateAccountUseCase(createAccountRepository);
      await account.updated(result);
    } catch (error) {
      console.error("error", error);
    }
  }

}