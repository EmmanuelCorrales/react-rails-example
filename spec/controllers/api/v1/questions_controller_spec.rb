require 'rails_helper'

RSpec.describe Api::V1::QuestionsController, type: :controller do

  describe "GET #index" do

    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "loads all of the questions into @questions" do
      q1 = Question.create!(content: "What is your name?", answer: "Emmanuel Corrales")
      q2 = Question.create!(content: "What is your job?", answer: "Software Developer")
      get :index
      expect(assigns(:questions)).to match_array([q1, q2])
    end

  end
end
