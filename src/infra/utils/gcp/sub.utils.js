import { PubSub } from "@google-cloud/pubsub";

const data = [];
class Sub {

  async subMessage() {
    const credentials = {}
    const pub = new PubSub({ projectId: "projects/fatec-pi/subscriptions/pi-iv-fatec-sub", credentials });
    const topicName = "projects/fatec-pi/topics/pi-iv-fatec-sub";
    const subscription = pub.subscription("projects/fatec-pi/subscriptions/pi-iv-fatec-sub");
    console.log(subscription.topic);
    const messageHandler = async (message) => {
      console.log(`Id: ${message.id}`);
      console.log(`Data: ${message.data.toString()}`);
      data.push(JSON.parse(message.data));
      console.log("DATA RESULT ->", [data]);
      message.ack();
    }
    subscription.on('message', messageHandler);

    subscription.on('error', (error) => {
      console.error(`Received error: ${error.message}`);
    });

  }

}

export const sub = new Sub();
 