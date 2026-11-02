import fs from 'fs';
import path from 'path';

export class logger {
    static getlogfile() {
        //create logs directory
        const logDirectory = path.join(process.cwd(), 'logs');

        if (!fs.existsSync(logDirectory)) {
            fs.mkdirSync(logDirectory, { recursive: true });
        }
        //Get today,s date
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const date = `${year}-${month}-${day}`;
        //create today's log file name
        const LogFileName = `execution-${date}.log`;
        return path.join(logDirectory, LogFileName);


    }
    static write(level, message) {
        //Get today,s log file
        const logfile = this.getlogfile();

        //Current timestamp
        const timestamp = new Date().toLocaleString();

        //create log message
        const logMessage =
            `[${timestamp}] [${level}] ${message}\n`;

        //Append to today,s log file
        fs.appendFileSync(logfile, logMessage);

        //Also Print in console
        console.log(logMessage.trim());
    }



    static info(message) {
        this.write('INFO', message);
    }

    static debug(message) {
        this.write('DEBUG', message);
    }

    static warn(message) {
        this.write('WARN', message);
    }

    static error(message) {
        this.write('ERROR', message);
    }
}
