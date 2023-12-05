import { spawn } from 'child_process';

const inputKey = (ls) => {
    ls.stdout.on('data', (data) => {
        console.log('STDOUT: ' + data);
    });
    
    ls.stderr.on('data', (data) => {
        console.log('STDERR: ' + data);
    });
    
    ls.on('close', (code) => {
        console.log('Exited with ' + code);
    });
}

export class KeyHandler {
    pressKey (key, type) {
        const ls = spawn('python', ['lib/python-scripts/press-key.py', key, type]);

        inputKey(ls);
    }
}