import credentials from '../../google-sheets-api.json';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async function (req, res){
    const doc = new GoogleSpreadsheet('1tjZ-SilsyBJ8hijZsLtIvtSb418FCIHCMV10Mur73Bo');

    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key,
      });

    await doc.loadInfo(); 

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    const games = rows.map(({ name, imageUrl, position, reviewUrl }) => {
        return {
            position,
            name,
            imageUrl,
            reviewUrl
        }
    })

    res.send({
        title: doc.title,
        games
    })
}