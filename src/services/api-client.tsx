import axios from "axios"

export default axios.create( {
    baseURL: 'https://api.rawg.io/api' , 
    params: { 
        key: '13753d85f0dd4cc496f26370f0eb8cc0'
    }
})