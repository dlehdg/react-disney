import axios from 'axios';

// api
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',

  params:{
    api_key:"03ad01638ec8b8abd62a6afea608bd03",
    language: "ko-KR"
  }
})

export default instance;