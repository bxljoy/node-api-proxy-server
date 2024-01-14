import {apxJsonData} from '../costants/apxJsonData.js';

export const getApxData = async (req, res) => {
    res.send(apxJsonData);
}
