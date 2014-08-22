class ReportsController < ApplicationController


  def show
    @report = Report.find(params[:id])
    render json: @report
  end
  def index
    @reports = Report.all
    render json: @reports
  end

  def create
    @report = Report.create

    render json: @report
  end

  def update
    @report = Report.find_or_create_by(id: params[:id])
    params[:report].delete(:_id)
    @report.update_attributes(params[:report].permit!)
    render json: "It worked!"
  end
end