import { AnalyticsRepository } from "../../../../domain/repository/analytics/analytcs-repository.js";
import { AnalyticUseCase } from "../../../../domain/useCases/analytics/analytcs.js";

export class AnalyticsController {

  async handle(req, res) {
    try {
      const data = req.body;
      const createAnalyticsRepository = new AnalyticsRepository();
      const createAnalyticsUseCase = new AnalyticUseCase(createAnalyticsRepository);
      const result = await createAnalyticsUseCase.execute(data);
      res.status(201).send({ msg: "Conta criada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: error.message });
    }
  }
  
}