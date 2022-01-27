import mongodb from "mongodb";

//const bucket = new mongodb.GridFSBucket(db);

export const bucket = new mongodb.GridFSBucket(db, {
  bucketName: "myCustomBucket",
});
