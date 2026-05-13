import Transaction from "../models/Transaction.js";

export const getSumarry = async (req, res) => {
    try {
        const transaction = await Transaction.find({
            userId: req.userId
        });

        const totalIncome = transactions
            .filter(t => t.type === "income")
            .reduce((acc, item) => acc + item.amount, 0)

        const totalExpense = transactions
            .filter(t => t.type === "exprense")
            .reduce((acc, item) => acc + item.amount, 0)

        const balance = totalIncome - totalExpense;

        res.json({
            totalIncome,
            totalExpense,
            balance
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao gerar resumo"
        })
    }
}