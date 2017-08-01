require 'rails_helper'

RSpec.describe 'GET #index', type: :request do
  let!(:questions) { FactoryGirl.create_list :question, 3 }

  headers = { "ACCEPT" => "application/json" }

  before { get api_questions_path, headers: headers }

  it 'responds with questions' do
    expect(response.status).to eq(200)
  end
end

RSpec.describe 'GET #show', type: :request do
  question = FactoryGirl.create :question
  headers  = { "ACCEPT" => "application/json" }
  params   = { id: question.id }

  before { get api_question_path(question), headers: headers, params: params }

  it 'responds with a question' do
    expect(response.status).to eq(200)
    expect(response.content_type).to eq("application/json")
  end
end

RSpec.describe "POST #create", type: :request do
  headers  = { "ACCEPT" => "application/json" }
  question = {
    content: "What is your name?",
    answer:  "Emmanuel Corrales"
  }
  params = { question: question }

  before { post api_questions_path, headers: headers, params: params }

  it 'responds with SUCCESS' do
    expect(response).to have_http_status(:created)
    expect(response.content_type).to eq("application/json")
  end
end

RSpec.describe "PUT #update", type: :request do
  headers  = { "ACCEPT" => "application/json" }
  question = FactoryGirl.create :question
  question.content = "Change the question?"
  question.answer  = "Yes"
  params = { question: question.attributes }

  before { put api_question_path(question), headers: headers, params: params }

  it "responds with SUCCESS" do
    expect(response.content_type).to eq("application/json")
    expect(response.status).to eq(200)
  end
end

RSpec.describe "DELETE #destroy", type: :request do
  headers  = { "ACCEPT" => "application/json" }
  question = FactoryGirl.create :question

  before { delete api_question_path(question), headers: headers }

  it "responds with SUCCESS" do
    expect(response.status).to eq(204)
  end
end
