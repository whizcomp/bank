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
const deposit = (account_no, amount) => {
    return axios.put(`${endpoint}/account/deposit`, {
        account_no,
        amount
    })
}
const withdraw = (account_no, amount) => {
    return axios.put(`${endpoint}/account/withdraw`, {
        account_no,
        amount
    })
}
const users = () => {
    return axios.get(`${endpoint}/account/users`)
}
const accounts = () => {
    return axios.get(`${endpoint}/account/accounts`)
}
const cards = () => {
    return axios.get(`${endpoint}/account/cards`)
}
export {
    accounts,
    cards,
    createAccount,
    createCard,
    createUser,
    creditCardList,
    deposit,
    getAccount,
    getAccounts,
    users,
    withdraw
}