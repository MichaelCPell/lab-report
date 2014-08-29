class Item
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic

  belongs_to :report
  recursively_embeds_many


  field :content, type: String  
  field :type, type: String
  field :title, type: String, default: "Unnamed Item"
  
  def id
    read_attribute(:id).to_s
  end

  def items
    child_items
  end
end