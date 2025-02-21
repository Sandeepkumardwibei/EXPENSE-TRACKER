import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      tls: true, // Force SSL/TLS connection
      tlsAllowInvalidCertificates: true, // Allow invalid/self-signed certificates
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};
