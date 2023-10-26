import * as global from '@globals'
const config = global.CONFIG
let date: Date = new Date();

const json = {
  "title": "Gymnasium Data Feed",
  "feed_url": "data.json",
  "date_modified": date,
  "environment": "data",
  "items": {
    "config": config
  }
}

export async function GET({params, request}) {
  return new Response(
    JSON.stringify(json)
  )
}