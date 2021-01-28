import axios from 'axios'

class getdatas{

 

getdata(parametre){
  
var config = {
  method: 'get',
  url:  `https://store.therelated.com/rest/V1/products?fields=items[id,sku,name,price,visibility,custom_attributes,extension_attributes]&searchCriteria[pageSize]=100&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${parametre}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`,
 // url: 'https://store.therelated.com/rest/V1/products?fields=items[id,sku,name,price,visibility,custom_attributes,extension_attributes]&searchCriteria[pageSize]=100&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=6&searchCriteria[filter_groups][0][filters][0][condition_type]=eq',
 
  headers: { 
    'Authorization': 'Bearer 66xif6wjoj74y5mpyd3rslfutnyens8e'
  }
};
console.log(config.url)
return axios(config)
}
}
export default new getdatas()