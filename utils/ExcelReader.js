import xlsx from 'xlsx';
import path from 'path';//this is inbuilt inside node.js

export class ExcelReader {
    static readExcelFile(filename, sheetname) {
        //we are defining the path of the file
        const filePath = path.join(__dirname, '../data', filename);
        //read excel file
        const workbook = xlsx.readFile(filePath);
        //get the sheetname
        const worksheet = workbook.Sheets[sheetname];
        //convert the sheet into json
        const xlsxToJson = xlsx.utils.sheet_to_json(worksheet);
        return xlsxToJson;
    }
}