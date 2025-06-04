import {web} from "./application/web.js";
import dotenv from "dotenv";
dotenv.config();

web.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
