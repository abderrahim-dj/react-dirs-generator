#!/usr/bin/env node

import fs from "fs";
import path from "path";

const folders = [
  "src/components",
  "src/context",
  "src/hooks",
  "src/pages",
  "src/services",
  "src/utils"
];

console.log("📂 Adding project structure...");

folders.forEach(folder => {
  const dirPath = path.join(process.cwd(), folder);

  // Create folder if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created: ${folder}`);
  } else {
    console.log(`⚠️ Skipped (exists): ${folder}`);
  }

  // Add .gitkeep inside each folder
  const gitkeepPath = path.join(dirPath, ".gitkeep");
  if (!fs.existsSync(gitkeepPath)) {
    fs.writeFileSync(gitkeepPath, "");
    console.log(`📄 Added .gitkeep in ${folder}`);
  }
});

// Create extra files if needed
const extraFiles = [
  ".env",
  "eslint.config.js"
];

extraFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
    console.log(`✅ Created: ${file}`);
  }
});

console.log("🎉 Structure added successfully enjoy coding!");