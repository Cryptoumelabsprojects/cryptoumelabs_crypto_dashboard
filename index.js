import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 3006;
app.listen(port, "0.0.0.0", () => {
  console.log(`Crypto Dashboard running on http://0.0.0.0:${port}`);
});
