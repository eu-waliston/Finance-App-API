import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
    const transaction = await Transaction.create(req.body);

    res.json(transaction)
}

export const getTransactions = async (req, res) => {
    const transactions = await Transaction.find({ userId: req.userId });

    res.json(transactions)
}

export const deleteTransaction = async (req, res) => {
    await Transaction.findByIdAndDelete(req.params.id);

    res.json({ Message: "Deletado" });
}

export const updateTransaction = async (req, res) => {
    try {
        const updated = await Transaction.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.userId
            },
            req.body,
            { new: true }
        );

        if (!udated) {
            return res.status(404).json({
                error: "Transação não encontrada"
            })
        }

        res.json(updated)
    } catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar"
        })
    }
}