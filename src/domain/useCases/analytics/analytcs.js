import { AnalyticService } from "../../services/analytics/analytics-service.js";

export class AnalyticUseCase {

  constructor(repository) {
    this.repository = repository;
  }

  async execute(data) {
    const dataSaved = AnalyticService.formatData(data);
    const predict = new AnalyticService();
    await this.repository.create(dataSaved);
    const result = await predict.predict(dataSaved);
    return result
  }

}

