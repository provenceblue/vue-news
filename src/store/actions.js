
import {fetchNewsList, 
        fetchAskList, 
        fetchJobsList, 
        fetchList,
        fetchUserInfo,
        fetchCommentItem} from '../api/index.js';

export default {
    //   FETCH_NEWS(context){
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
        
    //   },
    async FETCH_NEWS(context){
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
      FETCH_ASK({commit}){
          return fetchAskList()
            .then(({data}) => {
                commit('SET_ASK',data);
            })
            .catch(error => {
                console.log(error);
            })
      },
      FETCH_JOBS({commit}){
          return fetchJobsList()
            .then(({data}) => commit('SET_JOBS',data))
            .catch(error => console.log(error))
      },
    //   FETCH_USER({commit}, name) {
    //       return fetchUserInfo(name)
    //         .then(({data}) => {
    //             commit('SET_USER',data);
    //         })
    //         .catch(error => console.log(error))
    //   },
    //   FETCH_ITEM({commit}, id) {
    //         return fetchCommentItem(id)
    //         .then(({data}) => {
    //             commit('SET_ITEM',data);
    //         })
    //         .catch(error => console.log(error))
    //   },
        async FETCH_USER({commit},name) {
            const response = await fetchUserInfo(name);
            commit('SET_USER',response.data);
            return response;
        },
        async FETCH_ITEM({commit},id) {
            const response = await fetchCommentItem(id);
            commit('SET_ITEM',response.data);
            return response;
        },
        
    //   FETCH_LIST({commit},pageName){
    //         return fetchList(pageName) 
    //        .then((response) => {
    //             commit('SET_LIST',response.data);
    //             //return response;
    //         })
    //         .catch(error => console.log(error))
    //   }
      async FETCH_LIST({commit},pageName){
          try{
            const response = await fetchList(pageName);
            commit('SET_LIST',response.data);
            return response;
          } catch (error) {
            console.log(error)
          }
          

      }
  }