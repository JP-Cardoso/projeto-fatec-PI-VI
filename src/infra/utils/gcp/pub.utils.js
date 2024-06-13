import { PubSub } from "@google-cloud/pubsub";

export class Pub {

  async publishMessage(credentials, data) {
    console.log("credentials", credentials);
    console.log("data", data);
    const pub = new PubSub({ projectId: "projects/fatec-pi/subscriptions/pi-iv-fatec-sub", credentials});
    const topicName = "projects/fatec-pi/topics/pi-iv-fatec";
    try {
      console.log(`Publishing message: ${data}`);
      const messageId = await pub.topic(topicName).publishMessage({ data });
      console.log(messageId);
    } catch (error) {
      console.error(`Received error while publishing: ${error.message}`);
    }
  }
}