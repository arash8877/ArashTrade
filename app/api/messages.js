import client from "./client";

// This module provides a function to send messages related to a listing.
const send = (message, listingId) => {
  client.post("/messages", {
    message,
    listingId,
  });
};

export default {
  send,
};
