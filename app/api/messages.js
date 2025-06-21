// This module provides a function to send messages related to a listing.
import client from "./client";

const send = async (message, listingId) => {
  console.log("▶️ About to call send()");
  const result = await client.post("/messages", { message, listingId });
  console.log("✅ send() finished:", result);
  return result; // Make sure you return this!
};


export default { send };
