require 'rails_helper'

RSpec.describe Question, type: :model do

  it "is valid with valid attributes" do
    expect(Question.new).to be_valid
  end

  it "is not valid without content" do
    question = Question.new(content: nil)
    expect(question).to_not be_valid
  end

  it "is not valid without answer"do
    question = Question.new(answer: nil)
    expect(question).to_not be_valid
  end

end
