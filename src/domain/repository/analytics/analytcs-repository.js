import { AnalyticsModel } from "../../../infra/config/mysql/analytics/Analytcs-model.js";

export class AnalyticsRepository {

  async create(data) {
    await AnalyticsModel.create(data);
  }
}