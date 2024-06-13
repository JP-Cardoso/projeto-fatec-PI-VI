import { Pub } from "../../../infra/utils/gcp/pub.utils";

export class PubAnalytics {
  static async publisher() {
    const credentials = process.env.GCP_CREDENTIALS_JSON;
    const pub = new Pub();
    const formatData = AnalyticService.formatDataEndTransformBuffer(dataSaved);
    await pub.publishMessage(credentials, formatData);
  }
}