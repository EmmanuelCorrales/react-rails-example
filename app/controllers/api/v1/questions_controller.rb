class Api::V1::QuestionsController < ApiController
  before_action :set_question, only: [:show, :update]

  def index
    respond_with Question.all
  end

  def show
    respond_with @question
  end

  def create
    respond_with :api, Question.create!(question_params)
  end

  def update
    question = Question.find(params[:id])
    @question.update_attributes(question_params)
    respond_with @question, json: @question
  end

  def destroy
    respond_with Question.destroy(params[:id])
  end

  private

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:content, :answer)
  end

end
