import { pool } from "../config/mysql-config.js";

export async function getAllProducts() {
  const [rows] = await pool.query(`select * from products`);

  await Promise.all(
    rows.map(async (row) => {
      const description = await getDescription(row.id);
      row.description = description.map((d) => d.description);
      const reviews = await getReviews(row.id);
      row.reviews = reviews;
      const images = await getImages(row.id);
      row.imgUrl = images;
      const size = await getSizes(row.id);
      row.size = size.map((s) => s.size);
      const colors = await getColors(row.id);
      row.colors = colors.map((c) => c.color);
    })
  );
  return rows[0];
}

export async function search(keyword) {
  const [rows] = await pool.query(
    `select * from products WHERE title LIKE '%${keyword}%'`
  );

  await Promise.all(
    rows.map(async (row) => {
      const description = await getDescription(row.id);
      row.description = description.map((d) => d.description);
      const reviews = await getReviews(row.id);
      row.reviews = reviews;

      const images = await getImages(row.id);
      row.imgUrl = images;

      const sizes = await getSizes(row.id);
      row.sizes = sizes;

      const colors = await getColors(row.id);
      row.colors = colors.map((c) => c.color);
    })
  );
  return rows[0];
}

export async function getDescription(productId) {
  const [rows] = await pool.query(
    `select * from product_description WHERE product_id = ?`,
    [productId]
  );
  return rows;
}

export async function getReviews(productId) {
  const [rows] = await pool.query(
    `select customer,review from product_reviews WHERE product_id = ?`,
    [productId]
  );
  return rows;
}

export async function getImages(productId) {
  const [rows] = await pool.query(
    `select original, thumbnail from product_images where product_id =?`,
    [productId]
  );
  return rows;
}

export async function getSizes(productId) {
  const [rows] = await pool.query(
    `select s.size from product_size ps LEFT JOIN size s ON ps.size_id = s.id where product_id like ?`,
    [productId]
  );
  return rows;
}

export async function getColors(productId) {
  const [rows] = await pool.query(
    `select * from product_colors pc LEFT JOIN color c ON c.id = pc.color_id WHERE product_id = ?`,
    [productId]
  );
  return rows;
}
