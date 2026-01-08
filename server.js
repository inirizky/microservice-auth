import app from "./api/index.js";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
