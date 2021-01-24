import axios from 'axios'
class getdatas{



getdata(){
var config = {
  method: 'get',
  url: 'https://store.therelated.com/rest/V1/products?fields=items[id,sku,name,price,visibility,custom_attributes,extension_attributes]&searchCriteria[pageSize]=100&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=3&searchCriteria[filter_groups][0][filters][0][condition_type]=eq',
  headers: { 
    'Authorization': 'Bearer 66xif6wjoj74y5mpyd3rslfutnyens8e'
  }
};

return axios(config)
}
}
export default new getdatas()