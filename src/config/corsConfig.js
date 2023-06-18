const corsOptions = {
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    allowedHeaders: [
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
    ],
};

module.exports = {
    corsOptions
}