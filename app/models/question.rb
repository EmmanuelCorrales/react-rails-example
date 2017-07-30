class Question < ApplicationRecord
  validates_presence_of :content
  validates_presence_of :answer
end
