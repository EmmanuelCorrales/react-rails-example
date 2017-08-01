require "application_responder"
require "application_responder"

class ApiController < ApplicationController
  self.responder = ApplicationResponder
  respond_to :json
end
