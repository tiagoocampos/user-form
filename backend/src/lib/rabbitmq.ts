import amqplib from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://admin:admin@localhost:5672";

export async function publishToQueue(queue: string, message: object) {
    const connection = await amqplib.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

    await channel.close();
    await connection.close();
}