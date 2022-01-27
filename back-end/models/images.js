import mongodb from "mongodb";

//const bucket = new mongodb.GridFSBucket(db);

export const bucket = new mongodb.GridFSBucket(db, {
  bucketName: "myCustomBucket",
});

fs.createReadStream("./myFile").pipe(
  bucket.openUploadStream("myFile", {
    chunkSizeBytes: 1048576,
    metadata: { field: "myField", value: "myValue" },
  })
);
