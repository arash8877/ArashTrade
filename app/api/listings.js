// API layer

import client from "./client";
const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = async (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  //----- One‑second fake progress animation ---
  let dummyProgress = 0;
  const step = 50; // ms between updates
  const ticks = 1000 / step; // how many updates in 1 s
  const incr = 1 / ticks; // progress increment per tick
  const timer = setInterval(() => {
    dummyProgress = Math.min(1, dummyProgress + incr);
    onUploadProgress(dummyProgress);
    if (dummyProgress >= 1) clearInterval(timer);
  }, step);
  //-----------------------------------------------

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: `image${index}`,
      uri: image,
      type: "image/jpeg",
    })
  );

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  // return client.post(endpoint, data, {
  //   onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  // });

  try {
    return await client.post(endpoint, data);
  } finally {
    clearInterval(timer); // safety net in case request finishes early/late
    onUploadProgress(1); // slam the bar to 100 % when all is said and done
  }
};

export default {
  getListings,
  addListing,
};
