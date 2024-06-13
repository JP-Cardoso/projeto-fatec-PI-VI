import { AnalyticService } from "../../services/analytics/analytics-service.js";

export class AnalyticUseCase {

  constructor(repository) {
    this.repository = repository;
  }

  async execute(data) {
    const dataSaved = AnalyticService.formatData(data);
    console.log(dataSaved);
    const predict = new AnalyticService();
    const result = await predict.predict(dataSaved);
    return
    await this.repository.create(dataSaved);
  }

}

