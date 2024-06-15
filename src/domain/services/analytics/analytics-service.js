import axios from "axios";
import { CreateAccountUseCase } from "../../useCases/account/create.js";
import { AccountRepository } from "../../repository/account/account-repository.js";
import { Pub } from "../../../infra/utils/gcp/pub.utils.js";

export class AnalyticService {

  #url = "http://localhost:5000/predict";

  static formatDataEndTransformBuffer(data) {
    const jsonData = JSON.stringify(data);
    const buffer = Buffer.from(jsonData);
    return buffer;
  }

  static formatData(data) {
    return {
      idConta: data.idConta,
      genero: Number(data.genero),
      carro_proprio: Number(data.carro_proprio),
      casa_propria: Number(data.casa_propria),
      filhos: Number(data.filhos),
      tipo_de_renda: Number(data.tipo_de_renda),
      grau_de_escolaridade: Number(data.grau_de_escolaridade),
      estado_civil: Number(data.estado_civil),
      tipo_de_moradia: Number(data.tipo_de_moradia),
      celular: Number(data.celular),
      telefone_trabalho: Number(data.telefone_trabalho),
      telefone: Number(data.telefone),
      email: Number(data.email),
      membros_da_familia: Number(data.membros_da_familia),
      faixa_etaria: Number(data.faixa_etaria),
      renda_anual: Number(data.renda_anual),
      tempo_emprego: Number(data.tempo_emprego),
      tempo_registro_dados: Number(data.tempo_registro_dado)
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
      return result;
    } catch (error) {
      console.error("error", error);
    }
  }


  async publisherMessager(data) {
    const pub = new Pub();
    await pub.publishMessage(data)
  }


}