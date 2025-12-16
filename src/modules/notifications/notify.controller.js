notifyService = require('./notifyService');

class NotifyController {

    // Webhook principal da Shopee
    async receiveWebhook(req, res) {
        try {
            const eventData = req.body;

            // Processa internamente
            await notifyService.processEvent(eventData);

            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Endpoint para listar notificações registradas no sistema
    async listNotifications(req, res) {
        try {
            const notifications = await notifyService.getAllNotifications();
            res.status(200).json(notifications);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new NotifyController();