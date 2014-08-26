class NodesController < ApplicationController

  def show 
  end

  def create
    @parent = Report.find(params[:report_id])

    @node = @parent.nodes.create(params[:node].permit!)

    @parent.save!
  end

  def update
    @node =  Report.find(params[:report_id]).nodes.find(params[:node][:id])

    @node.update_attributes(params[:node].permit!)
  end
end