import { S3 } from 'aws-sdk';
import { Responses } from '../../common/API_Responses';

exports.handler = async (event, _context, callback) => {

  const s3Client = new S3({apiVersion: "2006-03-01"});
  const formData = JSON.parse(event.body);

  const s3PutParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${formData.fileName}.json`,
    Body: JSON.stringify(formData),
    ACL: 'public-read',
    ContentType: 'application/json'
  }

  try {
    await s3Client.putObject(s3PutParams).promise();
    callback(null, Responses._200('success'));
  } catch (error) {
    callback(null, Responses._400(error));
  }

}
