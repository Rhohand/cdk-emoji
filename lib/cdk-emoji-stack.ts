import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { SnsTopicProps } from 'aws-cdk-lib/aws-events-targets';
import { Subscription, Topic, TopicProps } from 'aws-cdk-lib/aws-sns';
import { SqsSubscription, SqsSubscriptionProps, SubscriptionProps } from 'aws-cdk-lib/aws-sns-subscriptions';
import { Queue, QueueProps } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { emoji } from "node-emoji";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkEmojiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new QueueTelephone(this, 'CdkEmojiQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const topic = new SnsMailBox(this, "CdkEmojiTopic", {

    });

    const subscription = new SnsSubscription(topic, queue, {

    });
  }
}

export class SnsSubscription extends SqsSubscription {

  constructor(topic: Topic, queue: Queue, props: SqsSubscriptionProps) {
    super(queue, props);

    console.log("creating subscription ", [emoji.telephone, emoji.link, emoji.mailbox_with_mail]);
    topic.addSubscription(this);
  }
}

export class QueueTelephone extends Queue {
  constructor(scope: Construct, id: string, props?: QueueProps) {
    super(scope, id, props);
    const encryptedEmoji = props && props.encryption ? emoji.lock : emoji.unlock;
    console.log("creating queue ", [emoji.telephone, encryptedEmoji]);
  }
}



export class SnsMailBox extends Topic {
  constructor(scope: Construct, id: string, props?: TopicProps) {
    super(scope, id, props);
    console.log("creating topic", [emoji.mailbox_with_mail]);
  }
}
