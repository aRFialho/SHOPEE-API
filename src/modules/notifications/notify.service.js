class NotifyService {

    constructor() {
        this.memoryNotifications = [];
    }

    async processEvent(eventData) {
        // Exemplo de eventos da Shopee:
        // order_status_update
        // order_address_updated
        // tracking_no_updated
        // dispute_started
        // cancel_order
        // etc.

        const eventType = eventData.code || "unknown";

        this.memoryNotifications.push({
            received_at: new Date(),
            type: eventType,
            payload: eventData
        });

        // Processamentos específicos:
        if (eventType === "order_address_updated") {
            await this.handleAddressUpdate(eventData);
        }
    }

    async handleAddressUpdate(eventData) {
        // Aqui você adiciona lógica personalizada
        console.log(">>> Endereço alterado:", eventData);
    }

    async getAllNotifications() {
        return this.memoryNotifications;
    }
}

module.exports = new NotifyService();