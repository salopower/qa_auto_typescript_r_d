import { exec, ChildProcess } from 'child_process';
import { beforeAll, afterAll } from 'vitest';
import axios from 'axios';

let serverProcess: ChildProcess | undefined;

beforeAll(async () => {
    console.log('Starting server...');
    serverProcess = exec('npm start', {
        cwd: 'E:\\My space\\Git\\official_joke_api'
    });
    serverProcess.stdout?.on('data', (data: string) => {
        console.log(data.trim());
    });

    serverProcess.stderr?.on('data', (data: string) => {
        console.error(data.trim());
    });
    let isServerReady = false;
    const startTime = Date.now();
    const timeout = 10000;

    while (!isServerReady && Date.now() - startTime < timeout) {
        try {
            await axios.get('http://localhost:3005/random_joke');
            isServerReady = true;
            console.log('Server is ready!');
        } catch (error) {
            console.error('Error while checking server readiness:', error);
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
    }

    if (!isServerReady) {
        throw new Error('Server did not start within the expected time.');
    }
});

afterAll(async () => {
    console.log('Stopping server...');
    if (serverProcess) {
        exec('task-kill /F /PID ' + serverProcess.pid, (err) => {
            if (err) {
                console.error('Failed to stop server:', err);
            } else {
                console.log('Server stopped!');
            }
        });
    }
});
