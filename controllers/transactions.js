const Transaction = require('../models/Transaction')

// Get all transactions
// @route GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// Add transactions
// @route POST /api/v1/transactions
exports.addTransactions = async (req, res, next) => {
    res.send('POST transactions')
}

// Delete transactions
// @route DELETE /api/v1/transactions/:id
exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE transactions')
}