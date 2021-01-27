import axios from 'axios'
class getdatasnavbar{



getdatanavbar(){
    var configs = {
        method: 'get',
        url: 'https://store.therelated.com/rest/V1/categories',
        headers: { 
          
          'Authorization': 'Bearer 66xif6wjoj74y5mpyd3rslfutnyens8e'
        }
      };
      

      

return axios(configs)
}
}
export default new getdatasnavbar()
