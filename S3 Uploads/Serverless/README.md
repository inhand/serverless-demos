# File Uploader API

This service creates two endpoints aws-api-gateway-path/uploadurl to return a pre signed 
url to upload a file to an S3 bucket and another to save a file properties as json.

## Pre Signed Url
The Lambda returns a signed url which the client can use to post the file to upload
  `aws-api-gateway-path/uploadurl`

## File properties
The Lambda saves the file properties as a JSON file in S3
`aws-api-gateway-path/fileproperties`
