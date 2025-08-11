// Import the package (when installed globally, this would work)
// For testing locally, you'll need to use a different approach

// This is just a simulation to test if the package works
import { execSync } from 'child_process';

try {
  // Path to your package's index.js file
  const packagePath = '../package/index.js';
  
  console.log('Testing react-folder-structure-cli...');
  console.log('Running package from:', packagePath);
  
  // Execute the script
  const output = execSync(`node ${packagePath}`, { encoding: 'utf8' });
  console.log('Output:', output);
  
  console.log('Test completed successfully!');
} catch (error) {
  console.error('Test failed:', error.message);
  process.exit(1);
}