import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { handleDemo } from "./routes/demo";
import { handleContactForm } from "./routes/contact";
import { handleQuoteForm } from "./routes/quote";

// Environment variable validation
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.string().default('8080'),
  PING_MESSAGE: z.string().default('ping'),
  ALLOWED_ORIGINS: z.string().optional(),
});

const env = envSchema.parse(process.env);

export function createServer() {
  const app = express();

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
  });

  app.use('/api/', limiter);

  // Security middleware
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  }));

  // CORS middleware
  app.use(cors({
    origin: env.NODE_ENV === 'production' 
      ? env.ALLOWED_ORIGINS?.split(',') 
      : '*',
    credentials: true,
  }));

  // Body parsing middleware
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // API routes with minimal endpoints
  app.get("/api/ping", (_req, res) => {
    res.json({ message: env.PING_MESSAGE });
  });
  
  app.get("/api/demo", handleDemo);
  
  // Contact form endpoint with validation
  app.post("/api/contact", handleContactForm);

  // Quote form endpoint with validation
  app.post("/api/quote", handleQuoteForm);

  return app;
}
