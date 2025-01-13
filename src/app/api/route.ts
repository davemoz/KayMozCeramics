const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us20",
});

export async function GET() {
  const response = await client.lists.getAllLists();
  const res = response.json();
  return res;
}
