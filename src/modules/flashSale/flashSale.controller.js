const flashSaleService = require('./flashSale.service');

exports.listFlashSales = async (req, res) => {
    try {
        const flashSales = await flashSaleService.getFlashSales();
        res.status(200).json(flashSales);
    } catch (error) {
        res.status(500).json({ error: 'Failed to list flash sales' });
    }
};

exports.createFlashSale = async (req, res) => {
    try {
        const newFlashSale = await flashSaleService.createFlashSale(req.body);
        res.status(201).json(newFlashSale);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create flash sale' });
    }
};

exports.updateFlashSale = async (req, res) => {
    try {
        const updatedFlashSale = await flashSaleService.updateFlashSale(req.params.id, req.body);
        res.status(200).json(updatedFlashSale);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update flash sale' });
    }
};

exports.deleteFlashSale = async (req, res) => {
    try {
        await flashSaleService.deleteFlashSale(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete flash sale' });
    }
};