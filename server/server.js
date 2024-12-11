import { Server } from "socket.io";

const io = new Server(4000, {
  cors: {
    origin: "http://localhost:5173", // React Vite app origin
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  // Send sentiment data every 2 seconds
  const interval = setInterval(() => {
    const sentiment = {
      text: "Sample text",
      score: Math.random() * 2 - 1, // Random sentiment score between -1 and 1
    };
    socket.emit("newSentiment", sentiment);
  }, 2000);

  // Cleanup on disconnect
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

console.log("Socket.IO server running on http://localhost:4000");
