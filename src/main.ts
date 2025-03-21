import { startApp } from './app';

const PORT = process.env.PORT || 3000;

startApp(PORT).then(() => {
    console.log(`Server is running on port ${PORT}`);
}).catch(err => {
    console.error('Failed to start the application:', err);
});