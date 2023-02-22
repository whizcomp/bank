import axios from "axios";
const endpoint = `http://localhost:3208`

const createUser = (data) => {
    const {
        firstname,
        lastname,
        nationalId,
        dob
    } = data
    return axios.post(`${endpoint}/account/create_acc`, {
        firstname,
        lastname,
        nationalId,
        dob
    });
}
const getAccount = (id) => {
    return axios.get(`${endpoint}/account/${id}`)
}
const getAccounts = (id) => {
    return axios.get(`${endpoint}/account/accs/${id}`)
}
const createAccount = (nationalId) => {
    return axios.post(`${endpoint}/account/new_acc`, {
        nationalId
    })
}
const createCard = (nationalId, account_no) => {
    return axios.post(`${endpoint}/account/new_card`, {
        nationalId,
        account_no
    })
}
const creditCardList = (id) => {
    return axios.get(`${endpoint}/account/cards/${id}`)
}
export {
    createAccount,
    createCard,
    createUser,
    creditCardList,
    getAccount,
    getAccounts
}