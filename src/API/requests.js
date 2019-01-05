import axios from './baseConfig'

export let getInventory = axios.get('api/get_inventory')
export let getSalesRecord = axios.get('api/get_sales_record')
