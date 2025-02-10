import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  const featuredProducts = products.filter((product:any) => product.featured);
  

  return new Response(JSON.stringify(featuredProducts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
