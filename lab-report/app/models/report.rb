class Report
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic


  field :title, type: String, default: "Unnamed Report"
  field :objective, type: String

  has_many :items

  
  def id
    read_attribute(:id).to_s
  end
end