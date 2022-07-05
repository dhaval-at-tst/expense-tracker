import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    // const [formdata, setFormdata] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // });


    const titleChangeHandler = event => {
        setTitle(event.target.value)

        // setFormdata(prevState => {
        //     return { ...prevState, title: event.target.value }
        // });
    }
    const dateChangeHandler = event => {
        setDate(event.target.value);

        // setFormdata(prevState => {
        //     return { ...prevState, date: event.target.value }
        // });
    }
    const amountChangeHandler = event => {
        setAmount(event.target.value);

        // setFormdata(prevState => {
        //     return { ...prevState, amount: event.target.value }
        // });
    }

    // const handleInputChange = event => {
    //     setFormdata(
    //         formdata[event.target.name] = [event.target.name]
    //     )
    // }

    const handleSubmit = event => {
        event.preventDefault();
        // const expenseData = { ...formdata, date: new Date(formdata.date) };
        const expenseData = { title, amount: +amount, date: new Date(date) };
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');

    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={titleChangeHandler} placeholder="Enter Expense Title" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" min="1" step="1" value={amount} onChange={amountChangeHandler} placeholder="Enter Expense Amount" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" min="2019-01-01" max="2023-12-31" value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    );
}

export default ExpenseForm;