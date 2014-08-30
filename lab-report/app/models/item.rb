class Item
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Ancestry
  has_ancestry

  belongs_to :report


  field :content, type: String  
  field :type, type: String
  field :title, type: String, default: "Unnamed Item"
  
  def id
    read_attribute(:id).to_s
  end

  def items
    children
  end
end