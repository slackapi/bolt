/* 
  This script is responsible for: 
  - Triggered by GA workflow
  - Connecting with contentful API ✅
  - Accomplishes a simple update action 
  - Runs a secondary parse script
 */
// import 'dotenv/config';
import contentful from 'contentful-management';

console.log('TEST: HAS API TOKEN:', process.env.CONTENTFUL_API_KEY !== undefined, process.env.CONTENTFUL_API_KEY !== null);
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_API_KEY
});
console.log('TEST: HAS CLIENT', client);