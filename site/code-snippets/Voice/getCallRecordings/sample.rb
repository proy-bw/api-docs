require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

body = ModifyCallRecordingState.new
body.state = "paused"

begin
    response = voice_client.get_query_metadata_for_account_and_call(ENV['BW_ACCOUNT_ID'], call_id)
    puts response.data[0].media_url
rescue Exception => e
    puts e.description
    puts e.response_code
    exit(1)
end