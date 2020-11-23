import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const list = handler(async (event, context) => {
  const params = {
    TableName: 'minions'
  };

  const result = await dynamoDb.scan(params);

  // Return the matching list of items in response body
  return result.Items;
});
