/* config.js acts as single passthrough from root, so that backend package is self-contained */

var config = require('./monorepo')

require('dotenv').config()

/*
The following is two hard coded users with different permissions, which is intended to simulate how you would use identifying information
from the headers sent in EmbedSDK.init() to lookup a specific user from your database and grant their permissions / user attributes
*/
config.authenticatedUser =
{
  user1: {
    //The external user ID should be a unique value from your system
    "external_user_id": "user1",
    "first_name": "Pat",
    "last_name": "Embed",
    "session_length": 3600,
    "force_logout_login": true,
    // The external_group_id is an arbitrary id, usually from an IdP
    // A folder is created for each external_group_id, for embed users to share content
    "external_group_id": "group1",
    "group_ids": [3],
    // For available permissions see: https://docs.looker.com/reference/embedding/sso-embed#permissions
    // If the code here is
    "permissions": [
      "access_data",
      "see_looks",
      "see_user_dashboards",
      "see_lookml_dashboards",
      "download_with_limit",
      "schedule_look_emails",
      "schedule_external_look_emails",
      "create_alerts",
      "see_drill_overlay",
      "save_content",
      "embed_browse_spaces",
      "schedule_look_emails",
      "send_to_sftp",
      "send_to_s3",
      "send_outgoing_webhook",
      "send_to_integration",
      "download_without_limit",
      "explore",
      "see_sql"
    ],
    // Models are mandatory; an emebd user can only see content and data using these models
    "models": ["excel-multisheet-example", "test_project","sales_demo_the_look"],
    "user_attributes": { "locale": "en_US" }
  },
  user2: {
    "external_user_id": "user2",
    "first_name": "Jane",
    "last_name": "Doe",
    "session_length": 3600,
    "force_logout_login": true,
    "external_group_id": "group2",
    "group_ids": [],
    //user2 has reduced permissions
    "permissions": [
      "access_data",
      "see_looks",
      "see_user_dashboards",
      "see_lookml_dashboards"
    ],
    "models": ["excel-multisheet-example","sales_demo_the_look"],
    //user2 will be localized into a different language
    "user_attributes": { "locale": "es_US" }
  }
}

module.exports = config
