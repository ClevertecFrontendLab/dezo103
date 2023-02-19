import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://strapi.cleverland.by/"
})

export const categoryAPI = {
    getCategories() {
        return instance.get(`/api/categories`)
    }
}

export const booksAPI = {
    getBooks() {
        return instance.get(`/api/books`)
    },
    getSingleBook(id) {
        return instance.get(`/api/books/${id}`)
    }
}
