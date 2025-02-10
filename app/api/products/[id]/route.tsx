import fs from 'fs';
import path from 'path';

export async function GET(req: Request, { params }:any) {
    const { id } = await params;
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);
  let product = products.find((product:any) => product.id === parseInt(id));

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
