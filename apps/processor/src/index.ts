import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"]
})

const producer = kafka.producer();


