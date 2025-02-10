import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  const latestProducts = products.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 8);

  return new Response(JSON.stringify(latestProducts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
