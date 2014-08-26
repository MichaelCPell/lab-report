json.extract! @report, :id, :title, :objective
json.nodes @report.nodes, :id, :title, :content