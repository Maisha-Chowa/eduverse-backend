import { connect } from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (e) {
    console.log(e);
  }
}
main();
