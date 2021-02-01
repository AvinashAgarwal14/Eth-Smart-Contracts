import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x22FDEa2e489A7814c75d71d84A28fcFa66df83e0'
);

export default instance;
