
import axios from 'axios'
import jsonp from 'jsonp'
import urls from './urls'


function getDushu(d){
  return  axios.get(urls.dushu)
 }

 function getDianying(d){
  return  axios.get(urls.dianying)
 }
 function getyinyue(d){
  return  axios.get(urls.yinyue)
 }

 // function ajax(path){
 //  return 
 // }
 
export default {
	getDushu,
    getyinyue,
    getDianying
};