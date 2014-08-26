class Report
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic

  embeds_many :nodes

  
  def id
    read_attribute(:id).to_s
  end
end