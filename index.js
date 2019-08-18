const express = require("express"),
    process = require("process"),
    redis = require("redis"),
    app = express();

const redisClient = redis.createClient({
    host: "redis-service",
    port: 6379
});
redisClient.set("visits", 0);

app.get("/", (req, res) => {
    redisClient.get("visits", (err, visits) => {
        if(err) {
            res.send(err);
        } else {
            res.send("Number of visited " + visits);
            redisClient.set("visits", parseInt(visits) + 1);
        }
    });
});

app.get("/crash", (req, res) => {
    process.exit(0);
});

app.listen(8080, () => {
    console.log("Web server is running on port 8080");
});