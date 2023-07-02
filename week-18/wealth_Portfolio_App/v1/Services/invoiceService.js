const Invoice = require('../Models/Invoice');
const User = require('../Models/User');
const handlePostInvoice = async (userData,name,file_url) => {
    console.log("from post",name,file_url,userData.id);
    try {
        const user = await User.findByPk(userData.id);
        if (user) {
            console.log("sdafdf", user);
            const result = await user.createInvoice({
                name: name,
                file_url:file_url
            });
            return result
        }

    }
    catch (error) {
        throw error
    }
}

const handleGetInvoices = async (userData) => {
    try {
        const user = await User.findByPk(userData.id, { include: Invoice });
        console.log(user)
        if (user) {
            return user.Invoices
        }
        throw "no equities found";
    } catch (err) {
        throw err
    }
}

const handleUpdateInvoice = async (invoice,file_url) => {
    try {
        console.log(invoice.name, invoice.invoice_id);
        const result = await Invoice.update({
            name: invoice.name,
            file_url:file_url
        }, { where: {invoice_id:invoice.invoice_id } })
        return result
    } catch (error) {
        throw err
    }
}

const handleDeleteInvoice = async (invoice) => {
    try {
        console.log(invoice.id);
        const result = await Invoice.destroy({ where: { invoice_id: invoice.id } })
        return result
    } catch (error) {
        throw error
    }
}


module.exports = {
    handlePostInvoice,
    handleGetInvoices,
    handleUpdateInvoice,
    handleDeleteInvoice
}