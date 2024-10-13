import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// request y resource
const inicio = (req, res) => {
    res.sendFile(path.join(__dirname,"public","index.html"));
}

export{
    inicio
}