require 'rails_helper'

RSpec.describe Question, type: :model do
  subject { described_class.new }

  it "is valid with valid attributes" do
    subject.content = "What is your name?"
    subject.answer  = "Emmanuel Corrales"
    expect(subject).to be_valid
  end

  it "is not valid without content" do
    subject.answer = "Emmanuel Corrales"
    expect(subject).to_not be_valid
  end

  it "is not valid without answer" do
    subject.content = "What is your name?"
    expect(subject).to_not be_valid
  end

end
