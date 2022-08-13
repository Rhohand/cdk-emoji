import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Queue, QueueProps } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import {emoji} from "node-emoji";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkEmojiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new QueueMailBox(this, 'CdkEmojiQueue', {
      visibilityTimeout: Duration.seconds(300)
    });
  }
}

export class QueueMailBox extends Queue {
  constructor(scope: Construct, id: string, props?: QueueProps){
    super(scope, id, props);
 console.log("creating queue ", emoji.mailbox_with_mail);
  }
}
