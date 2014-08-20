class ReportsController < ApplicationController

  def create
    @report = Report.create

    render json: @report
  end

  def update
    @report = Report.find_or_create_by(id: params[:report][:id])

    @report.update_attributes(params[:report].permit!)
    render json: "It worked!"
  end
end