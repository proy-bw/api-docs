require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

body = ApiModifyCallRequest.new
body.redirect_url = "http://www.myapp.com/new"
body.state = "active"

begin
    voice_client.modify_call(ENV['BW_ACCOUNT_ID'], call_id, :body => body)
rescue Exception => e
    puts e.description
    puts e.response_code
    exit(1)
end