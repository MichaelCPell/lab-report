class ItemsController < ApplicationController

  def show 
  end

  def create

    # @parent = Report.find(params[:report_id])
    # @item = @parent.items.create(params[:item].permit!)

    # @parent.save!
  end

  def update
    @item =  Report.find(params[:report_id]).items.find(params[:id])

    @item.update_attributes(params[:item].permit!)
  end
end