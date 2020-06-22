import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = {content, votes: 0}
    console.log('service object')
    console.log(object)
    const response = await axios.post(baseUrl, object)
    console.log('service response')
    console.log(response.data)
    
    return response.data
}

const vote = async id => {

    const responseGet = await axios.get(`${baseUrl}/${id}`)
    var votedAnecdote = responseGet.data
    votedAnecdote.votes = votedAnecdote.votes + 1
    const responsePut = await axios.put(`${baseUrl}/${id}`, votedAnecdote)
    console.log(responsePut)

}

export default { getAll, createNew, vote }