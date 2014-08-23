class Report
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic

  def id
    read_attribute(:id).to_s
  end
end