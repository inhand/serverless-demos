import { S3 } from  'aws-sdk';
import { Responses } from '../../common/API_Responses';

exports.handler = async (event, _context, callback) => {

  const s3Client = new S3({ apiVersion: "2006-03-01"});

  const formData = JSON.parse(event.body);
  const s3UrlParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: formData.fileName,
    ContentType: formData.fileMimeType,
    ACL: 'public-read'
  }

  try {
    const upLoadUrl = await s3Client.getSignedUrl('putObject', s3UrlParams);
    callback(null, Responses._200(upLoadUrl));
  } catch (error) {
    callback(null, Responses._400(error));
  }

}
