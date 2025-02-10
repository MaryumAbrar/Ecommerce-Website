import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
