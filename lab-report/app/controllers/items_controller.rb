class ItemsController < ApplicationController

  def show 
  end

  def create
    @report = Report.find(params[:report_id])

    if params[:parent_id]
      @item = Item.find(params[:parent_id]).children.create(params[:item].permit!)
    else
      params[:item][:report_id] = params[:report_id]
      @item = Item.create(params[:item].permit!)
    end

  end

  def update
    @item =  Item.find(params[:id])

    @item.update_attributes(params[:item].permit!)
  end
end