import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}
async function fetchNewsList() {
    try {
        const response = await axios.get(`${config.baseUrl}news/1.json`);
        return response;
    } catch(error) {
        console.log(error);
    }
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
async function fetchAskList() {
    try{
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response;
    }catch(error){
        console.log(error);
    }
}
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchCommentItem(iteminfo){
    return axios.get(`${config.baseUrl}item/${iteminfo}.json`);
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem,
}
