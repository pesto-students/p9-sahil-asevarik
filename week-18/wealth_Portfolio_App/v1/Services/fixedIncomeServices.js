const FixedIncome = require('../Models/fixed_income');
const User = require('../Models/User');
const handlePostFixedIncome = async (userData, name, amount) => {
    try {
        const user = await User.findByPk(userData.id);
        if (user) {
            console.log("sdafdf", user);
            const result = await user.createFixedIncome({
                name: name,
                amount: amount,
            });
            return result
        }

    }
    catch (error) {
        throw error
    }
}

const handleGetFixedIncome = async (userData) => {
    try {
        const user = await User.findByPk(userData.id, { include: FixedIncome });
        console.log(user)
        if (user) {
            return user.FixedIncomes
        }
        throw "no equities found";
    } catch (err) {
        throw err
    }
}

const handleUpdateFixedIncome = async (fixedIncome) => {
    try {
        console.log(fixedIncome.name, fixedIncome.amount, fixedIncome.fixedIncome_id);
        const result = await FixedIncome.update({
            name: fixedIncome.name,
            amount: fixedIncome.amount,
        }, { where: {income_id:fixedIncome.fixedIncome_id } })
        return result
    } catch (error) {
        throw err
    }
}

const handleDeleteFixedIncome = async (fixedIncome) => {
    try {
        console.log(fixedIncome.id);
        const result = await FixedIncome.destroy({ where: { income_id: fixedIncome.id } })
        return result
    } catch (error) {
        throw error
    }
}


module.exports = {
    handlePostFixedIncome,
    handleGetFixedIncome,
    handleUpdateFixedIncome,
    handleDeleteFixedIncome
}