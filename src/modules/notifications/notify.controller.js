const notifyService = require('./notify.service');

class NotifyController {

    async receiveWebhook(req, res) {
        try {
            const eventData = req.body;
            await notifyService.processEvent(eventData);
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

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