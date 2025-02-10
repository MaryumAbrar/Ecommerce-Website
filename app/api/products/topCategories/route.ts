import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  // Calculate category counts
  const categoryCounts = products.reduce((acc:any, product:any) => {
    const categories = product.category;
    if (Array.isArray(categories)) {
      categories.forEach((cat) => {
        acc[cat] = (acc[cat] || 0) + 1;
      });
    }
    return acc;
  }, {});

  // Sort products based on top category popularity
  const sortedProducts = products.sort((a:any, b:any) => {
    const aTopCategoryCount = Math.max(
      ...(Array.isArray(a.category) ? a.category.map((cat:any) => categoryCounts[cat] || 0) : [0])
    );
    const bTopCategoryCount = Math.max(
      ...(Array.isArray(b.category) ? b.category.map((cat:any) => categoryCounts[cat] || 0) : [0])
    );

    return bTopCategoryCount - aTopCategoryCount;
  });

  let topCategory = sortedProducts.slice(0, 16);

  return new Response(JSON.stringify(topCategory), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
