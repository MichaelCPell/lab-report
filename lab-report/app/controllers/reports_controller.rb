class ReportsController < ApplicationController

  def show
    @report = Report.find(params[:id])
  end
  
  def index
    @reports = Report.where(user_id: current_user.id)
  end

  def create
    if current_user
      @report = Report.create(user_id: current_user.id)
    else 
      @report = Report.create
    end
  end

  def update
    @report = Report.find_or_create_by(id: params[:id])
    params[:report].delete(:_id)
    @report.update_attributes(params[:report].permit!)
    render json: "It worked!"
  end

  def destroy
    @report = Report.find(params[:id])
    render json: @report.delete

  end
end