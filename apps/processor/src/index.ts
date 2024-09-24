import { Kafka } from "kafkajs";
import { PrismaClient } from '@repo/db';

const client = new PrismaClient();
const TOPIC_NAME = 'zap-events';
const kafka = new Kafka({
    clientId: "outbox-processor",
    brokers: ["localhost:9092"]
})


async function main() {
    const producer = kafka.producer();
    producer.connect();
    while (1) {
        const processes = await client.zapRunOutbox.findMany({
            take: 10
        })

        producer.send({
            topic: TOPIC_NAME,
            messages: processes.map(r => {
                return {
                    value: JSON.stringify({ zapRunId: r.zapRunId, stage: 0 })
                }
            })
        })


        await client.zapRunOutbox.deleteMany({
            where: {
                id: {
                    in: processes.map(p => p.id),
                }
            }
        })
    }
}

main();


