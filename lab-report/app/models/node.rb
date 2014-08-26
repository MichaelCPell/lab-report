class Node
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  embedded_in :report
  embedded_in :node


  field :content, type: String  
  field :type, type: String
  field :title, type: String
  
  def id
    read_attribute(:id).to_s
  end
end