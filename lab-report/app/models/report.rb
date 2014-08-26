class Report
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic


  field :title, type: String
  field :objective, type: String

  embeds_many :nodes

  
  def id
    read_attribute(:id).to_s
  end
end