import server from "./app.js";
import { PORT, AWS_LINK } from "./solution.js";

server.listen(PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
