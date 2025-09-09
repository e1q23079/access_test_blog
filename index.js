import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const sql = postgres(connectionString);

const main = async () => {

    console.log("Accessing the database...");

    const data = await sql`
    SELECT *
    FROM blog
    WHERE id = 1
    LIMIT 1;
`

    console.log(data[0]['title'], data[0]['text']);

    console.log("Access complete.");

    process.exit(0);

}

main();
