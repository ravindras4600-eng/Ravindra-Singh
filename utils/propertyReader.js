import fs from 'fs';

export class PropertyReader {

    static readproperties(fileName) {
        //const filepath=path.join(__dirname,'./config',fileName);
        const data = fs.readFileSync(fileName, 'utf-8');
        const properties = {};
        data.split('\n').forEach(Line => {
            Line = Line.trim();
            //ignore empty lines and comments
            if (!Line || Line.startsWith('#')) {
                return;
            }
            const [key, ...value] = Line.split('=');
            properties[key.trim()] = value.join('=').trim();

        });
        return properties;




    }
}