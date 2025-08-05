const mongoose= require('mongoose');

const expenseSchema=new mongoose.Schema({
    user : {type: mongoose.Schema.Types.ObjectId ,ref:'User' ,required :true},
    category: { type: String, required: true, maxlength: 100 },
    amount: { type: Number, required: true },
    expense_date: { type: Date, default: () => new Date().toISOString().split('T')[0] },
    created_at: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expenses',ExpenseSchema)

export default Expense